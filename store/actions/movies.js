
import SearchedMovie from '../../models/searchedmovie';
import NearByTheater from '../../models/nearByTheater';

export const SEARCHED_MOVIE_LIST = 'SEARCHED_MOVIE_LIST';
export const SELECTED_MOVIE = 'SELECTED_MOVIE';
export const NEAR_BY_MOVIEW_THEATER = 'NEAR_BY_MOVIEW_THEATER';


export const selectedMovies = () => {
    return async dispatch => {
        const response = await fetch('http://www.omdbapi.com/?apikey=ea9dc777&t=Scooby-Doo! and WWE: Curse of the Speed Demonhttp://www.omdbapi.com/?apikey=ea9dc777&s=Speed&page=3');
        const resData = await response.json();
        console.log(resData)
        var data = {
            Title: resData.Title,
            Poster: resData.Poster
        }
        dispatch({ type: SELECTED_MOVIE, selected_movie: data });
    };
};


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
        dispatch({ type: SEARCHED_MOVIE_LIST, searched_movie_list: loadMovie });
    };
};

//18.4499177, 73.8480012

export const fetchNearByMoviewTheater = (lat, lng) => {

    return async dispatch => {
        const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lng + '&radius=5000&type=movie_theater&key=AIzaSyCJZ2riLHCzP9k49u1bn-2LSaqADGN9Xcs')
        const resdata = await response.json();
        const nearByMovieTheater = [];


        console.log("****************************************************");

        console.log(resdata);

        for (var i = 0; i < resdata.results.length; i++) {



            var img = null;
            try {
                console.log("arrrry " + resdata.results[i].photos[0].photo_reference);
                img = resdata.results[i].photos[0].photo_reference

            } catch (error) {
                img = null;
            }


            var f1 = 'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + img + '&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCJZ2riLHCzP9k49u1bn-2LSaqADGN9Xcs'
            //  var f = 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAaqH3c4BHdFHi7MGOdn-se7h41_IXN2DyDZHVsdIkM6MO2rXL18aGZ0QqvbCChHPoW0U00bJf3LYEmTrbHJAOWol0Mz57FjvqCrbpSGOJRetahQU4SURW3GH5YonriqAvEhCjeBQ0MVgMvj6NBsrg6cJGGhS4Rh8cg-bscVI5oBDbJ2AQhj8vXQ&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCJZ2riLHCzP9k49u1bn-2LSaqADGN9Xcs'
            nearByMovieTheater.push(new NearByTheater(
                resdata.results[i].id,
                resdata.results[i].name,
                f1,
                resdata.results[i].vicinity,
                resdata.results[i].rating,
                resdata.results[i].icon
            )
            );
        }
        console.log("------------------------------------------------------------------------");

        dispatch({ type: NEAR_BY_MOVIEW_THEATER, near_by_movie_theater: nearByMovieTheater });

    };
};