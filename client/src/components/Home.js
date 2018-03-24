import React, { Component } from 'react';
import { Header, Footer, Image } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
      <Header as='h1' textAlign='center'>B&D BURGER</Header>

      <Image src="/Users/bradleyfindeis/Desktop/DPL/hackathon2/restaurant_v2/client/public/pexels-photo-750073.jpg" />
      </div>
    );
    <footer as='h4' textAlign= 'center'>by the RAYBUL team</footer>
  }
}



export default Home;
