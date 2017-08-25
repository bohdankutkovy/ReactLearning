import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import SearchBar from './components/search_bar';
import VideoList from './containers/video_list';
import VideoDetail from './containers/video_detail';
import { asyncGetVideos } from "./actions/videos";

import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


class App extends Component {
    constructor(props) {
        super(props);

        this.search('');
    }

    search(term) {
        store.dispatch(asyncGetVideos(term));
    }

    render() {
        const search = _.debounce((term) => {
            this.search(term)
        }, 400);
        return (
            <div>
                <SearchBar onTermChangeSearch={search}/>
                <VideoDetail/>
                <VideoList/>
            </div>
        );
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('.container')
);