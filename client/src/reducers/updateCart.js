/**
 * Remember: the initial state for a reducer is supposed to be defaulted (depending on the type, you use the appropriate default)
 * @param {currentCart} currentCart 
 * @param {action} action -> item id
 */

export let currentCartTotal = 0; //holds the current cart total

const updateCart = (currentCart = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      //add this price to the cart
      currentCartTotal += Number (action.payload.price); //cast to number to get appropiate addition and not concatentation
      return [...currentCart, action.payload];

    case 'ADD_ANOTHER':
      const AddQTY = currentCart.find (val => val._id === action.payload._id); //find() returns first occurence of some predicate that is found
      AddQTY.qty += 1;
      //add thi sprice to the cart
      currentCartTotal += Number (action.payload.price);
      return [...currentCart];

    case 'SUBTRACT_ANOTHER':
      //same logic as add! only thing we do is subtract the qty
      const SubQTY = currentCart.find (val => val._id === action.payload._id);

      //if the qty is at 1 and the user is trying to remove it, we do not want to show 0 qty of an item in a cart so we can remove it
      //by using filter and assign
      if (SubQTY.qty === 1) {
        //the item is cleared, but the price wont be! so need to subtract that price as well as subtracting in the else in the case we decremented qty and we did not end up at 0 products
        currentCartTotal -= Number (action.payload.price);
        return Object.assign (
          [],
          currentCart.filter (val => val._id !== action.payload._id)
        );
      } else {
        currentCartTotal -= Number (action.payload.price);
        SubQTY.qty -= 1;
      }
      return [...currentCart];

    case 'CLEAR_ITEM':
      //find the item to delete: use the items id as the search query
      const itemToClear = currentCart.find (
        val => val._id === action.payload._id
      );
      //if we clear with +1 items, the subtraction will be off, so, subtract qty amunt of dollars * the price to get the cart correct
      currentCartTotal -= action.payload.price * action.payload.qty;
      return Object.assign (
        [],
        currentCart.filter (item => item._id !== itemToClear._id)
      );

    default:
      return currentCart;
  }
};

export default updateCart;

/**
 * We usually put reducers unrelated (but affect overall certain states) in separate reducer! Hwoever, since +,-,add and clear all deal with the 
 * shopping carts state, it is required to use a switch and do all 4 operations here
 */

/**
  * Here is a clean way of reassigning new state without 'mutating' the old state: uses object.assing() which allows us to make a new object and assign 
  * it data from a function to return data to it:  obnject.assign is used a lot !!! study it
  * 
  * 
  *   const products = (state, action) => {
  switch(action.type){
    case 'PURCHASE':
      const ids = action.cart.map(item => item.id);
      return Object.assign([], state.map(item => {
        if(ids.includes(item.id)){
          item.inventory -= action.cart.filter(p => p.id === item.id)[0].quantity;
        }
        return item;
      }));
    case default:
      return state;
    }
  };
  * 
  */
