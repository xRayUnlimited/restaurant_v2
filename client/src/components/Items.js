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
      <Container key={item.id}>
      <Comment.Group size='large'>
        <Comment>
          <Comment.Avatar as="a" src={item.img} />
          <Comment.Content>
            <Comment.Author as="a">{item.description}</Comment.Author>
            <Comment.Metadata>
              <div>{item.price}</div>
            </Comment.Metadata>
            <Divider />
            <Comment.Text>
            <div>{item.name}</div>
            </Comment.Text>
            <Comment.Actions>
              <Link to={`/items/${item.id}`}>
                View Item
              </Link>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      </Container>
    )
  }

  render() {
    const { showItemForm } = this.state;
    return (
      <Container>
        <Header>Menu Items</Header>
        <Button onClick={this.toggleItemForm}>
          { showItemForm ? 'Close Form' : 'Create New Item' }
        </Button>
        { showItemForm ? 
          <ItemForm closeFrom={this.toggleItemForm} />
          :
          <div>
          <Divider />
            <Card.Group itemsPerRow={1}>
              { this.items() }
            </Card.Group>
          </div>
        }        
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}


export default connect(mapStateToProps)(Items);