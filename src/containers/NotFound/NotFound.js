import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './NotFound.css';

/**
 * Renders 404 error page
 */
function NotFound() {
  return (
    <main>
      <div className="not-found row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">Sorry, an error has occured. Requested page not found!</div>
            <div className="error-actions">
              <Link className="btn btn-primary" to="/">
                <span className="glyphicon glyphicon-home" />
                <span>Take Me Home</span>
              </Link>
              <Link className="btn btn-outline-secondary" to="/contact/">
                <span className="glyphicon glyphicon-envelope" />
                <span>Contact Support</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Error - Page not found or data incorrect</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
    </main>
  );
}

export default NotFound;
