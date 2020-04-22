import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import Colors from '../constants/color';
import { useDispatch, useSelector } from 'react-redux';
import * as movieActions from '../store/actions/movies';
import NearByTheater from '../models/nearByTheater';
import MovieTheaterItem from '../components/MovieTheaterItem';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { NavigationEvents } from "react-navigation";



//Rendering UI Component
const NearByTheaterScreen = props => {



    const dispatch = useDispatch();

    console.log('\n');
    var theaterList = useSelector(state => state.movies.nearByMoviewTheaters);

    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState(null);

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== 'granted') {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant location permissions to use this app.',
                [{ text: 'Okay' }]
            );
            return false;
        }
        return true;
    };

    const getLocationHandler = async () => {

        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }


        try {
            const location = await Location.getCurrentPositionAsync({
                timeout: 10000
            });
            console.log("---------------------")
            dispatch(movieActions.fetchNearByMoviewTheater(location.coords.latitude, location.coords.longitude));

        } catch (err) {
            Alert.alert(
                'Could not fetch location!',
                'Please try again later or pick a location on the map.',
                [{ text: 'Okay' }]
            );
        }
    };

    console.log("UI Render");
    console.log("[>>>]-------[<>]-[<>]-[<>]-[<>]-[]--------[]");
    useEffect(() => {

        // getLocationHandler()

    }, [])

    const Items = itemData => {
        return <MovieTheaterItem
            movieHallName={itemData.item.name}
            imageUri={itemData.item.photo_reference}
            icon={itemData.item.icon}
            rating={itemData.item.rating}
            vicinity={itemData.item.vicinity}
            lat={itemData.item.lat}
            lng={itemData.item.lng} />
    }

    return <View style={Styles.mainContainer}>
        <View style={Styles.listContainer}>
            <FlatList
                horizontal={false}
                data={theaterList}
                renderItem={Items} />
            <NavigationEvents
                onDidFocus={payload => {
                    console.log("will focus", payload);
                    getLocationHandler()
                }}
            />

        </View>
    </View>
};


NearByTheaterScreen.navigationOptions = (navdata) => {
    return {
        headerTitle: "Near by Theaters",
        headerStyle: {
            backgroundColor: Colors.accent
        }
    }
};

// Styling section
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.primary,
        height: '100%'
    },


    listContainer: {

    }
});


// Exporting for use
export default NearByTheaterScreen;