import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import items from './items';
import filter from './filter';

const rootReducer = combineReducers({
  user,
  flash,
  items,
  filter,
});

export default rootReducer;
