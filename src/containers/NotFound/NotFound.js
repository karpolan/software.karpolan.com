import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

/**
 * Renders 404 error page
 */
function notFound() {
	return (
		<main>
			<div className="not-found row">
				<div className="col-md-12">
					<div className="error-template">
						<h1>Oops!</h1>
						<h2>404 Not Found</h2>
						<div className="error-details">
							Sorry, an error has occured. Requested page not found!
						</div>
						<div className="error-actions">
							<Link className="btn btn-primary" to="/">
								<span className="glyphicon glyphicon-home"></span>
								<span>Take Me Home</span>
							</Link>
							<Link className="btn btn-outline-secondary" to="/contact/">
								<span className="glyphicon glyphicon-envelope"></span>
								<span>Contact Support</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default notFound;
