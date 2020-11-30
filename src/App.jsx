import React from "react";
import { SignInWithAuth } from "./SignIn";
import SignUp from "./SignUp";
import { ProfileWithAuth } from "./Profile";
import Map  from "./Map";
import { withAuth } from "./Auth";
import PropTypes from 'prop-types';
import './App.css';
import Header from './Header';


const pages = {
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
  signin: (props) => <SignInWithAuth {...props} />,
  signup: (props) => <SignUp {...props} />
};

class App extends React.Component {
  state = { currentPage: 'signin'};

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "signin" });
    }
  };

  render() {
    const {currentPage} = this.state
    const paths = Object.keys(pages)
    
    return (
      <>
        <Header paths={paths} navigateTo={this.navigateTo}/>
        {pages[currentPage] ({ navigate: this.navigateTo })}
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
