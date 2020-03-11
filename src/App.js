import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
//import Navigation from './components/Navigation';


//import desktopImage from './background.png';
// imageUrl = window.innerWidth > 649 ? desktopImage ? mobileImage

function App() {
  return (
    //<div style={{backgroundImage: `(${desktopImage})`}}>
    <div className="bg">
      <div className="container">
        <About />
        <p></p>
        <Contact />
      </div>
    </div>
  );
}

export default App;
