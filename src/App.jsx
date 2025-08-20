import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navigation from './components/Nav3';
import About from './components/About';
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
    <div className="page-wrapper">
      <ErrorBoundary>
        <Navigation />
        <main role="main" className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <footer>
          <div className="container">
            <div className="footer-content">
              <p>
                <a href="/#" className="back-to-top">Back to top</a>
              </p>
              <p className="footer-links">
                &copy; 2017 - 2025 Jones Logistics, Inc
                <span className="separator">&middot;</span>
                <NavLink to="/contact">Contact</NavLink>
                <span className="separator">&middot;</span>
                <a href="https://www.truckingcolorado.com/">www.truckingcolorado.com</a>
              </p>
            </div>
          </div>
        </footer>
      </ErrorBoundary>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export { App };
export default AppWrapper;
