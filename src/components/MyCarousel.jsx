import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'reactstrap';
//import { Carousel, CarouselItem, CarouselCaption, CarouselIndicators, CarouselControl } from 'reactstrap';

// TODO copy from here: https://reactstrap.github.io/components/carousel/

class MyCarousel extends Component {

  render() {
    return (
      <div>
      <Carousel>
        <CarouselItem>
        <img
  className="d-block w-100"
  src="holder.js/800x400?text=Second slide&bg=282c34"
  alt="Third slide"
/>
          <CarouselCaption captionHeader="About Jones Logistics"
             captionText="Jones Logistics Corp is an agency owned by Chad Hubble operating under Priority 1 Inc" />
        </CarouselItem>
        <CarouselItem>
        <img
  className="d-block w-100"
  src="holder.js/800x400?text=Second slide&bg=282c34"
  alt="Third slide"
/>
          <CarouselCaption captionHeader="Experience"
            captionText="Chad has over 26 years of experience handling truckload, LTL, air freight and small parcel" />
        </CarouselItem>
      </Carousel>


    </div>
    );
  }

}

export default MyCarousel;
