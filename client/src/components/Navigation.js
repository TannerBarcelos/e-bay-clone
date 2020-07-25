import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import '../App.css';
import {
  connect
} from 'react-redux';

//navigation component: builds out the linkage for the routes within the react app (will be mounted at the top level app)
const Navigation = props => {
  return (
    <header style={{ "position": "sticky", "top": "0", "zIndex": "1000" }}>
      <nav>
        <ul className="ul-nav-container">
          <li>
            <NavLink to="/" id="links">fakebay</NavLink>
          </li>
          <li>
            <NavLink to="/cart" id="float-right-links">
              <i className="fas fa-shopping-cart" data-count={props.cart.length} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

//we will render the current cart length in the icon for data-count in the icon
const mapStateToProps = state => {
  return {
    cart: state.currentCart
  };
};

export default connect(mapStateToProps)(Navigation);