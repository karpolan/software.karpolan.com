import React from 'react';
import { Link } from "react-router-dom";
import { Header, Footer } from '../components';

function underConstruction() {
	return (
		<React.Fragment>
			<Header>Header</Header>

			<div className="container">
				<h1>Under Construction</h1>
				<p>This container is not implemented yet.</p>
				<Link to='/'>Go back...</Link>
			</div>

			<Footer>Footer</Footer>
		</React.Fragment>
	)
}

export default underConstruction;