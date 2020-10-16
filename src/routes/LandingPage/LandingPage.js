import React, { Component } from 'react'
import './LandingPage.css';
import {Link} from 'react-router-dom';


class LandingPage extends Component {

    static defaultProps = {
        location: {},
        history: {
          push: () => { },
        },
      }

    render() {
        return(
            <>
            <div className="landingText">
                Welcome to Donation Gub! We know
                finding somewhere to donate or knowing what 
                to donate can be hard. Using this website,
                you will be able to access local organizations
                that could use your help. You should be able
                to find checklists affiliated with those organizations,
                so that you know exactly what and how much to give! Click
                on Find Opportunities to get started, or log in to your
                existing account! 
            </div>
            <Link className="landingButton" to='/register'>
                <b>Find Opportunities</b>
            </Link>
            <Link className="landingButton" to='/login'>
                <b>Login</b>
            </Link>
            
           </>
        );
    }
}

export default LandingPage
