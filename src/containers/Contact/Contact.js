import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Helmet} from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const propTypesContactForm = {
	name: PropTypes.string,
	email: PropTypes.string,
	message: PropTypes.string
}

/**
 * Basic class for Contact Form. Injects 3rd party scripts and can send email.
 */
class ContactForm extends Component {
	static defaultProps = {
		name: '',
		email: '',
		message: ''
	}
	PropTypes = propTypesContactForm;

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

}; // class ContactFor	


class BootstrapContactForm extends ContactForm {
	PropTypes = propTypesContactForm;

	render() {
		return (
			<div className="container contact-form">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="card card-body bg-light">

							<form className="form-horizontal" action="" method="post"
								onSubmit={this.onFormSubmit}
							>
								<fieldset>
									<legend className="text-center">Contact us</legend>

									<div className="form-group row">
										<label className="col-md-3 col-form-label text-md-right font-weight-bold" htmlFor="name">Name</label>
										<div className="col-md-9">
											<input id="name" name="name" type="text" placeholder="Your name" className="form-control"
												value={this.state.name}
												onChange={this.onInputChange}
											/>
										</div>
									</div>

									<div className="form-group row">
										<label className="col-md-3 col-form-label text-md-right font-weight-bold" htmlFor="email">E-mail</label>
										<div className="col-md-9">
											<input id="email" name="email" type="text" placeholder="Your email" className="form-control"
												value={this.state.email}
												onChange={this.onInputChange}
											/>
										</div>
									</div>

									<div className="form-group row">
										<label className="col-md-3 col-form-label text-md-right font-weight-bold" htmlFor="message">Message</label>
										<div className="col-md-9">
											<textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"
												value={this.state.message}
												onChange={this.onInputChange}
											></textarea>
										</div>
									</div>

									<div className="form-group">
										<div className="col-md-12 text-right">
											<button type="submit" className="btn btn-primary btn-lg">Submit</button>
										</div>
									</div>

								</fieldset>
							</form>

						</div>
					</div>
				</div>
			</div>
		)
	}
}; // className BootstrapContactForm	


/**
 * Contact Form using MDB UI https://mdbootstrap.com/
 */
class MdbContactForm extends ContactForm {
	PropTypes = propTypesContactForm;

	render() {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6">
						<form onSubmit={this.onFormSubmit}>
							<p className="h5 text-center mb-4">Write to us</p>
							<div className="grey-text">
								<MDBInput
									name="name"
									value={this.state.name}
									onChange={this.onInputChange}
									label="Your name"
									icon="user"
									group
									type="text"
									validate
									error="wrong"
									success="right"
								/>
								<MDBInput
									name="email"
									value={this.state.email}
									onChange={this.onInputChange}
									label="Your email"
									icon="envelope"
									group
									type="email"
									validate
									error="wrong"
									success="right"
								/>
								<MDBInput
									name="message"
									value={this.state.message}
									onChange={this.onInputChange}
									type="textarea"
									rows="3"
									label="Your message"
									icon="pencil-alt"
								/>
							</div>
							<div className="text-center">
								<MDBBtn outline color="secondary" onClick={this.onFormSubmit}>
									Send
								<MDBIcon far icon="paper-plane" className="ml-1" />
								</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		)
	}
}; // class MdbContactForm


export default BootstrapContactForm;
//export default MdbContactForm;
