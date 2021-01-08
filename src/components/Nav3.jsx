import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


class Navigation extends Component {
  render() {
    return (
      <div>
    <header>
      <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavLink className="navbar-brand" to="/">Jones Logistics</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  </div>
  )
}
}


// <li class="nav-item">
//   <a class="nav-link disabled" href="#">Disabled</a>
// </li>

// <form class="form-inline mt-2 mt-md-0">
//   <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
//   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// </form>


export default Navigation
