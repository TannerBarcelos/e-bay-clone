import {
  combineReducers
} from 'redux';

//reducers
import getSearchQuery from './getSearchQuery';
import updateCart from './updateCart';

export default combineReducers({
  data: getSearchQuery,
  currentCart: updateCart,
});