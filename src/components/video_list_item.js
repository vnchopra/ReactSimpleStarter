import React from 'react';

const VideoListItem = (props) => {
  //if you replace props with {video}
  //its equivalent to the line
  const video = props.video;
  //that is ES6 syntax

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className = "media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>

      </div>
    </li>
 );



};

export default VideoListItem;
