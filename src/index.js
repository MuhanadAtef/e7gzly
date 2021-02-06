import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from "./components/NavBar";

const token = localStorage.getItem('token')
axios.defaults.baseURL = "http://39374edc3912.ngrok.io/"
axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${token}`
    return config
  }, error => {
    return Promise.reject(error)
  }
)
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
