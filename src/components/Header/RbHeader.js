import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

/**
 * Header with Navbar using React-Bootstrap https://react-bootstrap.github.io
 * Also see: https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
 */
const rbHeader = (props) => {
	return (
		<header className={`header ${props.className}`}>

			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand as={Link} to="/">Software</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav className="">
						<Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
						<Nav.Link as={NavLink} to="/about">About</Nav.Link>
					</Nav>
				</Navbar.Collapse>

			</Navbar>

		</header>
	);
}

rbHeader.propTypes = {
	className: PropTypes.string,
}

export default rbHeader;
