import React from 'react';
import { Card, Image, Grid, Divider, Button, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Cart extends React.Component {

  render() {
    return (
      <div>
        <Container>
          <Header align="center" as="h1"> Your Order </Header>
          <Button centered> Submit Order </Button>
        </Container>
      </div>
    )
  }
}


export default Cart;