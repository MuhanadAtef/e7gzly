import React, { Component } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import Modal from "react-responsive-modal";
const usernameMaxLength = 50;

class NavBar extends Component {
  state = {
    user: 0, // 0 for Guest, 1 for Customer, 2 for EFA manager, 4 for Adminstrator
    username: "Muhanad",
    sign: false,
    login: false,
  };

  onOpenModal = () => {
    this.setState({ sign: true });
    this.setState({ login: false });
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
    this.setState({ sign: false });
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onCloseModalclose = () => {
    this.setState({ login: false });
  };
  /*
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
*/
  render() {
    const login = this.state.login;
    const sign = this.state.sign;
    console.log(this.state);
    return (
      <>
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
                  <button
                    className="signInUpButtons"
                    onClick={this.onOpenModalLogin}
                  >
                    Log In
                  </button>
                  <button
                    className="signInUpButtons"
                    onClick={this.onOpenModal}
                  >
                    Sign Up
                  </button>
                </div>
              )}
              {this.state.user === 2 ? <a href="/"> Add New Match </a> : null}
              {this.state.user === 2 ? <a href="/"> Add New Stadium </a> : null}
              {this.state.user === 4 ? (
                <a href="/"> Approve/Remove Users </a>
              ) : null}
              {this.state.user !== 0 ? (
                <button className="signInUpButtons" onClick={this.signOut}>
                  Sign Out
                </button>
              ) : null}
            </div>
          </div>
        </div>
        {/* Login model */}
        <Modal open={login} onClose={this.onCloseModalclose} center>
          <div className="modalBody">
            <div className="modelTitle">
              <h2>Login</h2>
            </div>
            <span className="subtitle">Username:</span>
            <form className="contact-form loginForm">
              <div className="formGroup">
                <input
                  maxLength={usernameMaxLength}
                  className="formInput"
                  type="text"
                  name="username"
                  required="true"
                  aria-required="true"
                />
              </div>
              <span className="subtitle">Password:</span>
              <div className="formGroup">
                <input
                  type="password"
                  name="password"
                  required="true"
                  className="formInput"
                  autoComplete="off"
                  aria-required="true"
                />
              </div>
              <input
                className="btn btn-md btn-primary btn-center"
                id="login_btn"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </Modal>
        {/* <!-- login End -->
                  <!-- sign up --> */}
        <Modal open={sign} onClose={this.onCloseModal} center>
          <div className="modalBody">
            <div className="modelTitle">
              <h2>Sign Up</h2>
            </div>
            <span className="subtitle">No credit card needed</span>
            <form className="contact-form signForm">
              <div className="formGroup">
                <input
                  maxLength={usernameMaxLength}
                  className="formInput"
                  type="text"
                  name="name"
                  id="name"
                  required="true"
                  autoComplete="off"
                  aria-required="true"
                />
              </div>
              <div className="formGroup">
                <input
                  className="formInput"
                  type="text"
                  name="username"
                  autoComplete="off"
                  aria-required="true"
                />
              </div>
              <div className="formGroup">
                <input
                  type="password"
                  name="password"
                  className="formInput"
                  placeholder="Password"
                  autoComplete="off"
                  aria-required="true"
                />
              </div>
              <input
                className="btn btn-md btn-primary btn-center"
                id="sign_up"
                type="submit"
                value="Sign Up"
              />
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default NavBar;
