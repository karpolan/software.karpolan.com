import React from 'react';
import { Spinner } from 'react-bootstrap';

/**
 * Renders the Spinner control in the project's styling.
 */
const DefaultSpinner = () => {
  return (
    <Spinner className="d-block mx-auto" variant="light" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default DefaultSpinner;
