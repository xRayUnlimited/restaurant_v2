import React from 'react';
import { Card, Image, Grid, Divider, Button, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Cart extends React.Component {

  render() {
    const cartItems = this.props.items.filter ( i => i.in_cart )
      return ( 
        <div>
          { cartItems.map( item => 
            <p>{item.name}</p>
          ) }
        <Button>Submit Order</Button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(Cart);
