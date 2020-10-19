import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import UserPage from '../../routes/UserPage/UserPage'
import HubPage from '../../routes/HubPage/HubPage'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
            )}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PrivateRoute
              exact
              path={'/dashboard'}
              component={DashboardPage}
            />
            <PrivateRoute
              path={'/hub/:id'}
              component={HubPage}
            />
            <PrivateRoute
              path={'/user'}
              component={UserPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
