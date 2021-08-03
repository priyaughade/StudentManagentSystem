import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import Home from './Home';
 import NewApp from './NewApp'
import {BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    <BrowserRouter>< NewApp/></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
