import React from 'react';
import './style.scss';

const Contact = () => {
  return(
    <form id="contact-form">
      <h2 className="mb-4">Contact with us</h2>
      <input type="email" className="form-control" placeholder="e-mail"/>
      <br/>
      <input type="text" className="form-control" placeholder="Enter name"/>
      <br/>
      <textarea className="form-control" placeholder="Write your question"></textarea>
      <br/>
      <input type="submit" value="Send" className="form-control" disabled/>
    </form>
  );
}



export default Contact;
