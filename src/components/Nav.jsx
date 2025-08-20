import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <header>
      <Navbar 
        collapseOnSelect 
        expand="md" 
        variant="dark" 
        fixed="top" 
        className="navbar-dark bg-dark"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Container>
          <NavLink className="navbar-brand" to="/" onClick={handleLinkClick}>Jones Logistics</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={handleLinkClick}
              >
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
