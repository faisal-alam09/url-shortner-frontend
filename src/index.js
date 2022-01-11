import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <>
      {/* <div style={{ height: "100vh" }}> */}
        <App />
      {/* </div> */}
    </>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
