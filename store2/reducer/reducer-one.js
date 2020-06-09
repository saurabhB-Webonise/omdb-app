import { SELECTED_MOVIE } from '../actions/action-one';

const initalState = {
    sele: [],
};

const movieReducer = (state = initalState, action) => {

    switch (action.type) {
        case SELECTED_MOVIE:
            return {
                state,
                sele: action.selected_movie
            };
        default:
            return state;
    }
}

export default movieReducer;
