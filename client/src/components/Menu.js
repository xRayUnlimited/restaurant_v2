import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Card, Image, Button, Dropdown, Divider, Comment, Icon } from 'semantic-ui-react';
import ItemForm from './ItemForm';
import { getItems } from '../actions/items';

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
    const { items } = this.props;

    return items.map( item =>
      <Grid.Column>
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
        <Divider hidden />
      </Grid.Column>
    )
  }

  render() {
    const { showItemForm } = this.state;
    return (
      <Container>
        <Grid>
        <Grid.Row columns={3} divided >
            { this.items() }
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(Items);