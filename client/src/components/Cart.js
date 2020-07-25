import React, {Component} from 'react';

import {connect} from 'react-redux';

import CartItemCard from './CartItemCard'; //to render cards from our current cart

//styles
import './styles/cartItems.css';

import {currentCartTotal} from '../reducers/updateCart';

class Cart extends Component {
  render () {
    return (
      <div className="cartItemsDiv">
        <h3>Current Cart</h3>
        <p>total: ${currentCartTotal.toFixed (2)}</p>
        {/*get total function inserted here*/}
        <div className="card-container">
          {this.props.cartItems.map ((item, index) => {
            return <CartItemCard key={index} items={item} />;
          })}
        </div>
      </div>
    );
  }
}

//getting the currentCart state from our combined reducer
const mapStateToProps = state => {
  return {
    cartItems: state.currentCart,
  };
};

export default connect (mapStateToProps, null) (Cart);
