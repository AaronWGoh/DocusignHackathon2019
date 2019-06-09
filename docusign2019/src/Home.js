import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Container, Grid, Navbar, Nav, NavItem, Jumbotron, Button, Form } from 'react-bootstrap';
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
<h1>
SPEAK TO THE CONGRESS 
PROTECT OUR PUBLIC LAND!
</h1>



          <h1>Make your voice heard now!</h1>
          <input type="file" name="uploadedFile" value={this.state.value} className="inputfile" onChange={this.handleChange}/>

          <Button variant="primary" type="submit" onClick={this.handleUpload}>
            Upload your voice!
          </Button>

        </Form>
      }
      {this.state.submittedSound &&

        <div>
        <h2>Your voice - harmonized with nature</h2>


        <Form id="petitionForm">
  <h5>Submit your petition now!</h5>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="email" placeholder="John Smith" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
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