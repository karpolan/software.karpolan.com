import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './NotFound.css';

/**
 * Renders 404 error page
 */
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Error 404 - Page not found or data incorrect</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <div className="not-found row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">Sorry, an error has occurred. Requested page not found!</div>
              <div className="error-actions">
                <Link className="btn btn-primary" to="/">
                  <span className="glyphicon glyphicon-home" />
                  <span>Take Me Home</span>
                </Link>
                <Link className="btn btn-outline-secondary" to="/contact/index.html">
                  <span className="glyphicon glyphicon-envelope" />
                  <span>Contact Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
