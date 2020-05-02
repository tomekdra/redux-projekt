import types from "./types";

const INITIAL_STATE = {
    listName: 'Filmy',
    movies: [
        'Bambo', 'Rambo', 'Wiedzmin'
    ]
}

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_MOVIE:
            return {
                ...state, movies: [...state.movies, action.item]
            }
        case types.RESET_MOVIE:
            return {
                ...state, movies: []
            }
        default:
            return state;
    }

};

export default moviesReducer;