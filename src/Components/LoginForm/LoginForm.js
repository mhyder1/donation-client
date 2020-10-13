import React from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './LoginForm.css';


const LoginForm = (props) => {
    const [error, setError] =useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault()
    

        const {username, password} = e.target;
        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
        .then(user => {
            username.value=""
            password.value=""
            props.onSuccessfulLogin()
        })
        .catch(res => {
            setError(res.error);
        })
    }

    return (
        <>
             <form className="loginForm" /*onSubmit={(e) => handleSubmit(e)}*/>  
                <label htmlFor="username"></label>
                <input className="loginUsername" placeholder="Username:" type="text" required id="username"></input>

                <label htmlFor="password"></label> 
                <input className="loginPassword" placeholder="Password:" type="password" required id="password"></input>
                <div className="loginButton">
                    <button type="submit" value="login">Login!</button> 
                </div>
            </form>

        </>
    )
};

LoginForm.defaultProps = {
    onSuccessfulLogin: () => {}
}

export default LoginForm;