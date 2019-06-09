import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Container, Grid, Navbar, Nav, NavItem, Jumbotron, Button, Form } from 'react-bootstrap';
import soundfile from './interp2.mid';
import Sound from 'react-sound';

import axios from 'axios';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      sound: '', 
      submittedSound: false,
      submittedPetition: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({sound: e.target.value});
  }

  handleUpload(e) {
    e.preventDefault();
    axios.get('http://localhost:8080/uploadSound', {
      params: {
        uploadedFile: this.state.sound
      }
    })
    .then(function(response){
       console.log(response);
       
    })
    .catch(function(error){
       console.log(error);
     }).then(() => this.setState({ submittedSound: true }));

  }
  handleSubmit(e) {
    console.log('hiiii');
    var resp = {
      
    };

    this.state.success = true;
  }

  render() {
    return (
    <div className="formSection">
      {!this.state.submittedSound &&
        <Form id="soundForm" >
<h3><i>
The sound of our collective voices was loud, very loud, as it should be, always.
</i></h3>

<h1>
SPEAK TO THE CONGRESS TO
PROTECT OUR PUBLIC LAND!
</h1>



          <h1>Vocalize your passion!</h1>
          <img src="https://cdn.glitch.com/2052cc29-e13d-4e5d-a692-aadbe3801616%2Fmegaphone.png?v=1560106440474"/>

          <br/>

          <input type="file" name="uploadedFile" value={this.state.value} className="inputfile" onChange={this.handleChange}/>

          <Button variant="primary" type="submit" onClick={this.handleUpload}>
            Upload your voice!
          </Button>

        </Form>
      }
      {this.state.submittedSound &&

        <div>
        <div id="harmony">
          <h2>Your voice - contributing to change</h2>
          <img src="https://thumbs.gfycat.com/TanDistantBoaconstrictor-max-1mb.gif"/>
        <Sound
           url={soundfile}
           playStatus={Sound.status.PLAYING}
           onLoading={this.handleSongLoading}
           onPlaying={this.handleSongPlaying}
           onFinishedPlaying={this.handleSongFinishedPlaying}
         />

        </div>
      
        <Form id="petitionForm">
<h3>
Our world is precious, and climate change effects all living things. We are the caregiver of the planet, and need to do our part to keep it safe and clean. Our existence depends on it!
</h3>

<h3>Make the world remember your action!</h3>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="email" placeholder="John Smith" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.handleSubmit}>
    Submit
  </Button>

</Form>

</div>
      }


    </div>

        );
  }
}

export default Home;