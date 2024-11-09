import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div className="carousel slide" data-ride="carousel" id="myCarousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide"></img>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>About Jones Logistics</h1>
                <p>Jones Logistics Corp is an agency owned by Chad Hubble operating under Priority 1 Inc</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide"></img>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Experience</h1>
                  <p>Chad has over 26 years of experience handling truckload, LTL, air freight and small parcel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row border border-primary rounded">
          <p>Special Projects include moving of Flying Dog Brewery from Colorado to Maryland, high rise construction project delivery throughout the United States, heavy haul equipment moves to Fairbanks, Alaska</p>
          <p>Our combination of being with a well leveraged company and high level technology built by Priority 1 Inc making it easy to do business</p>
        </div>


        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

    </div>
    );
  }

}

export default Carousel;
