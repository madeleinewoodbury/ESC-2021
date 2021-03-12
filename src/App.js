import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/info/About";
import History from "./components/info/History";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Countries from "./components/countries/Countries";
import Participants from "./components/participants/Participants";
import Competitions from "./components/competitions/Competitions";
import ParticipantPostcard from "./components/postcard/ParticipantPostcard";
import CompetitionPostcard from "./components/postcard/CompetitionPostcard";
import CountryPostcard from "./components/postcard/CountryPostcard";
import NotFound from "./components/layout/NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/about' component={About} />
          <Route exact path='/history' component={History} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/participants' component={Participants} />
          <Route exact path='/competitions' component={Competitions} />
          <Route
            exact
            path='/participants/:id'
            component={ParticipantPostcard}
          />
          <Route
            exact
            path='/competitions/:id'
            component={CompetitionPostcard}
          />
          <Route exact path='/countries/:id' component={CountryPostcard} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
