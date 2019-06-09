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
            <div className='col-sm-4 col-xs-4'><Link to="/submitted">Jingle</Link></div>
          </div>
          <br /><br />

      <div className="jumbotron landing">

<h3>
 We've lost about 1.2 million square miles of wild land over the past 20 years, - that’s about the size of Alaska plus California.
</h3>

        <img src="https://thumbs.gfycat.com/TanDistantBoaconstrictor-max-1mb.gif"/>
        
        <br/><br/><br/>
      </div>

          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
