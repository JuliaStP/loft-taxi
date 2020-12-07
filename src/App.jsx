import React from "react";
import { SignInWithConnect } from "./SignIn";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { ProfileWithConnect } from "./Profile";
import Map from "./Map";
import PropTypes from "prop-types";
import "./App.css";
import Header from "./Header";
import { connect } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <Switch>
            <Route exact path="/" component={SignInWithConnect} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={ProfileWithConnect} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignInWithConnect} />
          </Switch>
        </section>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
