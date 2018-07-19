import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = '';

//App is a class component now
//Here 'videos' in VideoList is a prop and gets pass to VideoList as 'videos'
//In a class based component, you can call props anywhere With
//this.props
class App extends Component  {
  constructor(props) {
    super(props);

    //list of video object in the array called videos
    //selectedVideo is set to null initially
    this.state =  {
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    //Run youtube search of videos
    YTSearch ( {key: API_KEY, term: term}, video_data_set => {
      //console.log(video_data_set);
      this.setState( {
          videos: video_data_set,
          selectedVideo: video_data_set[0]
        } );
    } );
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}
//Place that into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
