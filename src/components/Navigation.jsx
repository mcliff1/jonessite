import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <a className="navbar-brand" href="/">Navigation</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" area-expanded="false" aria-label="Toggle Nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li>ok</li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default Navigation
