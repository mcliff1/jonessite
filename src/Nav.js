import React, { Component } from 'react';
import { Collapse, Navbar, NavItem, NavLink, NavbarToggler, Nav as ReactNav } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Nav extends Component {
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
        <Navbar color="white" light>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <ReactNav className="ml-auto" nav>
          <NavItem>
            <NavLink to="/" tag={RRNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" tag={RRNavLink}>Contact</NavLink>
          </NavItem>
          </ReactNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Nav;
