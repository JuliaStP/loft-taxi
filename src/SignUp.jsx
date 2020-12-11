import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from './actions';
import './SignUp.css';

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';

class SignUp extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };

  authenticate = e => {
    e.preventDefault();
    const {email, firstName, lastName, password} = e.target ;
    this.props.signUp(email.value, firstName.value, lastName.value, password.value); 
  };

  render() {
    const { email, firstName, lastName, password } = this.state;
    return (
      <div className='form signup-form'> 
        {this.props.isLoggedIn && < Redirect to='/map' />}
        <h2>Sign Up</h2>
        Already registered?  <Link to='/'>Sign In</Link>
        <form onSubmit={this.authenticate} className='signup'>
          <FormLabel className='label'>
            Email*
            <Input 
              className='input'
              type='text'
              name='email'
              value={email} 
              onChange={e => this.setState({ email: e.target.value })} 
            />
          </FormLabel>
          <div className='inlineInputs'>
            <FormLabel className='label' style={{ width:'48%' }}>
              First Name*
              <Input 
                className='input'
                type='text'
                name='firstName'
                value={firstName} 
                onChange={e => this.setState({ firstName: e.target.value })} 
              />
            </FormLabel>
            <FormLabel className='label' style={{ width:'48%' }}>
              Last Name*
              <Input 
                className='input'
                type='text'
                name='lastName'
                value={lastName} 
                onChange={e => this.setState({ lastName: e.target.value })} 
              /> 
            </FormLabel>
          </div>
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
          <button type="submit" className='button'>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { signUp }
)(SignUp);