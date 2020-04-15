import React, { Component } from 'react';
import InlineImage from '../images/redtruck_crop2.jpeg';
//import Carousel from './Carousel'
//import MyCarousel from './MyCarousel'

class Album extends Component {
  render() {
    return (
        <div>

            <div className="jumbotron">
              <div className="container">
                <h1 className="display-3">Jones Logistics</h1>
                <p>Jones Logistics Corp is an agency owned by Chad Hubble operating under Priority 1 Inc.</p>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h2>Experience</h2>
                  <p>Chad has over 26 years of experience handling truckload, LTL, air freight and small parcel.</p>
                  <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                  <h2>Special Projects</h2>
                  <p>Moving of Flying Dog Brewery from Colorado to Maryland, high rise construction project delivery throughout the United States, heavy haul equipment moves to Fairbanks, Alaska. </p>
                  <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                  <h2>Service</h2>
                  <p>Our combination of being with a well leveraged company and high level technology built by Priority 1 Inc making it easy to do business.</p>
                  <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
              </div>

              <hr />

            </div>



      <div className="container-fluid">
      <div className="row">
      <div className="col">
        <div className="border border-primary rounted">Project freight experience - Chad oversaw, priced and handled the entire Flying Dog Brewery move from Colorado to Maryland.  We worked with Flying Dog management to price up several potential site locations strategically looking at sales numbers and what made sense from a logistics perspective.  We contracted crane services for the pickup and delivery and arranged 11 flatbed shipments that included 3 oversized shipments requiring travel escorts and permitting.   All went well and the brewery was back up and running two weeks later in the process.  Our experience in handling such specialized freight created a savings in down time and was cost effective in coordination with the costly crane services that we were able to minimize through our preparedness.
        </div>
        <div className="border border-primary rounted">Warehouse partner services  - When RES - Renewable Energy Systems was installing a project in southern California, everything was going well until the government services created a delay with permitting of the final install.  The 40 ocean containers were already set to land in Long Beach and the demurrage cost was going to be in the thousands of dollars, RES came to Chad asking for a solution.  We established a partnership for drayage and warehouse storage of the freight and do a full inventory receiving of the 400+ solar panels for future delivery later in the summer.  Our solution again saved the client money and established a streamline of the deliveries when the facility was ready to proceed.
        </div>
      </div>
      <div className="col xs"><img src={InlineImage} alt="Trucking Logistics"></img></div>
      </div>

    </div>

  </div>
    );
  }

}

//<MyCarousel />

// <h2>About Us</h2>
// <div className="row border border-primary rounded">
//   <p>Jones Logistics Corp is an agency owned by Chad Hubble operating under Priority 1 Inc</p>
//   <p>Chad has over 26 years of experience handling truckload, LTL, air freight and small parcel</p>
//   <p>Special Projects include moving of Flying Dog Brewery from Colorado to Maryland, high rise construction project delivery throughout the United States, heavy haul equipment moves to Fairbanks, Alaska</p>
//   <p>Our combination of being with a well leveraged company and high level technology built by Priority 1 Inc making it easy to do business</p>
// </div>


export default Album;
