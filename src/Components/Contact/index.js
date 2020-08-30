import React from 'react';
import * as emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert';
import './style.scss';
import { connect } from 'react-redux';
import actions from '../../redux/contact/actions';
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const Contact = props => {

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
          props.setAlert({ content: "Your message has been sent", color: "primary" });
        })
        .catch(error => console.log(error));
      }
      else props.setAlert({
          content: "Your email is invalid",
          color: "danger"
        });
    }
    else props.setAlert({
        content: "All fields are required",
        color: "danger"
      });
  }

  return(
    <form id="contact-form" className="contact-form-cl" onSubmit={submitHandle}>
      <h2 className="mb-4 text-center">Contact with us</h2>
      {props.alert &&
        <Alert variant={props.alert.color} closeLabel="close">{props.alert.content}</Alert>
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



const mapStateToProps = state => {
  return {
    alert: state.contact.alert
  }
}

const mapDispatchToProps = dispatch => ({
  setAlert: alert => dispatch(actions.setAlert(alert))
})

export const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact)
