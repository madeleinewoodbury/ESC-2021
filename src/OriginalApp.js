import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Components
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/info/About';
import History from './components/info/History';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Participants from './components/participants/Participants';
import Countries from './components/countries/Countries';
import Competitions from './components/competitions/Competitions';
import ParticipantPostcard from './components/postcard/ParticipantPostcard';
import CountryPostcard from './components/postcard/CountryPostcard';
import CompetitionPostcard from './components/postcard/CompetitionPostcard';
import EditCountries from './components/admin/EditCountries';
import EditParticipants from './components/admin/EditParticipants';
import EditCompetitions from './components/admin/EditCompetitions';
import AddCountry from './components/admin/AddCountry';
import AddParticipant from './components/admin/AddParticipant';
import AddCompetition from './components/admin/AddCompetition';
import EditCountry from './components/admin/EditCountry';
import EditParticipant from './components/admin/EditParticipant';
import EditCompetition from './components/admin/EditCompetition';
import Scoreboard from './components/scoreboard/Scoreboard';
import NotFound from './components/layout/NotFound';
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
            <Route exact path="/about" component={About} />
            <Route exact path="/history" component={History} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/participants" component={Participants} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/competitions" component={Competitions} />
            <Route
              exact
              path="/participants/:id"
              component={ParticipantPostcard}
            />
            <Route exact path="/countries/:id" component={CountryPostcard} />
            <Route
              exact
              path="/competitions/:id"
              component={CompetitionPostcard}
            />
            <Route exact path="/scoreboard/:year" component={Scoreboard} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/edit-countries"
              component={EditCountries}
            />
            <PrivateRoute
              exact
              path="/edit-participants"
              component={EditParticipants}
            />
            <PrivateRoute
              exact
              path="/edit-competitions"
              component={EditCompetitions}
            />
            <PrivateRoute exact path="/add-country" component={AddCountry} />
            <PrivateRoute
              exact
              path="/add-participant"
              component={AddParticipant}
            />
            <PrivateRoute
              exact
              path="/add-competition"
              component={AddCompetition}
            />
            <PrivateRoute
              exact
              path="/edit-country/:id"
              component={EditCountry}
            />
            <PrivateRoute
              exact
              path="/edit-participant/:id"
              component={EditParticipant}
            />
            <PrivateRoute
              exact
              path="/edit-competition/:id"
              component={EditCompetition}
            />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
