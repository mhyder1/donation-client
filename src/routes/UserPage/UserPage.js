import React, { Component } from 'react'
import './UserPage.css';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom'

class UserPage extends Component {

    static contextType = UserContext

    render() {
        return(
            <div className='user-page-container'>
               <p>Name: {this.context.user.name}</p>
               <p>Username: {this.context.user.username}</p>
               <p>Past Donations: none</p>
               <p>Points:100</p>
               <Link className="user-back-to-dash" to='/dashboard'>Back to Dashboard</Link>
            </div>
        );
    }
}

export default UserPage