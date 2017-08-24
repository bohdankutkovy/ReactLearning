import React, {Component} from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {

    render() {
        if (!this.props.video) {
            return <div>Loading...</div>;
        }
        
        const videoId = this.props.video.id.videoId;
        const videoUrl = `https://youtube.com/embed/${videoId}`;
        
        return (
            <div>
                <div>
                    <iframe src={videoUrl} frameborder="0"></iframe>
                </div>
                <div>
                    <span>{this.props.video.snippet.title}</span>
                </div>
            </div>
        );
    }
    
};

export default connect(
    state => ({
        video: state.selectedVideo
    }),
    dispatch => ({})
)(VideoDetail);