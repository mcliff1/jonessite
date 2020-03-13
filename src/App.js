import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import About from './components/About';
import Contact from './components/Contact';
//import Navigation from './components/Navigation';


//import desktopImage from './background.png';
// imageUrl = window.innerWidth > 649 ? desktopImage ? mobileImage

function App() {
  return (
    //<div style={{backgroundImage: `(${desktopImage})`}}>
    <div className="bg">
      <Router>
      <div className="container">
        <Nav />

        <div>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
