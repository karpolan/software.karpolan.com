import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SocialList, ContactForm } from '../../components';

class Contact extends Component {
	static propTypes = {
		className: PropTypes.string,
	};

	static defaultProps = {
		className: '',
	}

	render() {
		return (
			<article className={`contact ${this.props.className}`}>

				<div className="row">
					<div className="col-12">
						Feel free to ask me any questions about software development, information technologies or online business.
					</div>
				</div>

				<div className="row">
					<div className="col-md-8 offset-md-2 my-3">
						<ContactForm  />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<p>
							We can also discuss different topics on social networks. I am registered under the name <b>KARPOLAN</b> everywhere. 
						</p>	
						<SocialList />
					</div>
				</div>

			</article>
		)
	}
}; // className BootstrapContactForm	


export default Contact;
