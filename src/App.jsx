import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import  Profile  from "./Profile";
import Map from "./Map";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { Switch, Route, Redirect } from "react-router-dom";

import { Logo } from "loft-taxi-mui-theme";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="logo">
            <Logo />
          </div>
          <section>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile} />
              <Redirect from="*" to="/" />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
