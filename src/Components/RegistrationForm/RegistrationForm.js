import './RegistrationForm.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';

const RegistrationForm = (props) => {
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, username, password, passwordVerify} =e.target
        if(password.value !== passwordVerify.value) {
            setError("passwords do not match");
            return;
        }

        AuthApiService.postUser({
            name: name.value,
            username: username.value,
            password: password.value,
        })
        .then(user => {
            name.value ="",
            username.value ="",
            password.value="",
            passwordVerify=""
            props.onRegistrationSuccess()
        })
        .catch(res => {
            setError(res.error);
        })
    }

    return (
        <>
        <div className="RegistrationForm">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="registrationName"></label>
                <input className="registrationName" placeholder="Your Name" type="text" required id="registrationName"></input>

                <label htmlFor="registrationUsername"></label>
                <input className="registrationUsername" placeholder="Choose a Username" type="text" required id="registrationUsername"></input>

                <label htmlFor="registrationPassword"></label>
                <input className="registrationPassword" placeholder="Choose a Password" type="password" required id="registrationPassword"></input>

                <label htmlFor="passwordVerify" ></label><br/>
                <input className='passwordVerify' placeholder="retype password" type='password' required id='passwordVerify'></input><br/>
            </form>
            <div className="existingAccount">
                <Link to='/Login'>
                    <button>Already have an account?</button>
                </Link>
            </div>
        </div>
        </>
    )
}