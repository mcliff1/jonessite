import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav2 extends Component {
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
      <div className="nav navItem">
        <nav>
        <ul>
          <li className="navItem"><Link to="/">Home</Link></li>
          <li className="navItem"><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
      </div>
    );
  }
}
export default Nav2;
