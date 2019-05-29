import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

/**
 * Header with Navbar using React-Bootstrap https://react-bootstrap.github.io
 * Also see: https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
 */
const rbHeader = ({ className = '' }) => {
  // Note: <Nav.Link href="#"... is required to collapse after click.
  // Todo: Make collapse when click on the Brand too.
  return (
    <header className={`header ${className}`}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Software by KARPOLAN
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="#" as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link href="#" as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

rbHeader.propTypes = {
  className: PropTypes.string,
};

rbHeader.defaultProps = {
  className: '',
};

export default rbHeader;
