import { combineReducers } from 'redux';

import videos from './reducer_video_search';
import selectedVideo from './reducer_video_select';

export default combineReducers({
    videos,
    selectedVideo
});


//function reducer(state = setInitialState(), action){
//    if (action.type === 'SET_SEARCHED_VALUES') {
//        return(
//            {
//                videos: action.payload.videos,
//                selectedVideo: action.payload.selectedVideo
//            }
//        );
//    } 
//    else if(action.type === 'SET_SELECTED_VIDEO') {
//        return Object.assign({}, state, {selectedVideo: action.payload.selectedVideo});
//    }
//    return state;
//    
//}
//
//function setInitialState(){
//    return {videos: [], selectedVideo: null}
//}
//
//export default reducer;