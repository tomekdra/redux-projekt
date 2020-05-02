import types from "./types";

const INITIAL_STATE = {
    listName: 'Aktorzy',
    actors: [
        'Dzik', 'Maniek', 'Janusz'
    ]
}

const actorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_ACTOR:
            return {
                ...state, actors: [...state.actors, action.item]
            }
        case types.RESET_ACTORS:
            return {
                ...state, actors: []
            }
        default:
            return state;
    }

};

export default actorsReducer;