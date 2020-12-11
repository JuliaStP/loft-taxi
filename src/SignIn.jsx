import React from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { authenticate } from "./actions";
import './SignIn.css';

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }
  
  authenticate = e => {
    e.preventDefault();
    const {email, password} = e.target ;
    this.props.authenticate(email.value, password.value); 
  };
 
  render() {
    const { email, password } = this.state;
    return (
      <div className='form login-form'> 
        {this.props.isLoggedIn && < Redirect to='/map' />}
        <h2>Sign In</h2>
        New User?  <Link to='/signup'>Sign Up</Link>
        <form onSubmit={this.authenticate} className='login'>
          <FormLabel className='label'>
            User Name*
            <Input 
              className='input'
              type='text'
              name='email'
              value={email} 
              onChange={e => this.setState({ email: e.target.value })} 
            />
          </FormLabel>
          <FormLabel className='label'>
            Password*
            <Input 
              className='input'
              type='password'
              name='password'
              value={password} 
              onChange={e => this.setState({ password: e.target.value })} 
            />
          </FormLabel>
          <button type='submit' className='button'>Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(SignIn);

