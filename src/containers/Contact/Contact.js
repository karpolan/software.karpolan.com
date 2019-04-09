import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SocialList, ContactForm } from '../../components';

class Contact extends Component {
	PropTypes = {
		
	};

	render() {
		return (
			<article className="contact">

				<div className="row pt-3">

					Feel free to ask me any questions about software development, information technologies or online business.

				</div>

				<div className="row">
					<div className="col-md-8 offset-md-2">
						<ContactForm />
					</div>
				</div>

				<div className="row">
					<p>
						We can also discuss different topics on social networks. I am registered under the name <b>KARPOLAN</b> everywhere. 
					</p>	
					<SocialList />
				</div>

			</article>
		)
	}
}; // className BootstrapContactForm	


export default Contact;
