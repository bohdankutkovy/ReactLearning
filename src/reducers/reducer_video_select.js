function assignSelectedVideo(state=initialState, action) {
    if(action.type === 'SET_SELECTED_VIDEO') {
        return action.payload
    }
    return state;
}

const initialState = null;

export default assignSelectedVideo;