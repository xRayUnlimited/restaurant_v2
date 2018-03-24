import React, { Component } from 'react';
import home from './home.jpg';

import { Header, Footer, Image } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
      <Header as='h1' textAlign='center' white >B&D BURGER</Header>
      <Image src="https://images.pexels.com/photos/254884/pexels-photo-254884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />

      </div>
    );
    <footer as='h4' textAlign= 'center'>by the RAYBUL team</footer>
  }
}



export default Home;
