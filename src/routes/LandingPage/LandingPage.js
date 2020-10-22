import React, { Component } from 'react'
import './LandingPage.css';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service'
import SearchForm from '../../components/SearchForm/SearchForm'
import Button from '../../components/Button/Button'


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
                Stop donating whatever to wherever or whoever, and start giving your belongings the second life they deserve
                by donating through Donation Hub! Welcome to Donation Hub, where you can find the donation centers nearest to you and 
                see what items they are most in need of. Make an account to give back to the community even more through sharing your donations, 
                flagging inaccurate information, and letting us know when there are new donation centers in your area. Get started today!
            </div>
             
            <SearchForm/>
            {/* {!TokenService.hasAuthToken()
                ? <Link className="landingButton" to='/register'><Button>Register for more features!</Button></Link>
                : <></>
            } */}
            {/* Not a part of the wireframe, not sure why it was added
            
            <Link className="landingButton" to='/login'>
                <b>Login</b>
            </Link> */}

           </>
        );
    }
}

export default LandingPage
