import React from 'react';
import { Card, Image, Grid, Divider, Button, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { submitCart } from '../actions/items';

class Cart extends React.Component {

  submit = (order) => {
    const { cartItems } = this.props.items.filter ( i => i.in_cart )
    const { dispatch, history } = this.props
    dispatch(submitCart(order))
    (history.push('/'))
  }

  render() {
    const { dispatch } = this.props;
    const cartItems = this.props.items.filter ( i => i.in_cart )
      return ( 
        <div>
          { cartItems.map( item => 
            <p key={item.id}>{item.name}</p>
          ) }
        <Button onClick={() => this.submit(cartItems)}>Submit Order</Button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(Cart);
