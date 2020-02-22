import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Participants from './components/participants/Participants';
import Countries from './components/countries/Countries';
import ParticipantPostcard from './components/participants/ParticipantPostcard';
import CountryPostcard from './components/countries/CountryPostcard';
import EditCountries from './components/admin/EditCountries';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/participants" component={Participants} />
            <Route exact path="/countries" component={Countries} />
            <Route
              exact
              path="/participants/:id"
              component={ParticipantPostcard}
            />
            <Route exact path="/countries/:id" component={CountryPostcard} />
            <Route exact path="/edit-countries" component={EditCountries} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
