import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router';

import './App.css';
//import SimpleNav from './SimpleNav';
import Navigation from './components/Nav2';
import About from './components/About';
import Contact from './components/Contact';
//import Navigation from './components/Navigation';


//import desktopImage from './background.png';
// imageUrl = window.innerWidth > 649 ? desktopImage ? mobileImage

function App() {
  return (
    //<div style={{backgroundImage: `(${desktopImage})`}}>
    <div className="container">
      <Router>
        <Navigation />
        <main role="main">

        <div>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
        </div>


          <footer class="container">
            <p class="float-right"><a href="/#">Back to top</a></p>
            <p>&copy; 2017-2018 Jones Logistics, Inc.</p>
          </footer>

        </main>
      </Router>

    </div>
  );
}

export default App;
