import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <About />
      <Contact />
    </div>
  );
}

export default App;
