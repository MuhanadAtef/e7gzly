import React, { Component } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";


class NavBar extends Component {
  state = {
    user: 0, // 0 for Guest, 1 for Customer, 2 for EFA manager, 4 for Adminstrator
    username: "Muhanad",
  };

  // Rout to log in page
  logIn = () => {
    console.log("logged in");
  };

  // Rout to sign up page
  signUp = () => {
    console.log("signed up");
  };

  // Rout to sign out page
  signOut = () => {
    console.log("sign out");
  };

  render() {
    return (
      <div className="Navbar">
        <div className="leftSide">
          <a href="/">
            <img
              className="logo"
              src={logo}
              alt="logo"
              width="60px"
              height="60px"
            ></img>
            <p id="title"> E7GZLY </p>
          </a>
        </div>
        <div className="rightSide">
          <div className="links">
            {this.state.user !== 0 ? (
              <a href="/"> Profile </a>
            ) : (
              <div>
                <button className="signInUpButtons" onClick={this.logIn}>
                  Log In
                </button>
                <button className="signInUpButtons" onClick={this.signUp}>
                  Sign Up
                </button>
              </div>
            )}
            {this.state.user === 2 ? (<a href="/"> Add New Match </a>) : null}
            {this.state.user === 2 ? (<a href="/"> Add New Stadium </a>) : null}
            {this.state.user === 4 ? (<a href="/"> Approve/Remove Users </a>) : null}
            {this.state.user !== 0 ? (
              <button className="signInUpButtons" onClick={this.signOut}>
                Sign Out
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
