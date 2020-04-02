
import { SEARCHED_MOVIE_LIST, SELECTED_MOVIE } from '../actions/movies'


const initalState = {
    availableSearchedMovie: [],
    selectedMovie: {
        Title:'',
        Poster:''
    }
};

const movieReducer = (state = initalState, action) => {

    switch (action.type) {
        case SEARCHED_MOVIE_LIST:
            return {
                availableSearchedMovie: action.searched_movie_list
            };
        case SELECTED_MOVIE:
            return {
                selectedMovie: action.selected_movie
            }

        default:
            return state;
    }
}

export default movieReducer;