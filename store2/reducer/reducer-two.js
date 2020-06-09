import { SEARCHED_MOVIE_LIST } from '../actions/action-two';
import { SELECTED_MOVIE } from '../actions/action-one';


const initalState = {
    availableSearchedMovie: [],
};

const movieReducer = (state = initalState, action) => {

    switch (action.type) {
        case SELECTED_MOVIE:
            return {
                state,
                availableSearchedMovie: action.searched_movie_list
            };
        default:
            return state;
    }
}

export default movieReducer;
