/**
 * 
 * actions page: create action creators that take in some type of value to invoke action and then
 * we return the action type and the payload
 * 
 * the actions are imported to components we want to use them in, and then connect()
 * sends the passed action to the provider which has access to the state: we combine all our reducers in 
 * an index file, but separate the code in separate files for design. 
 * 
 * 
 */

import axios from 'axios';

//this will be asyncronous so we need redux thunk (passed into the create store in root index)!
// : this performs the request to the express endpoint to produce the ebay api searhc result
export const populateItemStore = data => async dispatch => {
  const results = await axios.post ('/search', {
    search_: data,
  });

  //dispatch sends an action to the reducers. This is explicit in syncronous action creators but needs to be explicit
  // with async
  dispatch ({
    type: 'POPULATE_STORE',
    payload: results.data.body.findItemsByKeywordsResponse[0].searchResult[0]
      .item,
  });
};

//add to cart action creator
export const addToCart = data => {
  return {
    type: 'ADD_TO_CART',
    payload: data,
  };
};

//to add the same item again in cart: update qty
export const addAnother = data => {
  return {
    type: 'ADD_ANOTHER',
    payload: data,
  };
};

//to remove 1 off the qty of a multiply qty value
export const subtractAnother = data => {
  return {
    type: 'SUBTRACT_ANOTHER',
    payload: data,
  };
};

//clears only selected item
export const clearItem = data => {
  return {
    type: 'CLEAR_ITEM',
    payload: data,
  };
};
