import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from "./Home.js";
// import { Submitted } from "./Submitted.js";

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Container, Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Router>
        <div className="container-fluid">
        <br />
          <div className='row-fluid text-center'>
            <div className='col-sm-4 col-xs-4'><Link to="/">Home</Link></div>
          </div>
      <div className="jumbotron landing"></div>
      <div className="jumbotron">

      </div>

          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
