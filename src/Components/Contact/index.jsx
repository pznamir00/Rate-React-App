import React, { Component } from 'react';
import './index.css';

class Contact extends Component {
  render(){
    return(
      <form>
        <input type="email" className="form-control" placeholder="e-mail"/>
        <br></br>
        <input type="text" className="form-control" placeholder="Enter name"/>
        <br></br>
        <textarea className="form-control" placeholder="Write your question"></textarea>
        <br></br>
        <input type="submit" className="form-control"/>
      </form>
    );
  }
}



export default Contact;
