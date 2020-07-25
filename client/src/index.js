import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import thunk from 'redux-thunk'; //needed since we are using async request for our axios request to our backend to get ebay data

//react/redux stuff
import {
  Provider
} from 'react-redux'; //needed to PROVIDE redux store to every compomnent
import {
  createStore,
  applyMiddleware
} from 'redux'; //used to create our global state (store) which takes in all our reducers (which is our state/affecting state!)

//importing all our COMBINED reducers so we can create our store
import reducers from './reducers';

//common practice: create store above the render, and pass it as a prop to our provider [we need to pass apply middleware with thunk ALWAYS if our app has an action creator thats async]
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  //pass the redux store as a prop to the provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);