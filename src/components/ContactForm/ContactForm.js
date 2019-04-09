import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Helmet} from "react-helmet";
import BootstrapContactForm from './BootstrapContactForm';

/**
 * Contact Form. Injects 3rd party scripts and can send email.
 */
class ContactForm extends Component {
	PropTypes = {
		name: PropTypes.string,
		email: PropTypes.string,
		message: PropTypes.string
	}

	static defaultProps = {
		name: '',
		email: '',
		message: ''
	}

	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			email: props.email,
			message: props.message,
			formSubmitted: false,
			emailSent: false,
		};
	}

	componentDidMount() {
		this.addIntgrationScripts();
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.sendContactEmail();
	}

	onInputChange = (event) => {
		// console.log(`onInputChange(name: ${event.target.name}, value: ${event.target.value})`);
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	/**
	 * Adds requered integration scripts into <head> and/or <body>. Better used it in componentDidMount(). 
	 */
	addIntgrationScripts() {
		const script1 = document.createElement("script");
		script1.type = 'text/javascript';
		script1.async = true;
		script1.src = "https://cdn.emailjs.com/sdk/2.3.2/email.min.js";
		document.head.appendChild(script1);
	}

	/**
	 * Sends emails using 3rd party service
	 */
	sendContactEmail() {
		if (this.state.email === '' || this.state.message === '') {
			console.warn('sendContactEmail() canceled. Nothing to send.');
			return false;
		}
		/*
		emailjs.init("user_f84LhJ9n84Exjm3QTSbeF");

		var template_params = {
			"email": "email_value",
			"name": "name_value",
			"message": "message_value"
		}

		var service_id = "default_service";
		var template_id = "template_LD76xSO8_clone";
		emailjs.send(service_id, template_id, template_params);		
		*/
		window.emailjs.init("user_f84LhJ9n84Exjm3QTSbeF");
		window.emailjs
			.send('default_service', 'template_LD76xSO8_clone', {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message
			})
			.then(res => {
				console.log('sendContactEmail() succesful');
				this.setState({
					emailSent: true,
					message: '',
					formSubmitted: false
				});
			})
			.catch(err => console.error('sendContactEmail() failed. Error: ', err));
	}

	render() {
		//const {name, email, message} = this.state;
		return(
			<React.Fragment>
				<BootstrapContactForm onFormSubmit={this.onFormSubmit} onInputChange={this.onInputChange} {...this.state} />
			</React.Fragment>
		);
	}

};

export default ContactForm;