import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchForm.css';
import { Input, Label } from '../Form/Form';

class SearchForm extends Component {

  searchBoxRef = React.createRef();
  state = { 
    error: null,
  };

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

  postPlace = (place) => {
    if(!place) return
    fetch('http://localhost:8000/api/places',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({place})
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  placeChanged = () => {
    const { history } = this.props;
    const place = this.autocomplete.getPlace();
    if(!place.geometry){
      const predictionService = new window.google.maps.places.AutocompleteService();
      predictionService.getPlacePredictions({input:place.name}, (predictions) => {
        if(predictions.length) {
          const { place_id, description } = predictions[0];
          // TODO maybe use this prediction
        }
      });
      return;
    }
    window.sessionStorage.setItem("targetPlace", place);
    const { viewport } = place.geometry;
    const ne = viewport.getNorthEast(), sw = viewport.getSouthWest();
    history.push(`/sites?${sw.lng()},${ne.lat()},${ne.lng()},${sw.lat()}`);
  }

  postRender() {
    // console.log(this.searchBoxRef.current.value)
    this.postPlace(this.searchBoxRef.current.value)
    const { uiRef } = this.props;
    if(uiRef)
      uiRef.current = this;
    this.autocomplete = new window.google.maps.places.Autocomplete(this.searchBoxRef.current);
    this.autocomplete.addListener("place_changed", this.placeChanged);
  }
}

export default withRouter(SearchForm);