import React from 'react'

class SignIn extends React.Component {
  handleSubmit =(e)=>{
    const {navigateTo} = this.props;
    e.preventDefault()
    navigateTo('map');
  }

  handleSignup =(e)=>{
    const {navigateTo} = this.props;
    e.preventDefault()
    navigateTo('signup');
  }

  render() {
    return (
      <>
        <form> Sign In
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="mail@mail.com" size="28" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="**********" size="28" />
          <button onClick={this.handleSubmit}>Sign in</button>
          <div>New user? 
            <button onClick={this.handleSignup}>Sign up</button>
          </div>
        </form>
      </>
    );
  }
}

export default SignIn;
