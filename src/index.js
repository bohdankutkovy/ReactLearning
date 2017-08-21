import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YT_API_KEY = 'AIzaSyDQzDmf05kL84zpgyHNkdorhWUycsPl2z8';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({key: YT_API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail
                    video={ this.state.selectedVideo }
                />
                <VideoList
                    videos = { this.state.videos }
                    onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }
                />
            </div>
        );
    }

}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);