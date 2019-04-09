import React from 'react';
import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

/**
 * Contact form using Material Design Bootstrap (MDB)
 */
const mdbContactForm = (props) => {
	const {name, email, message, onFormSubmit, onInputChange} = props;

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<form onSubmit={onFormSubmit}>
						<p className="h5 text-center mb-4">Write to us</p>
						<div className="grey-text">
							<MDBInput
								name="name"
								value={name}
								onChange={onInputChange}
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
								value={email}
								onChange={onInputChange}
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
								value={message}
								onChange={onInputChange}
								type="textarea"
								rows="3"
								label="Your message"
								icon="pencil-alt"
							/>
						</div>
						<div className="text-center">
							<MDBBtn outline color="secondary" onClick={onFormSubmit}>
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

mdbContactForm.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onInputChange: PropTypes.func,
}

export default mdbContactForm;
