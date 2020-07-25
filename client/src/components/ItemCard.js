import React from 'react';
//needed for mapping state to props and passing action
import {connect} from 'react-redux';

//add to cart action
import {addToCart} from '../actions/index';

//displays a card of the item

import './styles/ItemCard_style.css';

function ItemCard (props) {
  const itemData = {
    title: props.item.title,
    price: props.item.sellingStatus[0].currentPrice[0].__value__,
    img: props.item.galleryURL,
    ebay_link: props.item.viewItemURL,
    _id: props.item.itemId + Math.random (),
    qty: 1,
  };

  let alias = ' image';

  return (
    <div className="card" style={{width: '17rem'}}>
      <img
        src={itemData.img}
        alt={itemData.title + alias}
        className="img-thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">{itemData.title}</h5>
        <a href={itemData.ebay_link} target="_blank" rel="noopener noreferrer">
          No image? See me on ebay
        </a>
        <p>${itemData.price}</p>
        <div className="bottom-btn">
          {/*add an onclick event that will invoke an action that will send the item object to be put into the cart state*/}
          <button
            href="#"
            className="btn btn-primary"
            /*add the item to the cart: using the action creator to do so [action creator uses props as we need connect() to send the action
            ]*/
            onClick={() => props.addToCart (itemData)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

//map the state:
// currentCart is the name of the key we gave to the addtocart reducer in our combine reducer object in the index.js
const mapStateToProps = state => {
  return {cart: state.currentCart};
};

//add to cart now can be invoked using props. second param is our dipatch object: implicitely dispatxhes actions
export default connect (mapStateToProps, {addToCart}) (ItemCard);
