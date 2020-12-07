import React from 'react';
import { PropTypes } from 'prop-types';
import  Input  from './Input';
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  goToSignIn = (e) => {
    e.preventDefault();
    this.props.signOut();
    this.props.navigate('signin');
  };

  register = (e) => {
    e.preventDefault();
    this.props.signOut();
    this.props.navigate("signin");
  };

  state = {
    email: '',
    name: '',
    password: ''
  };

  HandlerInputChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={() => { this.register() }}> Sign Up
          <Input 
            // aria-labelledby="Email"
            label="Email"
            type="email"
            name="email"
            changeHandler={this.HandlerInputChange} />
          <Input
            label="Name"
            type="name"
            name="name"
            class="half"
            changeHandler={this.HandlerInputChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            changeHandler={this.HandlerInputChange}
          />
          <button type="submit">
            Sign Up
          </button>
          <div>Already signed up?
            <Link to="/signin">Log in</Link>
          </div>
        </form>
      </>
    );
  }
}

SignUp.propTypes = {
  handlerSubmit: PropTypes.func,
  navigate: PropTypes.func,
};

export default SignUp;