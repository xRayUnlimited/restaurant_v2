import axios from 'axios';
import { setHeaders } from './headers';

export const GET_ITEMS = 'GET_ITEMS'
export const ITEMS = 'ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const toggleInCart = (id) => {
  return (dispatch) => {
    axios.put(`/api/items/${id}/in_cart`)
      .then( () => dispatch({ type: 'TOGGLE_IN_CART', id }))
  }
}

export const submitCart = (cartItems) => {
  return (dispatch) => {
    axios.post(`/api/items/submit_cart`, {items: cartItems})
  }
}

export const getItems = () => {
  return (dispatch) => {
    axios.get('/api/items')
      .then( res => dispatch({ type: GET_ITEMS, items: res.data, headers: res.headers  }) )
    }
}

export const addItem = (item) => {
  return (dispatch) => {
    axios.post('/api/items', { item } )
      .then( res => dispatch({ type: ADD_ITEM, item: res.data, headers: res.headers  }) )
  }
}

export const updateItem = (item) => {
  return (dispatch) => {
    axios.put(`/api/items/${item.id}`, { item } )
      .then( res => dispatch({ type: UPDATE_ITEM, item: res.data, headers: res.headers  }) )
  }
}

export const deleteItem = (id) => {
  return (dispatch) => {
    axios.delete(`/api/items/${id}`)
      .then( res => dispatch({ type: DELETE_ITEM, id, headers: res.headers  }) )
  }
} 