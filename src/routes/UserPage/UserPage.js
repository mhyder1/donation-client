import React, { Component } from 'react'
import './UserPage.css';
import UserContext from '../../contexts/UserContext';

class UserPage extends Component {

    static contextType = UserContext

    render() {
        return(
            <div className='user-page-container'>
               <p>Name:john doe</p>
               <p>User Name:jdoe123</p>
               <p>Past Donations: none</p>
               <p>Points:100</p>
            </div>
        );
    }
}

export default UserPage