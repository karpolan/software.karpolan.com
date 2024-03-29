import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

/**
 * Renders Header with Navbar using React-Bootstrap https://react-bootstrap.github.io
 * See also: https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
 */
const rbHeader = ({ className }) => {
  // Note: <Nav.Link href="#"... is required to collapse after click.
  // Todo: Make collapse when click on the Brand too.
  return (
    <header className={`header ${className}`}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-3">
        <Navbar.Brand as={Link} to="/">
          Software by KARPOLAN
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="#" as={NavLink} to="/contact/index.html">
              Contact
            </Nav.Link>
            <Nav.Link href="#" as={NavLink} to="/about/index.html">
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
