import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const thumbUrl = video.snippet.thumbnails.default.url;

    return(
        <div>
            <div>
                <img src={thumbUrl} alt=""/>
            </div>
            <div>
                <span>{video.snippet.title}</span>
            </div>
        </div>
    );

};

export default VideoListItem;