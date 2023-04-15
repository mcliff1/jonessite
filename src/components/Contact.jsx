import React, { Component } from 'react';
import InlineImage from '../images/TruckMountain_small.jpg';

class Contact extends Component {
  render() {
    return (
      <div  className="container fluid">
        <h2>Contact Us</h2>
        <div className="row">
        <div className="col">
        <div className="border border-info rounded">
          <b>Let’s discuss your transportation needs today!</b>
          <div>
          <p>Chad Hubble</p>
  <p><a href="mailto:chubble@priority1inc.net" target="_blank" rel="noopener noreferrer" className="btn btn-primary">chubble@priority1inc.net</a></p>
  <p><a href="mailto:chad.hubble@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">chad.hubble@gmail.com</a></p>
  <p><a href="tel:3036679595" className="phone">303-667-9595 direct</a></p>
          </div>
          <div>
          <p>Hayden Bellamy</p>
  <p><a href="mailto:hayden.bellamy@priority1inc.net" target="_blank" rel="noopener noreferrer" className="btn btn-primary">hayden.bellamy@priority1inc.net</a></p>
  <p><a href="tel:3038478919" className="phone">303-847-8919 direct</a></p>
          </div>
        </div>
      </div>
        <div className="col"><img src={InlineImage} alt="Trucking Logistics"></img></div>
      </div>
    </div>
    );
  }

}

export default Contact;
