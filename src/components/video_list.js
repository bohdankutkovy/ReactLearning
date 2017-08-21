import React, {Component} from 'react';
import VideoListItem from './video_list_item'

export default class VideoList extends Component {

    videoItems() {
        return this.props.videos.map(video => {
            return (
                <VideoListItem
                    video={video}
                    key={video.id.videoId}
                    onVideoSelect={this.props.onVideoSelect}
                />
            );
        });
    }

    render() {
        if (!this.props.videos) {
            return(
                <div>Loading...</div>
            );
        }

        return(
            <ul>
                {this.videoItems()}
            </ul>
        );
    }

}
