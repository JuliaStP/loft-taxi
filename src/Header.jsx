import React from 'react';
import Logo from './img/logo-header.png'
import { signOut }  from './actions'
import { Link } from "react-router-dom";

const Header = (props) => {
  // const unauth = (e) => {
  //   e.preventDefault();
  //   const {signOut} = props;
  //   signOut({success: false, error: ''});
  // }

  return(
      <div>
        <img alt="logo" src={ Logo }></img>
        <nav>
          <ul>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/">Log out</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Header;