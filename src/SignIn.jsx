import React from 'react';
import {PropTypes} from 'prop-types'
import  Input  from "./Input";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "./actions";

export class SignIn extends React.Component {
  authenticate = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.props.authenticate(email.value, password.value);
  };

  handleSignup = (event) =>{
    event.preventDefault();
    this.props.navigate("signup");
  }

  handlerSubmit = () => {
    this.props.navigate('map');
};

  HandlerInputChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Success!{" "}
            <Link to="/profile"> Proceed </Link>
          </p>
        ) : (
          <div>
            <form onSubmit={this.authenticate}> Sign In
              <Input 
                label="Email"
                type="email"
                name="email"
                changeHandler={this.HandlerInputChange}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                changeHandler={this.HandlerInputChange}
              />
              <button type="submit">Sign in</button>
            </form>
            <div>New user? 
              <Link to="/signup"> Sign Up </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}

SignIn.propTypes = {
  isLoggedIn: PropTypes.bool,
  signIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const SignInWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }), // selector
  { authenticate } // method
)(SignIn);
