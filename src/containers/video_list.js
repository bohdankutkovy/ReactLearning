import React, {Component} from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../components/video_list_item'

class VideoList extends Component {

    videoItems() {
        return this.props.videos.map(video => {
            return (
                <li onClick={() => this.props.selectVideo(video)} >
                    <VideoListItem
                        video={video}
                        key={video.id.videoId}

                    />
                </li>
                
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

export default connect(
    state => ({
        videos: state.videos
    }),
    dispatch => ({
        selectVideo: (selectedVideo) => {
            dispatch({type: 'SET_SELECTED_VIDEO', payload: selectedVideo});
        }
    })
)(VideoList);
