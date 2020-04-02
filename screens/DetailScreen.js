import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';


import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/color';


const DetailScreen = props => {

    const MovieList = useSelector(state => state.movies.availableSearchedMovie)
    const id = props.navigation.getParam('movieId');
    const moviess = MovieList.find(movie => movie.id === id)
  return <View style={{ height: '100%', padding: 10, backgroundColor: Colors.accent }}>
         <View style={styles.mealItem}>
             <View>
                 <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                     <ImageBackground
                         source={{ uri: moviess.Poster }}
                         style={styles.bgImage}>
                         <View style={styles.titleContainer}>
                             <Text style={styles.title} numberOfLines={1}>
                                 {moviess.Title}
                             </Text>
                         </View>
                     </ImageBackground>
                 </View>
                 <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                     <Text>Movie Name</Text>
                     <Text>rating</Text>
                 </View>
             </View>
         </View>
     </View>

};





// const GetMoviesFromApi = () => {

//     fetch('http://www.omdbapi.com/?apikey=ea9dc777&t=' + movie.Title)
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json)
//             console.log("------------------------------start--------------------------------------")

//             Jsonn = json
//             return <ViewUI />

//         }).catch((error) => {
//             console.error(error);
//         });
// };




const styles = StyleSheet.create({
    mealItem: {
        height: 300,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 0.5,
        marginRight: 10

    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default DetailScreen;