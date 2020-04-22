

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps'


const Map = props => {
    const region = {
        latitude: 18.4499177,
        longitude: 73.8480012,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
    
    let markerCoordinates = {
        latitude: 18.4499177,
        longitude: 73.8480012
    }

return <View style={styles.screen}>
    <Text>Map</Text>

    <MapView
        style={{ height: '79%', width: '100%', borderRadius: 10 }}
        region={region} >
        <Marker title={props.movieHallName} coordinate={markerCoordinates} />
    </MapView>

</View>
};

const styles = StyleSheet.create({

    screen: {
        backgroundColor: 'grey',
        flex: 1
    }

});

export default Map;