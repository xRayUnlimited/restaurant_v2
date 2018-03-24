import React, { Component } from 'react';
import { Header, Grid, Card, Container, Icon, Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import { setHeaders } from '../actions/headers';


class Menu extends Component {
  state = {
    name: this.state.items.name,
    price: this.state.items.price,
    description: this.state.items.description,
    img: this.state.items.img,
    id: this.state.items.id,
    }

    // create getItems 

    componentDidMount() {
      this.props.dispatch(getItems())
    }

  // removeItem = (id) => {
  //   const { dispatch, history } = this.props
  //   dispatch(deleteItem(id))
  //   history.push('/menu')
  // }
  // <Button color="red" onClick={() => this.removeItem(item.id)}> Delete </Button>


  displayItem = () =>
  {
    const { items } = this.props
    return items.map( item =>
      
      <Card key={items.id}>
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
        <Button> Edit </Button>
      </Card>
    )
  }

  render() {
    const { 
      name,
      price,
      description,
      img,
      id,
     } = this.state;

    return (
      <Container>
        <Header as='h1' textAlign='center'>This is the Menu Stupid</Header>
        <Grid columns={16} divided>
        <Grid.Row>
          <Grid.Column>
            { this.displayItem() }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}



export default connect(mapStateToProps)(Menu);