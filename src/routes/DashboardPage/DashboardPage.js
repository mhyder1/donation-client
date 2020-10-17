import React, { Component } from 'react'
import './DashboardPage.css';
import { Link } from 'react-router-dom'
import HubContext from '../../contexts/HubContext'

class DashboardPage extends Component {
    static contextType = HubContext

    render() {
        return(
            <div className='container'>
               dashboard content goes here
            </div>
        );
    }
}

export default DashboardPage