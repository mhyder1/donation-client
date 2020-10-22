import React, { Component } from 'react'
import './SearchForm.css';
import { Input, Label } from '../Form/Form'

class SearchForm extends Component {
  state = { error: null }

  searchBoxRef = React.createRef();

  componentDidMount() {
      this.postRender();
      this.searchBoxRef.current.focus();
  }
  
  componentDidUpdate() {
    this.postRender();
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
    const autocomplete = new window.google.maps.places.Autocomplete(this.searchBoxRef.current);
    autocomplete.addListener("place_changed", () => {
      const { map } = window;
      if(!map) // prevent this component from blowing up if tested without an attached map
        return;
      // height of the top area, plus 4rem for App (margin-top + padding-top + padding-bottom + margin-bottom)
      const offset = this.searchBoxRef.current.getBoundingClientRect().bottom
        + 4 * parseFloat(window.getComputedStyle(document.documentElement).fontSize);
      console.log(`map-padding-top: ${offset}`);
      map.fitBounds(autocomplete.getPlace().geometry.viewport, { top: offset });
    });
  }
}

export default SearchForm;