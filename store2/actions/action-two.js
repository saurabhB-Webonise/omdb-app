
import SearchedMovie from '../../models/searchedmovie';

export const SEARCHED_MOVIE_LIST = 'SEARCHED_MOVIE_LIST';

export const SELECTED_MOVIE = 'SELECTED_MOVIE';



export const fetchMovies = (name) => {
    return async dispatch => {
        const response = await fetch('http://www.omdbapi.com/?apikey=ea9dc777&s=' + name);
        const resData = await response.json();
        const loadMovie = [];
        for (var i = 0; i < resData.Search.length; i++) {
            loadMovie.push(new SearchedMovie(
                i,
                resData.Search[i].Title,
                resData.Search[i].Year,
                resData.Search[i].imdbID,
                resData.Search[i].Type,
                resData.Search[i].Poster
            ));
        }
        dispatch({ type: SELECTED_MOVIE, searched_movie_list: loadMovie });
    };
};



