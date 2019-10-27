import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <div className="container">
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
