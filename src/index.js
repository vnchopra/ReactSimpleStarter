import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = '';

//App is a class component now
//Here 'videos' in VideoList is a prop and gets pass to VideoList as 'videos'
//In a class based component, you can call props anywhere With
//this.props
class App extends Component  {
  constructor(props) {
    super(props);

    //list of video object in the array called videos
    this.state =  { videos: [] };

    //Run youtube search of videos
    YTSearch ( {key: API_KEY, term: 'surfboards'}, video_data_set => {
      //console.log(video_data_set);
      this.setState( {videos: video_data_set} );
    } );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}
//Place that into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
