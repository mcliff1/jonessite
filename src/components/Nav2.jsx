import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Jones Logistic</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
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