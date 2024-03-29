import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import Spinner from '../Spinner/Spinner';

/**
 * Contact form using React-Bootstrap https://react-bootstrap.github.io
 */
const rbContactForm = (props) => {
  const { name, email, message, onFormSubmit, onInputChange, emailSent, formSubmitted } = props;

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={onFormSubmit}>
          <Form.Group as={Row} controlId="formContact.inputName" className="mb-3">
            <Form.Label column md={3}>
              Name
            </Form.Label>
            <Col md={9}>
              <Form.Control type="text" placeholder="Your name" name="name" value={name} onChange={onInputChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formContact.inputEmail" className="mb-3">
            <Form.Label column md={3}>
              E-mail
            </Form.Label>
            <Col md={9}>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formContact.inputMessage" className="mb-3">
            <Form.Label column md={3}>
              Message
            </Form.Label>
            <Col md={9}>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Please enter your message here..."
                required
                name="message"
                value={message}
                onChange={onInputChange}
              />
            </Col>
          </Form.Group>

          {formSubmitted && <Spinner />}
          {emailSent && <Alert variant="success">Your message has been sent successfully</Alert>}

          <div className="text-end">
            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

rbContactForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
  emailSent: PropTypes.bool,
  formSubmitted: PropTypes.bool,
};

rbContactForm.defaultProps = {
  name: '',
  onInputChange: null,
  emailSent: false,
  formSubmitted: false,
};

export default rbContactForm;
