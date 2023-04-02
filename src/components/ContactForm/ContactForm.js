import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RbContactForm from './RbContactForm';
import './ContactForm.css';

/**
 * Contact Form. Injects 3rd party scripts and can send email.
 */
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      email: props.email,
      message: props.message,
      formSubmitted: false,
      emailSent: false,
      scriptsAdded: false,
    };
  }

  componentDidMount() {
    this.addIntgrationScripts();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // Todo: verify this.state.scriptsAdded
    this.setState({ formSubmitted: true });
    this.sendContactEmail();
  };

  onInputChange = (event) => {
    // console.log(`onInputChange(name: ${event.target.name}, value: ${event.target.value})`);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Adds required integration scripts into <head> and/or <body>. Better used it in componentDidMount().
   */
  addIntgrationScripts() {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.async = true;
    script1.src = 'https://cdn.emailjs.com/sdk/2.3.2/email.min.js';
    document.head.appendChild(script1);
    this.setState({ scriptsAdded: true });
  }

  /**
   * Sends emails using 3rd party service
   */
  sendContactEmail() {
    const { name, email, message } = this.state;
    if (email === '' || message === '') {
      console.warn('sendContactEmail() canceled. Nothing to send.');
      return;
    }
    /*
		emailjs.init("user_f84LhJ9n84Exjm3QTSbeF");
		var service_id = "default_service";
		var template_id = "template_software";
		emailjs.send(service_id, template_id, template_params);
		*/
    window.emailjs.init('user_f84LhJ9n84Exjm3QTSbeF');
    window.emailjs
      .send('default_service', 'template_software', {
        name,
        email,
        message,
      })
      .then(() => {
        console.log('sendContactEmail() successful');
        this.setState({
          emailSent: true,
          message: '',
          formSubmitted: false,
        });
      })
      .catch((err) => {
        console.error('sendContactEmail() failed. Error: ', err);
        this.setState({
          emailSent: false,
          formSubmitted: false,
        });
      });
  }

  render() {
    // const {name, email, message} = this.state;
    return (
      <>
        <RbContactForm onFormSubmit={this.onFormSubmit} onInputChange={this.onInputChange} {...this.state} />
      </>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
};

ContactForm.defaultProps = {
  name: '',
  email: '',
  message: '',
};

export default ContactForm;
