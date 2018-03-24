import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Items from './Items';
import ItemView from './ItemView';
import { getItems } from '../actions/items';

class FetchItems extends React.Component {

  componentDidMount() {
    this.props.dispatch(getItems())
  }

  render() {
      return (
        <div>
          <Route exact path="/items" component={Items} />
          <Route exact path="/items/:id" component={ItemView} />
        </div>
      )
  }
}

export default connect()(FetchItems);