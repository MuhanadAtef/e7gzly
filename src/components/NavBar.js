import React, { Component } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import Modal from "react-responsive-modal";
import "bootstrap/dist/css/bootstrap.min.css";

const CITIES = [
  { key: "cairo", value: "Cairo" },
  { key: "alexandria", value: "Alexandria" },
  { key: "giza", value: "Giza" },
  { key: "shubra el-kheima", value: "Shubra El-Kheima" },
  { key: "port said", value: "Port Said" },
  { key: "suez", value: "Suez" },
  { key: "luxor", value: "Luxor" },
  { key: "al-mansura", value: "Al-Mansura" },
  { key: "el-mahalla el-kubra", value: "El-Mahalla El-Kubra" },
  { key: "tanta", value: "Tanta" },
  { key: "asyut", value: "Asyut" },
  { key: "ismailia", value: "Ismailia" },
  { key: "fayyum", value: "Fayyum" },
  { key: "zagazig", value: "Zagazig" },
  { key: "aswan", value: "Aswan" },
  { key: "damietta", value: "Damietta" },
  { key: "damanhur", value: "Damanhur" },
  { key: "al-minya", value: "Al-Minya" },
  { key: "beni suef", value: "Beni Suef" },
  { key: "qena", value: "Qena" },
  { key: "sohag", value: "Sohag" },
  { key: "hurghada", value: "Hurghada" },
  { key: "6th of october city", value: "6th of October City" },
  { key: "shibin el kom", value: "Shibin El Kom" },
  { key: "banha", value: "Banha" },
  { key: "kafr el-sheikh", value: "Kafr el-Sheikh" },
  { key: "arish", value: "Arish" },
  { key: "mallawi", value: "Mallawi" },
  { key: "10th of ramadan city", value: "10th of Ramadan City" },
  { key: "bilbais", value: "Bilbais" },
  { key: "marsa matruh", value: "Marsa Matruh" },
  { key: "idfu", value: "Idfu" },
  { key: "mit ghamr", value: "Mit Ghamr" },
  { key: "al-hamidiyya", value: "Al-Hamidiyya" },
  { key: "desouk", value: "Desouk" },
  { key: "qalyub", value: "Qalyub" },
  { key: "abu kabir", value: "Abu Kabir" },
  { key: "kafr el-dawwar", value: "Kafr el-Dawwar" },
  { key: "girga", value: "Girga" },
  { key: "akhmim", value: "Akhmim" },
  { key: "matareya", value: "Matareya" },
];
CITIES.sort();
const USERNAME_MAX_LENGTH = 50;

class NavBar extends Component {
  state = {
    user: 0, // 0 for Guest, 1 for Customer, 2 for EFA manager, 4 for Adminstrator
    username: "Muhanad",
    sign: false,
    login: false,
  };

  openSignModal = () => {
    this.setState({ sign: true });
    this.setState({ login: false });
  };

  openLoginModal = () => {
    this.setState({ login: true });
    this.setState({ sign: false });
  };

  closeSignModal = () => {
    this.setState({ sign: false });
  };

  colseLoginModal = () => {
    this.setState({ login: false });
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
    const login = this.state.login;
    const sign = this.state.sign;
    return (
      <>
        <div className="nav-bar">
          <div className="left-side">
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
          <div className="right-side">
            <div className="links">
              {this.state.user !== 0 ? (
                <a href="/"> Profile </a>
              ) : (
                <div>
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
                </div>
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
        {/* Login model */}
        <Modal open={login} onClose={this.colseLoginModal} center>
          <div className="modal-log-in-body">
            <div className="modal-title">
              <h2>Login</h2>
            </div>
            <form className="contact-form loginForm">
              <div className="form-group">
                <label htmlFor="username-login" className="subtitle">
                  Username:
                </label>
                <input
                  maxLength={USERNAME_MAX_LENGTH}
                  className="form-input"
                  type="text"
                  name="username"
                  id="username-login"
                  required={true}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password-login" className="subtitle">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password-login"
                  required={true}
                  className="form-input"
                  autoComplete="off"
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
        <Modal open={sign} onClose={this.closeSignModal} center>
          <div className="modal-sign-body">
            <div className="modal-title">
              <h2>Sign Up</h2>
            </div>
            <form className="contact-form signForm" onSubmit={this.signUp}>
              <div className="container">
                <div className="row">
                  <div className="col-md">
                    <div className="form-group">
                      <label htmlFor="username-sign" className="subtitle">
                        Username:
                      </label>
                      <input
                        maxLength={USERNAME_MAX_LENGTH}
                        className="form-input"
                        id="username-sign"
                        type="text"
                        name="username"
                        required={true}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-sign" className="subtitle">
                        Password:
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password-sign"
                        className="form-input"
                        autoComplete="off"
                        required={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm-password" className="subtitle">
                        Confirm Password:
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        className="form-input"
                        autoComplete="off"
                        aria-required={true}
                        required={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="subtitle">
                        Email Address:
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        required={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="birth" className="subtitle">Birth Date:</label>
                      <input
                        className="form-input"
                        type="date"
                        id="date-input"
                        name="birth"
                        required={true}
                        min="1900-01-01"
                      ></input>
                    </div>
                    <label htmlFor="gender-radio" className="subtitle">
                      Gender:
                    </label>
                    <br></br>
                    <div id="htmlFor" className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        id="male-radio"
                        type="radio"
                        name="gender"
                        value="male"
                        required={true}
                      />
                      <label className="form-check-label" htmlFor="male-radio">
                        Male
                      </label>
                      <input
                        className="form-check-input"
                        id="female-radio"
                        type="radio"
                        name="gender"
                        value="female"
                        required={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="female-radio"
                      >
                        Female
                      </label>
                      <input
                        className="form-check-input"
                        id="other-radio"
                        type="radio"
                        name="gender"
                        value="other"
                        required={true}
                      />
                      <label className="form-check-label" htmlFor="other-radio">
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="vl"></div>
                  <div className="col-md">
                    <div className="form-group">
                      <label htmlFor="first-name" className="subtitle">
                        First Name:
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="off"
                        required={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name" className="subtitle">
                        Last Name:
                      </label>
                      <input
                        className="form-input"
                        id="last-name"
                        type="text"
                        name="lastName"
                        autoComplete="off"
                        required={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address" className="subtitle">Address:</label>
                      <input
                        className="form-input"
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="off"
                        aria-required={true}
                      />
                    </div>
                    <div className="form-group">
                    <label htmlFor="city" className="subtitle">City:</label>
                      <select name="city" id="city" className="form-input">
                        {CITIES.map(city => (
                          <option key={city.key} value={city.key}>
                            {city.value}
                          </option>
                        ))}
                        ;
                      </select>
                    </div>
                    <label htmlFor="role-radio" className="subtitle">Role:</label>
                    <br></br>
                    <div className="form-check form-check-inline" id="role-radio">
                      <input
                        className="form-check-input"
                        id="fan-radio"
                        type="radio"
                        name="role"
                        value="fan"
                        required={true}
                      />
                      <label className="form-check-label" htmlFor="fan-radio">
                        Fan
                      </label>
                      <input
                        className="form-check-input"
                        id="manager-radio"
                        type="radio"
                        name="role"
                        value="manager"
                        required={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="manager-radio"
                      >
                        Manager
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
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
