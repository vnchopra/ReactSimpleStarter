//Here { Component } is equivalent to React.Component
import React, { Component } from 'react';

//This is a class component
//extends gives you functionality from the react.component
class SearchBar extends Component {

  constructor (props) {
    super (props);
    //For State with React
    //State is a plain js object that exists on any component that is a class based component.
    //State is a plain js object to record and react to user events.
    //With an even occuring/state change,
    //it forces to re-render
    //forces children to re-render
    // = is used only here in the constructor, every where else we use .setState
    this.state = { term: 'Search'};
  }

  //a function/method that renders the JSX
  render() {
    //added event handler to this input element
    //where onChange is a react defined property found in react docs.
    // return <input onChange={this.onInputChange} />;

    //equivalent to
    // return <input onChange={event => console.log(event.target.value)} />;

    //Javascript is referenced inside of jsx with the {} braces
    //adding the state term value here to 'value' makes it a controlled field
    //onSearchTermChange
    return (
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange={ event => this.onInputChange(event.target.value) }
        />
      </div>
    );

  }

  //event handler with argument
  //event obj
  onInputChange(term) {
    // console.log(event.target.value);
    // this.setState( {term: event.target.value} );
    //set the state to term and is needed to "control the field"
    this.setState({term});
    //use props to set the new term from the declared function in App
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
