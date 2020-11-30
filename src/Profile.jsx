import React from 'react'
import { withAuth } from "./Auth";

export class Profile extends React.Component {
  unauth = (e) => {
    e.preventDefault();
    this.props.signOut();
    this.props.navigate("signin");
  };

  render() {
    return (
      <p>
        Profile.
        <button onClick={this.unauth}>Log out</button>
      </p>
    );
  }
}

export const ProfileWithAuth = withAuth(Profile);