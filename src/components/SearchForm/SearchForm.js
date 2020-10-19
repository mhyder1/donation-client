import React, { Component } from 'react'
import './SearchForm.css';
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'

class SearchForm extends Component {
    state = { error: null }

    firstInput = React.createRef()

    componentDidMount() {
        this.firstInput.current.focus()
    }
    
    render() {
        const { error } = this.state
        return(
            <form
            className="search-form form"
            onSubmit={this.handleSubmit}
          >
            <div role='alert'>
              {error && <p>{error}</p>}
            </div>
            <div className="form-line">
              <Label htmlFor='search-form-input'>
                Look for sites to donate:
              </Label>
              <Input
                ref={this.firstInput}
                id='search-form-input'
                name='search'
                placeholder='zipcode/address'
              />
              <Button type='submit'>
                Search
              </Button>
              </div>
          </form>
        );
    }
}

export default SearchForm