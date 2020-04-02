import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InlineImage from '../images/TruckMountain_small.jpg';

class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <h2>Contact Us</h2>
        <Row>
          <Col>
        <div className="border border-info rounded">
          <b>Let’s discuss your transportation needs today!</b>
          <p>Please call or email Chad direct:</p>
  <p><a href="mailto:chubble@priority1inc.net" target="_blank" rel="noopener noreferrer" class="btn btn-primary">chubble@priority1inc.net</a></p>
  <p><a href="mailto:chad.hubble@gmail.com" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">chad.hubble@gmail.com</a></p>
  <p><a href="tel:3036679595" class="phone">303-667-9595 direct</a></p>
        </div>
         </Col>
        <Col><img src={InlineImage} alt="Trucking Logistics"></img></Col>
        </Row>
      </Container>
    );
  }

}

export default Contact;
