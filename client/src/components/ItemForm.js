import React from 'react';
import { connect } from 'react-redux';
import { addItem, updateItem } from '../actions/items';
import { Form } from 'semantic-ui-react';

class ItemForm extends React.Component {
  initialItemState = {
    name: '',
    description: '',
    price: '',
    img: '',
  }

  state = {...this.initialItemState}

  componentDidMount() { //TODO will or did mount?
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const item = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateItem : addItem
    dispatch(func(item))
    closeForm()
  }

  render() {
    const { name, description, price, img } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="price"
          defaultValue={price}
          onChange={this.handleChange}
          label="Price"
        />
        <Form.Input
          name="img"
          defaultValue={img}
          onChange={this.handleChange}
          label="Image"
        />
        <Form.Button color="green" >Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(ItemForm);