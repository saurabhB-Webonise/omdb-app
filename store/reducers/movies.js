import { SEARCHED_MOVIE_LIST, SELECTED_MOVIE, NEAR_BY_MOVIEW_THEATER } from '../actions/movies'


const initalState = {
    availableSearchedMovie: [],
    selectedMovie: {
        Title: '',
        Poster: ''
    },
    nearByMoviewTheaters: []
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

        case NEAR_BY_MOVIEW_THEATER:
            return {
                nearByMoviewTheaters: action.near_by_movie_theater
            }

        default:
            return state;
    }
}

export default movieReducer;