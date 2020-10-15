import React from 'react';
import TokenService from '../../Service/token-service';
import {Link} from 'react-router-dom';


const LogoutPage = (props) => {
  const handleLogoutSuccess = () => {  
    TokenService.clearAuthToken()
    const {history} = props
    history.push('/')

    if(props.setIsLoggedIn) {
        props.setIsLoggedIn(false);
    }
  }

handleLogoutSuccess()

    return (
        <>

        <Link to='/'>
            <button>Logout</button>
        </Link> 
        </>
    );
};

LogoutPage.defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

export default LogoutPage