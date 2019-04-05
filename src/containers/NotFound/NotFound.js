import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function notFound() {
	return (
		<div className="not-found">
			<div className="row">
				<div className="col-md-12">
					<div className="error-template">
						<h1>Oops!</h1>
						<h2>404 Not Found</h2>
						<div className="error-details">
							Sorry, an error has occured. Requested page not found!
						</div>
						<div className="error-actions">
							<Link className="btn btn-primary btn-lg" to="/">
								<span className="glyphicon glyphicon-home"></span>
								<span>Take Me Home</span>
							</Link>
							<Link className="btn btn-secondary btn-lg" to="/contact/">
								<span className="glyphicon glyphicon-envelope"></span>
								<span>Contact Support</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default notFound;
