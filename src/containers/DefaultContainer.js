import React from 'react';
import { Link } from "react-router-dom";

function underConstruction() {
	return (
		<React.Fragment>
			<div className="container">
				<h1>Under Construction</h1>
				<p>This container is not implemented yet.</p>
				<Link to='/'>Go back...</Link>
			</div>
		</React.Fragment>
	)
}

export default underConstruction;