import React, { Component } from "react";
import LoginModal from "./LoginModal"
import SignUpModal from "./SignUpModal"
import "./NavBar.css";
import logo from "../assets/logo.png";

const USERNAME_MAX_LENGTH = 50;

class NavBar extends Component {
  state = {
    user: 'guest', // guest, fan, manager, admin
    sign: false,  // Open sign up modal
    login: false, // Open login modal
  };

  openSignModal = () => {
    this.setState({ sign: true });
  };

  openLoginModal = () => {
    this.setState({ login: true });
  };

  closeSignModal = () => {
    this.setState({ sign: false });
  };

  colseLoginModal = () => {
    this.setState({ login: false });
  };
 
  signOut = () => {
    console.log("sign out");
  };

  constructor(props) {
    super(props)
    this.setState({user: localStorage.getItem('role') !== null ? localStorage.getItem('role') : 'guest'})
  }

  render() {
    const login = this.state.login;
    const sign = this.state.sign;
    return (
      <>
        <div className="nav-bar">
          <div className="left-side">
            <a href="/">
              <img className="logo" src={logo} alt="logo" height="60px"></img>
              <p id="title"> E7GZLY </p>
            </a>
          </div>
          <div className="right-side">
            <div className="links">
              <a href="/"> Home </a>
              {this.state.user !== 0 ? (
                <a href="/"> Profile </a>
              ) : (
                <>
                  <button
                    className="sign-in-up-buttons"
                    onClick={this.openLoginModal}
                  >
                    Log In
                  </button>
                  <button
                    className="sign-in-up-buttons"
                    onClick={this.openSignModal}
                  >
                    Sign Up
                  </button>
                </>
              )}
              {this.state.user === 2 ? <a href="/"> Add New Match </a> : null}
              {this.state.user === 2 ? <a href="/"> Add New Stadium </a> : null}
              {this.state.user === 4 ? (
                <a href="/"> Approve/Remove Users </a>
              ) : null}
              {this.state.user !== 0 ? (
                <button className="sign-in-up-buttons" onClick={this.signOut}>
                  Sign Out
                </button>
              ) : null}
            </div>
          </div>
        </div>
        {/* Login modal */}
        <LoginModal openLoginModal={login} colseLoginModal={this.colseLoginModal} usernameMaxLength={USERNAME_MAX_LENGTH}/>
        {/*<!-- sign up modal--> */}
        <SignUpModal openSignModal={sign} closeSignModal={this.closeSignModal} usernameMaxLength={USERNAME_MAX_LENGTH}/>
      </>
    );
  }
}

export default NavBar;
