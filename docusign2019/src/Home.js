import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Container, Grid, Navbar, Nav, NavItem, Jumbotron, Button, Form } from 'react-bootstrap';
import axios from 'axios';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    console.log('hiiii');
    var resp = {
      
    };

    this.state.success = true;
    e.preventDefault();

    axios.get('http://localhost:8080/uploadSound', {
      params: {
        uploadedFile: this.state.value
      }
    })
     .then(function(response){
       console.log(response);
       
   })
     .catch(function(error){
       console.log(error);
     });
  }

  render() {
    return (
    <div>
      <div className="jumbotron landing">
        <h2>Landing page</h2>
        <br/><br/><br/>
      </div>

      <div className="formSection">
        <Form id="soundForm">

          <h6>Make your voice heard now!</h6>
          <input type="file" name="uploadedFile" value={this.state.value}
                        className="inputfile" onChange={this.handleChange}/>

          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>

        </Form>
      </div>

    <div>
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
          </div>
        );
  }
}

export default Home;