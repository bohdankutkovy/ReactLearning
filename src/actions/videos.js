import YTSearch from 'youtube-api-search';

const YT_API_KEY = 'AIzaSyDQzDmf05kL84zpgyHNkdorhWUycsPl2z8';

export const asyncGetVideos = (term) => dispatch => {
    YTSearch({key: YT_API_KEY, term: term}, (videos) => {
        dispatch({
            type: 'SET_SEARCHED_VALUES',
            payload: videos
        });
        dispatch({
            type: 'SET_SELECTED_VIDEO',
            payload: videos[0]
        });
    });
};

