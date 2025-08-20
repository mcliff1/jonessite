import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" variant="dark" fixed="top" className="navbar-dark bg-dark">
        <Container>
          <NavLink className="navbar-brand" to="/">Jones Logistics</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className={({ isActive }) => 
                `nav-link${isActive ? ' active' : ''}`
              }>
                Home
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `nav-link${isActive ? ' active' : ''}`
              }>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
