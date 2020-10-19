import React, { Component } from 'react'
import './DashboardPage.css';
import { Link } from 'react-router-dom'
import HubContext from '../../contexts/HubContext'
import SearchForm from '../../components/SearchForm/SearchForm'

class DashboardPage extends Component {
    static contextType = HubContext

    render() {
        return(
            <div className='container'>
               dashboard content goes here
               <br/>
               <Link to='/hub/test'>test link to hub page</Link>
               <SearchForm/>
            </div>
        );
    }
}

export default DashboardPage