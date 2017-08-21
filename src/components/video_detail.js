import React, {Component} from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://youtube.com/embed/${videoId}`;

    return (
        <div>
            <div>
                <iframe src={videoUrl} frameborder="0"></iframe>
            </div>
            <div>
                <span>{video.snippet.title}</span>
            </div>
        </div>
    );
};

export default VideoDetail;