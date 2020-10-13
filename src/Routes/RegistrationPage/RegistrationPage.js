import React from 'react';
import './RegistrationPage.css';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';


const RegistrationPage = (props) => {
    const handleRegistrationSuccess = user => {
        const {history} = props
        history.push('/login')
    }

    return (
        <>
        <div className="registrationHeader">
            Become A Community Champion
        </div>

        <section className="registrationBody">
            <RegistrationForm
                onRegistrationSuccess={handleRegistrationSuccess}
            />
        </section>

        </>
    );
};

RegistrationPage.defaultProps = {
    history: {
        push: () => {},
    },
}

export default RegistrationPage