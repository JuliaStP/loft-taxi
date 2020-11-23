import React from 'react';

class SignUp extends React.Component {
  handleSubmit=(e)=>{
    const {navigateTo} = this.props;
    e.preventDefault()
    navigateTo('signin');
  }

  render() {
  return (
    <form> Sign Up
      <label htmlFor="email">Email</label>
      <input placeholder="mail@mail.com" id="email" type="email" name="email" size="28" />
      <label htmlFor="name">Full name</label>
      <input placeholder="John Smith" id="name" type="name" name="name" size="28" />
      <label htmlFor="password">Password</label>
      <input placeholder="**********" id="password" type="password" name="password" size="28" />
      <button onClick={this.handleSubmit}>
        Sign Up
      </button>
      <div>Already signed up? 
        <button onClick={this.handleSubmit}>Log in</button>
      </div>
    </form>
  );
}
}

export default SignUp;

