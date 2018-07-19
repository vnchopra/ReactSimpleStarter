//Here { Component } is equivalent to React.Component
import React, { Component } from 'react';

//This is a class component
//extends gives you functionality from the react.component
class SearchBar extends Component {
  //a function/method that renders the JSX
  render() {
    //added event handler to this input element
    //where onChange is a react defined property found in react docs.
    return <input onChange={this.onInputChange} />;

    //equivalent to
    // return <input onChange={event => console.log(event.target.value)};

  }

  //event handler with argument
  //event obj
  onInputChange(event) {
    console.log(event.target.value);
  }

}

export default SearchBar;
