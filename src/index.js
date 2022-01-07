import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Views/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Views/Footer';

ReactDOM.render(
  <React.StrictMode>
    <div style={{height:"100vh"}}>
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
