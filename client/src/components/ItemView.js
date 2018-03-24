import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Divider, Header, Container, Table, Button, Image } from 'semantic-ui-react';
import ItemForm from './ItemForm';
import { updateItem, deleteItem } from '../actions/items';


class ItemView extends React.Component {
  state = { showItemForm: false }

  toggleItemForm = () => {
    this.setState( state => {
      return { showItemForm: !state.showItemForm }
    })
  }

  removeItem = (item) => {
    const { item: {id}, dispatch, history } = this.props
    dispatch(deleteItem(id))
    history.push('/items')
  }

  render() {
    const { showItemForm } = this.state;
    const { item = [] } = this.props;
    return (
      <Container>
        <div id="spacers">
          <Link id="back_btn" to="/items">View All Items</Link>
          <Button color="blue" onClick={this.toggleItemForm}>
            { showItemForm ? 'Cancel' : 'Edit' }
          </Button>
          <Button color="red" onClick={this.removeItem}>
            Delete
          </Button>
        </div>
        { showItemForm ?
          <ItemForm {...item} closeForm={this.toggleItemForm} />
          :
          <div>
            <Header as="h3" textAlign="center">{item.name}</Header>
            <Image src={item.img} />
            <Table definition>
            <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Description</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Price</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { item: state.items.find( i => i.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(ItemView);