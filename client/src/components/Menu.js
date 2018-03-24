import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Card, Image, Button, Dropdown, Divider, Comment, Icon,Responsive } from 'semantic-ui-react';
import ItemForm from './ItemForm';
import { getItems, toggleInCart } from '../actions/items';
import axios from 'axios';

class Items extends React.Component {
  state = { cart: [], showItemForm: false }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getItems())
  }

  toggleItemForm = () => {
    this.setState( state => {
      return { showItemForm: !state.showItemForm }
    })
  }

  items = () => {    
    const { items, dispatch } = this.props;

    return items.map( item =>
      <Grid.Column key={item.id}>
        <Card>
        <Image src={item.img} />
        <Card.Content>
          <Card.Header>
            {item.name}
          </Card.Header>
          <Card.Description>
            {item.price}
          </Card.Description>
          <Card.Description>
            {item.description}
          </Card.Description>
        </Card.Content>
        <Button onClick={() => dispatch(toggleInCart(item.id)) }>
          { item.in_cart ? 'Remove From Cart' : 'Add To Cart' }
        </Button>
        </Card>
        <Divider hidden />
      </Grid.Column>
    )
  }

  render() {
    const { showItemForm } = this.state;
    return (
      <Container>
        
        <Responsive as={Card.Group} minwidth={ 767 } itemsPerRow={3}>
            { this.items() }
        </Responsive>
         
        <Responsive as={Card.Group} maxwidth={ 767 } itemsPerRow={1}>
            { this.items() }
        </Responsive>
      
    </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(Items);