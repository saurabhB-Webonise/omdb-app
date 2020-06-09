import Movie2 from '../../models/movie2';

export const SELECTED_MOVIE = 'SELECTED_MOVIE';


export const fetchSelectedMovies = () => {
    return async dispatch => {
        const response = await fetch('http://www.omdbapi.com/?apikey=ea9dc777&t=Scooby-Doo! and WWE: Curse of the Speed Demon');
        const resData = await response.json();
        console.log(resData)
        console.log("--------------------------")
        const loadData = [];
        loadData.push(new Movie2(1, resData.Title, resData.Poster));
        console.log(loadData)
        dispatch({ type: SELECTED_MOVIE, selected_movie: loadData });
    };
};



