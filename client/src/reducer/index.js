const initialState = {
    videogames: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_VIDEOGAMES': 
        return{
            ...state,
            videogames: action.payload,
            gamescopy: action.payload,
        };
        case 'SEARCH_BY_NAME':
        return {
            ...state,
            gamescopy: action.payload,
        };
        case 'SEARCH_BY_ID':
        return {
            ...state,
            detail: action.payload,
        };
        


        default:
        return state;
    }
};

export default rootReducer;