import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'; //for our nav
import '../App.css';

//pages (components) [landing, cart, checkout] and raising up the state from a searchbar local state {thats in the landing component}
import Landing from './Landing';
import Cart from './Cart';
import Navigation from './Navigation';

function App() {
  return ( <
    div className = "App" > {
      /*SETUP APP ROUTES*/ } <
    BrowserRouter > {
      /**good practice is to mount the navbar right below browser router, and it will be sent to all components:
              will save time in importing and mounting everywhere */
    } <
    Navigation / >
    <
    Switch >
    <
    Route path = "/"
    component = {
      Landing
    }
    exact / >
    <
    Route path = "/cart"
    component = {
      Cart
    }
    exact / >
    <
    /Switch> <
    /BrowserRouter> <
    /div>
  );
}

export default App;