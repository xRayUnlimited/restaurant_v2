import React, { Component } from 'react';
import home from './home.jpg';

import { Header, Footer, Image } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
      <Header as='h1' textAlign='center'>B&D BURGER</Header>
      <Image src="./home.jpg" />

      </div>
    );
    <footer as='h4' textAlign= 'center'>by the RAYBUL team</footer>
  }
}



export default Home;
