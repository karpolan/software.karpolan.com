import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

/**
 * Contact form using React-Bootstrap https://react-bootstrap.github.io
 */
const rbContactForm = (props) => {
	const { name, email, message, onFormSubmit, onInputChange } = props;

	return (
		<Card>
			<Card.Body>

				<Form onSubmit={onFormSubmit} >

					<Form.Group as={Row} controlId="formContact.inputName">
						<Form.Label column md={3}>Name</Form.Label>
						<Col md={9}>
							<Form.Control type="text" placeholder="Your name"
								name="name"
								value={name}
								onChange={onInputChange}
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formContact.inputEmail">
						<Form.Label column md={3}>E-mail</Form.Label>
						<Col md={9}>
							<Form.Control type="email" placeholder="name@example.com"
								required
								name="email"
								value={email}
								onChange={onInputChange}
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formContact.inputMessage">
						<Form.Label column md={3}>Message</Form.Label>
						<Col md={9}>
							<Form.Control as="textarea" rows="5" placeholder="Please enter your message here..."
								required
								name="message"
								value={message}
								onChange={onInputChange}
							/>
						</Col>
					</Form.Group>

					<div className="text-right">
						<Button variant="outline-primary" _size="lg" type="submit">
							Submit
						</Button>
					</div>

				</Form>

			</Card.Body>
		</Card>
	)
}

rbContactForm.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onInputChange: PropTypes.func,
}

export default rbContactForm;
