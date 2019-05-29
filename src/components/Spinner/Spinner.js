import React from 'react';
import { Spinner } from 'react-bootstrap';

const spinner = () => {
  return (
    <Spinner className="d-block mx-auto" variant="light" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default spinner;
