import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="border border-info rounded">
          <h2>Let’s discuss your transportation needs today!</h2>
          <p>Please call or email Chad direct:</p>
  <p><a href="mailto:chubble@priority1inc.net" target="_blank" class="btn btn-primary">chubble@priority1inc.net</a></p>
  <p><a href="mailto:chad.hubble@gmail.com" target="_blank" class="btn btn-secondary">chad.hubble@gmail.com</a></p>
  <p><a href="tel:3036679595" class="phone">303-667-9595 direct</a></p>
          </p>
        </div>
      </div>
    );
  }

}

export default Contact;
