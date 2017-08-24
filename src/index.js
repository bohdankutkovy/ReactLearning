import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import SearchBar from './components/search_bar';
import VideoList from './containers/video_list';
import VideoDetail from './containers/video_detail';
import YTSearch from 'youtube-api-search';
const YT_API_KEY = 'AIzaSyDQzDmf05kL84zpgyHNkdorhWUycsPl2z8';



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                         window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component {
    constructor(props) {
        super(props);
        
        this.search('');
    }
    
    search(term){
        YTSearch({key: YT_API_KEY, term: term}, (videos) => {
            store.dispatch({
                type: 'SET_SEARCHED_VALUES',
                payload: videos
            });
            store.dispatch({
                type: 'SET_SELECTED_VIDEO',
                payload: videos[0]
            });
        });
    }

    render() {
        const search = _.debounce((term) => { this.search(term) }, 400);
        return(
            <div>
                <SearchBar onTermChangeSearch={search}/>
                <VideoDetail/>
                <VideoList/>
            </div>
        ); 
    }

}

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.querySelector('.container')
);