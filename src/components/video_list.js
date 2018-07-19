import React from 'react';
import VideoListItem from './video_list_item';

//Function component
//has function argument 'props' which gets data from the App class component
const VideoList = (props) => {

  const videoItems = props.videos.map( (each_video) => {
    //here key={each_video.etag} is the unique key for the VideoList
    //where etag comes from youtube's array
    return <VideoListItem key={each_video.etag} video={each_video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}


export default VideoList;
