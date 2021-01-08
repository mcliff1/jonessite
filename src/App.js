import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Nav3';
import About from './components/About2';
import Contact from './components/Contact';


function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <main role="main">

          <div>
            <Route exact path="/" component={About} />
            <Route path="/contact" component={Contact} />
          </div>

        </main>

        <footer className="container">
          <p className="float-right"><a href="/#">Back to top</a></p>
          <p>&copy; 2017-2021 Jones Logistics, Inc &middot; <a href="https://www.truckingcolorado.com/contact">Contact</a>
           &middot; <a href="https://www.truckingcolorado.com/">www.truckingcolorado.com</a>
          </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
