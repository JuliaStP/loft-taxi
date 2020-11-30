import React from 'react';
import {PropTypes} from 'prop-types'
import { withAuth } from "./Auth";
import  Input  from "./Input";

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

  HandlerInputChange = ({ name, value }) => {
    this.setState({ [name]: value });
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
