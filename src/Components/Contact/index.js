import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert';
import './style.scss';

const Contact = () => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [alert, setAlert] = useState({});
  const submitHandle = async (e) => {
    e.preventDefault();
    if(e.target.email.value && e.target.title.value && e.target.message.value){
      if(re.test(e.target.email.value)){
        await emailjs.sendForm(
          "gmail",
          "rate_react_app_temp",
          "contact-form",
          "user_YXnOK9G7fuSdKvrmM6Z4l"
        )
        .then(res => {
          document.querySelector('input[name="email"]').value = "";
          document.querySelector('input[name="title"]').value = "";
          document.querySelector('textarea[name="message"]').value = "";
          setAlert({ content: "Your message has been sent", color: "primary" });
        })
        .catch(error => console.log(error));
      } else setAlert({ content: "Your email is invalid", color: "danger" });
    }   else setAlert({ content: "All fields are required", color: "danger" });
  };
  return(
    <form id="contact-form" className="contact-form-cl" onSubmit={submitHandle}>
      <h2 className="mb-4 text-center">Contact with us</h2>
      {alert &&
        <Alert variant={alert.color} closeLabel="close">{alert.content}</Alert>
      }
      <input type="email" name="email" className="form-control" placeholder="e-mail"/>
      <br/>
      <input type="text" name="title" className="form-control" placeholder="Enter title"/>
      <br/>
      <textarea name="message" className="form-control" placeholder="Write your question"></textarea>
      <br/>
      <input type="submit" value="Send" className="form-control"/>
    </form>
  );
}



export default Contact;
