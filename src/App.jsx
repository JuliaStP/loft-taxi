import React from "react";
import SignIn from "./SignIn";
import SignUp  from "./SignUp";
import { Profile } from "./Profile";
import { Map } from "./Map";
import './App.css';
import Header from './Header';

class App extends React.Component {
  state = { currentPage: 'signin'};

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  pages = {
    map: <Map />,
    profile: <Profile />,
    signin: <SignIn navigateTo={this.navigateTo} />,
    signup: <SignUp navigateTo={this.navigateTo} />
  };


  render() {
    const {currentPage} = this.state
    const paths = Object.keys(this.pages)
    
    return (
      <>
        <Header paths={paths} navigateTo={this.navigateTo} />
        {this.pages[currentPage]}
      </>
    );
  }
}

export default App;
