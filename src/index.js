import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Header />
      <App />
    <Footer company ="swu" email ="aofwittawat@gmail.com"/>
  </React.StrictMode>,
  document.getElementById('root')
);


