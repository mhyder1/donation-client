import React, { Component } from 'react'
import './NewForm.css';
import { Input, Required, Label , Textarea} from '../Form/Form';
import Button from '../Button/Button';
import LocationService from '../../services/location-service'
//use input names for reference to server naming convention

class NewForm extends Component {
    static defaultProps = {
        onSubmitSuccess: () => { }
    }

    state = { error: null }

    firstInput = React.createRef()
    searchBoxRef = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, address, description, lat, lon} = ev.target
        LocationService.postLocation({
            label: name.label,
            description: description.value,
            address: address.value,
            lat: lat.value,
            lon: lon.value,
        })
        .catch(res => {
        this.setState({ error: res.error })
        })
    }

    componentDidMount() {
        this.postRender()
        this.firstInput.current.focus()
    }

    render() {
        const { error } = this.state
        return(
            <form className="new-form form">
                <div role='alert'>
                    {error && <p>{error}</p>}
                </div>
                <div className="form-line">     
                    <Label htmlFor='location-address-input'>
                        Address:<Required />
                    </Label>
                    <Input
                        ref={this.searchBoxRef}
                        id='location-address-input'
                        name='search'
                        placeholder='Zipcode/Address'
                        required
                    />
                </div>
                <div className="form-line">
                    <Label htmlFor='location-name-input'>
                        Title :<Required />
                    </Label>
                    <Input
                        ref={this.firstInput}
                        id='location-name-input'
                        name='name'
                        placeholder='Goodwill'
                        required

                    />
                </div> 
                <div className="form-line">
                    <Label htmlFor="location-description-input">
                        Description:<Required />
                    </Label>
                    <Textarea
                        id='location-description-input'
                        name='description'
                        placeholder='Who benefits from this organization?'
                        required
                    />
                </div>
                <footer className="form-line">
                    <Button type='submit'>
                        Submit
                    </Button>
                </footer>
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

export default NewForm