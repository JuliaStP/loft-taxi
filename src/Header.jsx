import React from "react";
import { signOut } from "./actions";
import { Link } from "react-router-dom";
import { Logo } from "loft-taxi-mui-theme";
import { connect } from "react-redux";
import "./Header.css";

class Header extends React.Component {
  unauthenticate = () => {
    this.props.signOut();
  };
  render() {
    return (
      <header className="header">
        <div className="content">
          <Logo />
          <nav className="nav">
            <ul className="list">
              <li className="nav-item">
                <Link to="/map" className="link">Map</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="link">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" onClick={this.unauthenticate} className="link">
                  Log out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect(null, { signOut })(Header);
