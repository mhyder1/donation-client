import React, { Component } from 'react'
import './LoginPage.css';
import LoginForm2 from '../../components/LoginForm2/LoginForm2';

class LoginPage extends Component {
        //did you still need my history props?

    static defaultProps = {
        location: {},
        history: {
          push: () => { },
        },
      }
    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/dashboard'
        history.push(destination)
    }  

    render() {
        return(
            <div className="loginPageDisplay">
            <div className="sideText">
                Become a Community Champion
            </div>
            <section className="loginBody">
                <LoginForm2
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        </div>
        );
    }
}

export default LoginPage
