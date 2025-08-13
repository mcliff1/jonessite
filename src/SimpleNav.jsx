import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SimpleNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen:!this.state.isOpen
    });
  }


  render() {
    return(
      <div>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    );
  }
}
export default SimpleNav;
