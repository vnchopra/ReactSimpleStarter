import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = '';

//Create a new component that puts together HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
//Place that into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
