import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const thumbUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={ () => onVideoSelect(video) } >
            <div>
                <img src={thumbUrl} alt=""/>
            </div>
            <div>
                <span>{video.snippet.title}</span>
            </div>
        </li>
    );

};

export default VideoListItem;