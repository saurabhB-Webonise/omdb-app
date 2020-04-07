import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Colors from '../constants/color';
import { Rating, AirbnbRating } from 'react-native-elements';


const MovieTheaterItem = props => {
    return <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
            <Image style={styles.image} source={{ uri: props.imageUri }} />

            <View style={{ flexDirection: 'column', margin: 10 }}>
                <Text style={{ color: 'white', fontSize: 25 }}>{props.movieHallName}</Text>
                <Text style={{ color: 'white', fontSize: 15 }}>{props.vicinity}</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>{props.rating}</Text>
            </View>
        </View>
    </View>
};


const styles = StyleSheet.create({

    mainContainer: {
        padding: 10
    },
    innerContainer: {
        backgroundColor: Colors.accent,
        maxHeight: 300,
        minHeight: 100,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,

    }
});



export default MovieTheaterItem;