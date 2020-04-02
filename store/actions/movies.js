
import SearchedMovie from '../../models/searchedmovie';

export const SEARCHED_MOVIE_LIST = 'SEARCHED_MOVIE_LIST';
export const SELECTED_MOVIE = 'SELECTED_MOVIE';


export const selectedMovies = () => {

    return async dispatch => {
        // any async code you want!
        console.log("selectedMovie function called")
        const response = await fetch('http://www.omdbapi.com/?apikey=ea9dc777&t=Scooby-Doo! and WWE: Curse of the Speed Demonhttp://www.omdbapi.com/?apikey=ea9dc777&s=Speed&page=3');
        const resData = await response.json();


        console.log(resData)

        var data = {
            Title: resData.Title,
            Poster:resData.Poster
        }

        console.log(data)


        dispatch({ type: SELECTED_MOVIE, selected_movie: data });

    };

};


export const fetchMovies = (name) => {
    return async dispatch => {
        // any async code you want!
        console.log("fetchMovies function called")
        const response = await fetch('http://www.omdbapi.com/?apikey=ea9dc777&s='+name);
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

        dispatch({ type: SEARCHED_MOVIE_LIST, searched_movie_list: loadMovie });

    };
};
