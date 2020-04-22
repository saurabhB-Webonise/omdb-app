import { SEARCHED_MOVIE_LIST, SELECTED_MOVIE, NEAR_BY_MOVIEW_THEATER, TEST } from '../actions/movies';


const initalState = {
    sel: [],
    availableSearchedMovie: [],
    nearByMoviewTheaters: [],
    test: []
};

const movieReducer = (state = initalState, action) => {

    switch (action.type) {
        case SEARCHED_MOVIE_LIST:
            return {
                ...state,
                availableSearchedMovie: action.searched_movie_list
            };
        case SELECTED_MOVIE:
            return {
                ...state,
                sele: action.selected_movie
            };

        case NEAR_BY_MOVIEW_THEATER:
            return {
                ...state,
                nearByMoviewTheaters: action.near_by_movie_theater
            }

        case TEST:
            return {
                test: []
            }

        default:
            return state;
    }
}

export default movieReducer;