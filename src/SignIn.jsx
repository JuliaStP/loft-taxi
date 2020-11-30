import React from 'react';
import {PropTypes} from 'prop-types'
import { withAuth } from "./Auth";

export class SignIn extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.props.signIn(email.value, password.value);
  };

  handleSignup = (event) =>{
    event.preventDefault();
    this.props.navigate("signup");
  }

  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate("profile");
  };

  handlerSubmit = () => {
    this.props.navigate('map');
};

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Success!{" "}
            <button onClick={this.goToProfile}>
              Proceed
            </button>
          </p>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit}> Sign In
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="mail@mail.com" size="28" />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" placeholder="**********" size="28" />
              <button type="submit">Sign in</button>
            </form>
            <div>New user? 
              <button onClick={this.handleSignup}>Sign up</button>
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

export const SignInWithAuth = withAuth(SignIn);
