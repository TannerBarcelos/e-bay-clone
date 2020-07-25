import React from 'react';
import {connect} from 'react-redux';

import {addAnother, subtractAnother, clearItem} from '../actions/index';

import './styles/ItemCard_style.css';

//we pass as props from cart.js the item from the cart store here but then use the redux store to update the data
function CartItemCard (props) {
  return (
    <div className="card" style={{width: '17rem'}}>
      <span>Qty: {props.items.qty}</span>
      <img
        src={props.items.img}
        alt={props.items.title + ' alias'}
        className="img-thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">{props.items.title}</h5>
        <a
          href={props.items.ebay_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          No image? See me on ebay
        </a>
        <p>${props.items.price}</p>
        <div className="bottom-btn">
          <button
            href="#"
            className="btn btn-primary"
            style={{marginLeft: '3px'}}
            onClick={() => props.subtractAnother (props.items)}
          >
            -
          </button>
          <button
            href="#"
            className="btn btn-primary"
            style={{marginLeft: '3px'}}
            /**pass the item  as the data to the action creator */
            onClick={() => props.addAnother (props.items)}
          >
            +
          </button>
          <button
            href="#"
            className="btn btn-primary"
            style={{marginLeft: '3px'}}
            onClick={() => props.clearItem (props.items)}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
}

//maps the current shopping cart completely as props to this component: if props were passed from a parent, it will use those, and then
//update via this function
const mapStateToProps = state => {
  return {
    cart: state.currentCart,
  };
};

//dispatch our actions to props so we can invoke them to make a change to the state (this is why the actions have props. prefixing them)
const mapDispatchToProps = {
  addAnother,
  subtractAnother,
  clearItem,
};

export default connect (mapStateToProps, mapDispatchToProps) (CartItemCard);
