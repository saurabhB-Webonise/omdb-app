import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';


import MOVIE_NAME from '../data/dummy-data';
import  Colors  from '../constants/color';

const DetailScreen = props => {
    const id = props.navigation.getParam('movieId');
    console.log(id)
    // const movie = MOVIE_NAME.find(movie => movie.id === id)

    return <View style={{ height:'100%',padding: 10 ,backgroundColor:Colors.accent}}>
        <View style={styles.mealItem}>
            <View>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg' }}
                        style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>
                                {}

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