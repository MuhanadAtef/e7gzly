import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
