import React from 'react';
import TruckMountain from '../images/TruckMountain_small.jpg';
import FleetwoodLogo from '../images/Fleetwood160x160.jpg';

const Contact = () => {
  return (
    <div className="about-container"> {/* Use same container class as About page */}
      <div className="hero-section">
        <img src={TruckMountain} alt="Truck in the mountains" className="hero-image" />
        <div className="hero-content">
          <img src={FleetwoodLogo} alt="Jones Logistics" className="company-logo" />
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            Let's discuss how Jones Logistics, a Priority 1 Inc. agency, can optimize 
            your transportation and logistics needs with our decades of experience.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Chad Hubble</h3>
            <div className="contact-links">
              <a href="mailto:chubble@priority1inc.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary">
                chubble@priority1inc.net
              </a>
              <a href="mailto:chad.hubble@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary">
                chad.hubble@gmail.com
              </a>
              <a href="tel:3036679595" className="phone">
                303-667-9595 (direct)
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Hayden Bellamy</h3>
            <div className="contact-links">
              <a href="mailto:hayden.bellamy@priority1inc.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary">
                hayden.bellamy@priority1inc.net
              </a>
              <a href="tel:3038478919" className="phone">
                303-847-8919 (direct)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
