import React, {Component} from 'react';
import {connect} from 'react-redux';

//component stle
import './styles/LandingCard_style.css';

//we need create store and redux-thunk import
import SearchBar from './SearchBar';
import ItemCard from './ItemCard';

//search action to populate results: actions are named exports so we must destructure: wherever we want to use an action, we import it
//and then can dispatch the actions as a plaion ob ject in connect, and we can also get access to state using mapStateToProps
import {populateItemStore} from '../actions/index';

//no state here: we handle the search results and all in here, and only keep state on the shopping
//cart and what to do to it
class Landing extends Component {
  //get the input setting the state
  getSearch = valueInputFromSearch => {
    if (valueInputFromSearch === '') {
      return alert ('Please enter a value');
    }
    //send the data to the action creator for populating the current search store [one of the many items in state we figured for this app]
    this.props.populateItemStore (valueInputFromSearch);
  };

  render () {
    return (
      <React.Fragment>
        {/**sending our callback to the search to return the entered controlled data there up here to send a request to ebay api 
        remember in core js we can call functions from objects by getting the object and putting () after it.. this is how
        we invoke this callback in the child and pass it data back and seen above in the fucntion
        how it works.. we just pass the signature as the prop here though. It is a callback , so, we do not call it here. it gets called back later*/}
        <SearchBar getSearch={this.getSearch} />
        <div className="contain">
          {this.props.search.map ((item, index) => {
            return <ItemCard key={index} item={item} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

/**
 * We now need to use connect() to map the state of our app to the component. We will be able to pull out the search results
 * and use it here to display
 * pull out the data (the reducer that holds the state for the items searched)
 */
const mapStateToProps = state => {
  return {search: state.data};
};

//connect(mapstat,mapdispatch[built,plainobject, or passed as destructured object seen below])
export default connect (mapStateToProps, {populateItemStore}) (Landing);

//connect always takes these two params! [map and then the action to send to reducers (see diagram of this from course: connect is the middle man that allows every component to connect to global store!)]
