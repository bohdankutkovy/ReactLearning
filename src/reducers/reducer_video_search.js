function assignVideos (state=initialState, action){
    if (action.type === 'SET_SEARCHED_VALUES') {
        return action.payload;
    }
    return state;
}

const initialState = [];


export default assignVideos;