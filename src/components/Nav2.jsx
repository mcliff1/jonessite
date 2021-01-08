import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (
      <div>
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavLink className="navbar-brand" to="/">Jones Logistics</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
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
