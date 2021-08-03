import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "../App.css";
import image from '../px.jpg'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={studentlist:[],back:false}

  }
  
  render() {
    console.log(this.props.location.state);
    const { studentlist} = this.state
    return (
      <div>
        <img  src={image} width='100%' height='aut0' />
      </div>
    );
  }
}

export default Contact;
