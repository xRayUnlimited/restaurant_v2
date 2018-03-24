import
{
  GET_ITEMS,
  ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} from '../actions/items'

const items = (state = [], action ) => {
  switch(action.type) {
    case GET_ITEMS:
      return action.items
    case ITEMS:
      return action.items
    case ADD_ITEM:
      return [action.item, ...state]
    case UPDATE_ITEM:
      return state.map( i => {
        if (i.id === action.item.id)
          return action.item
        return i
      })
    case DELETE_ITEM:
      return state.filter( i => i.id !== action.id)
    case 'TOGGLE_IN_CART':
      return state.map( item => {
        if (item.id === action.id)
          return {...item, in_cart: !item.in_cart}
        return item
      })
    default:
      return state;
  }
}

export default items;