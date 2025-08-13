import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navigation from './components/Nav3';
import About from './components/About2';
import Contact from './components/Contact';
import { NavLink } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <div className="container">
      <Router>
        <ErrorBoundary>
          <Navigation />
          <main role="main">

            <div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>

          </main>

          <footer className="container">
            <p className="float-right"><a href="/#">Back to top</a></p>
            <p>&copy; 2017 - 2025 Jones Logistics, Inc &nbsp;&middot;&nbsp; <NavLink to="/contact">Contact</NavLink>
             &nbsp;&middot;&nbsp; <a href="https://www.truckingcolorado.com/">www.truckingcolorado.com</a>
            </p>
          </footer>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
