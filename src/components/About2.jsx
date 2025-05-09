//import React, { Component } from 'react';
import React from 'react';
import { Button, Collapse } from 'react-bootstrap';
import InlineImage from '../images/Fleetwood160x160.jpg';
//import BannerImage from '../branding/bw_logo.png';

//import Album from './Album'
//import Carousel from './Carousel'
//import MyCarousel from './MyCarousel'
// <img src={BannerImage} alt="Jones Logistics Trucking"></img>

// class About extends Component {
//     open = false;

    //
    // render() {

function About() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
    //const { open } = this.open;
    //const setOpen = open => this.setOpen(open);
    //const setOpen = open => this.open;
    //console.log('setOpen: open:' + open)
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="display-3">Jones Logistics</h1>
                <p>Jones Logistics Corp is an agency owned by Chad Hubble operating under Priority 1 Inc.</p>
              </div>
              <div className="col-xs">
                <img src={InlineImage} alt="Jones Logistics Trucking"></img>
              </div>
            </div>
          </div>
        </div>




        <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Experience</h2>
                <p>Our team has over 50 years of combined experience in working freight throughout the United States.</p>
                <p>Top 25 Priority 1 Inc Agency 4 years running. Preferred provider for several Colorado Breweries.</p>
                <Button className="btn btn-primary"
                  aria-expanded={open} aria-controls="text1-panel"
                  onClick={() => setOpen(!open)}>
                  View details &raquo;
                </Button>
              </div>
              <div className="col-md-4">
                <h2>Special Projects</h2>
                <p>Moving of Flying Dog Brewery from Colorado to Maryland, high rise construction project delivery throughout the United States, heavy haul equipment moves to Fairbanks, Alaska. </p>
                <Button className="btn btn-primary"
                  aria-expanded={open2} aria-controls="text1-panel"
                  onClick={() => setOpen2(!open2)}>
                  View details &raquo;
                </Button>

              </div>
              <div className="col-md-4">
                <h2>Service</h2>
                <p>Our combination of being with a well leveraged company and high level technology built by Priority 1 Inc making it easy to do business.</p>
                  <Button className="btn btn-primary"
                    aria-expanded={open3} aria-controls="text1-panel"
                    onClick={() => setOpen3(!open3)}>
                    View details &raquo;
                  </Button>
              </div>
            </div>
            <Collapse in={open}>
            <div id="text1-panel">

                      <div className="card card-body border border-primary rounted">
                      Our team over 50 years of combined experience in working freight
                      throughout the United States. We are a preferred vendor for New Belgium
                      Brewery and Lefthand Brewing. We consistently handle shipments of
                      steel into Alaska and often are called upon for our expedited skills.
                      If you have freight, less than truckload, flatbed, van, refrigerated or
                      expedited then we have a quality solution to get your goods moved timely
                      and cost effective. If you are a decision maker looking to improve your
                      current position then please let's have a serious discussion.
                      </div>
            </div>
          </Collapse>

          <Collapse in={open2}>
          <div id="text1-panel">

                    <div className="card card-body border border-primary rounted">Project freight experience - Chad oversaw, priced and handled the entire Flying Dog Brewery move from Colorado to Maryland.  We worked with Flying Dog management to price up several potential site locations strategically looking at sales numbers and what made sense from a logistics perspective.  We contracted crane services for the pickup and delivery and arranged 11 flatbed shipments that included 3 oversized shipments requiring travel escorts and permitting.   All went well and the brewery was back up and running two weeks later in the process.  Our experience in handling such specialized freight created a savings in down time and was cost effective in coordination with the costly crane services that we were able to minimize through our preparedness.
                    </div>
          </div>
        </Collapse>


            <Collapse in={open3}>
              <div id="text1-panel">
                  <div className="row border border-primary rounted">Warehouse partner services  - When RES - Renewable Energy Systems was installing a project in southern California, everything was going well until the government services created a delay with permitting of the final install.  The 40 ocean containers were already set to land in Long Beach and the demurrage cost was going to be in the thousands of dollars, RES came to Chad asking for a solution.  We established a partnership for drayage and warehouse storage of the freight and do a full inventory receiving of the 400+ solar panels for future delivery later in the summer.  Our solution again saved the client money and established a streamline of the deliveries when the facility was ready to proceed.
                  </div>
                </div>
            </Collapse>



          </div>


    </div>
    );
  //}

}

//<MyCarousel />

// <h2>About Us</h2>
// <div className="row border border-primary rounded">
//   <p>Jones Logistics Corp is an agency owned by Chad Hubble operating under Priority 1 Inc</p>
//   <p>Chad has over 26 years of experience handling truckload, LTL, air freight and small parcel</p>
//   <p>Special Projects include moving of Flying Dog Brewery from Colorado to Maryland, high rise construction project delivery throughout the United States, heavy haul equipment moves to Fairbanks, Alaska</p>
//   <p>Our combination of being with a well leveraged company and high level technology built by Priority 1 Inc making it easy to do business</p>
// </div>


export default About;
