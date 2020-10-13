import './LandingPage.css';
import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage = (props) => {
    return (
        <>
         <div className="landingHeader">
             Donation Hub
         </div>
         <div className="landingText">
             Welcome to Donation Gub,
             where you can pick a company
             and give them shit. Click on find 
             opportunities to create an account
             and get started!
         </div>
         <div className="landingButton">
             <b>Find Opportunities</b>
         </div>
        </>
    );
}

LandingPage.defaultProps = {
    history: {
        push: () => {},
    },
}

export default LandingPage