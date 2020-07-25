//this project is pre-hooks so using class components when necessary or for when we need a lifecycle method

import React, {
  Component
} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //will keep the input form controlled with stat
    this.state = {
      search: '',
    };

    //bind the event listeners that call the actions: bind will allow us to call functions on objects in another scope as we have learned: we need to
    //set state and handle changes to the state of things in this component, so, we should always bind out event handling methods to 'this'
    // this.handleChange = this.handleChange.bind (this);
    // this.handleSubmit = this.handleSubmit.bind (this);
  }

  //controls the input: do not prevent default here
  handleChange = e => {
    this.setState({
      //we index the object [] instead of writing this.state...
      //e.target.name will be the target of the element we aliased with a name attribute
      //so this is a cleaner way of handling events. both in plain JS and in react design
      [e.target.name]: e.target.value,
    });
  };

  //prevent enter from submitting: make them press submit (which will fire an action in landign)
  handleSubmit = e => {
    e.preventDefault();
    //invoking the callback from landing to get the searchbar input and pass it back [common practice for searchbar components and components that
    // rely on data from other components but exist further down hierarchy]
    this.props.getSearch(this.state.search);
  };

  render() {
    return ( <
      div className = "main" >
      <
      form className = "example"
      onSubmit = {
        this.handleSubmit
      } >
      <
      div id = "inp"
      className = "input-group mb-3"
      style = {
        {
          width: '70vw',
          margin: 'auto'
        }
      } >
      <
      input type = "text"
      className = "form-control"
      placeholder = "Search"
      aria - label = "Recipient's username"
      aria - describedby = "button-addon2"
      id = "searchQuery"
      name = "search"
      value = {
        this.state.currentChar
      }
      onChange = {
        this.handleChange
      }
      /> <
      div className = "input-group-append" >
      <
      button className = "btn btn-outline-secondary"
      type = "button"
      id = "button-addon2"
      onClick = {
        this.handleSubmit
      } >
      Search <
      /button> <
      /div> <
      /div> <
      /form> <
      /div>
    );
  }
}

export default SearchBar;