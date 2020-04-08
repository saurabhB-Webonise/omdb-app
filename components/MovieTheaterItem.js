import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../constants/color';
import { Rating, AirbnbRating } from 'react-native-elements';
import MapPreview from './MapPreview'

import MapView, { Marker } from 'react-native-maps'


const MovieTheaterItem = props => {

    const region = {
        latitude:  props.lat,
        longitude: props.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    let markerCoordinates = {
        latitude: props.lat,
        longitude: props.lng
    };

    return <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Image style={styles.image} source={{ uri: props.imageUri }} />
                <View style={{ flexDirection: 'column', margin: 10, width: '70%' }}>
                    <Text style={{ color: 'white', fontSize: 25, width: '100%' }}>{props.movieHallName}</Text>
                    <Text style={{ color: 'red', fontSize: 15, width: '100%' }}>{props.vicinity}</Text>
                    <Text style={{ color: 'white', fontSize: 14, width: '100%' }}>{props.rating}</Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <MapView
                    style={{ height: '79%', width: '100%', borderRadius: 10 }}
                    region={region} >
                    <Marker title={props.movieHallName} coordinate={markerCoordinates} />
                </MapView>
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
        minHeight: 300,
        width: '100%',
        flexDirection: 'column',
        borderRadius: 10
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1
    },
});



export default MovieTheaterItem;