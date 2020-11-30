import React from 'react';
import Logo from './img/logo-header.png'

const Header = (props) => {
  const { navigateTo } = props;

  return(
      <div>
        <img alt="logo" src={ Logo }></img>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  navigateTo("map");
                }}
              >
                Map
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("profile");
                }}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("signup");
                }}
              >
                Log out
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("signup");
                }}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Header;