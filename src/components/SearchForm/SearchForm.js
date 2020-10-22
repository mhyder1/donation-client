import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchForm.css';
import { Input, Label } from '../Form/Form';

class SearchForm extends Component {

  searchBoxRef = React.createRef();
  state = { error: null };

  componentDidMount() {
    this.postRender();
    this.searchBoxRef.current.focus();
  }
  
  componentDidUpdate() {
    this.postRender();
  }

  getBottom() {
    return this.searchBoxRef.current.getBoundingClientRect().bottom;
  }

  handleSubmit(e) {
    e.preventDefault();
    return false;
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className="search-form form"
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className="form-line">
          <Label htmlFor='search-form-input'>
            Search your area:
          </Label>
          <Input
            ref={this.searchBoxRef}
            id='search-form-input'
            name='search'
            placeholder='zipcode/address'
          />
        </div>
      </form>
    );
  }

  postRender() {
    const { history, uiRef } = this.props;
    if(uiRef)
      uiRef.current = this;
    const autocomplete = new window.google.maps.places.Autocomplete(this.searchBoxRef.current);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      window.sessionStorage.setItem("targetPlace", place);
      const { viewport } = place.geometry;
      const ne = viewport.getNorthEast(), sw = viewport.getSouthWest();
      history.push(`/sites?${sw.lng()},${ne.lat()},${ne.lng()},${sw.lat()}`);
    });
  }
}

export default withRouter(SearchForm);