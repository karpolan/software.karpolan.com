import React from 'react';
import { Link } from 'react-router-dom';

function UnderConstruction() {
  return (
    <>
      <div className="container">
        <h1>Under Construction</h1>
        <p>This container is not implemented yet.</p>
        <Link to="/">Go back...</Link>
      </div>
    </>
  );
}

export default UnderConstruction;
