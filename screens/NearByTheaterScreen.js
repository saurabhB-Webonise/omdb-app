import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import Colors from '../constants/color';
import { useDispatch, useSelector } from 'react-redux';
import * as movieActions from '../store/actions/movies';
import NearByTheater from '../models/nearByTheater';
import MovieTheaterItem from '../components/MovieTheaterItem';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


//Rendering UI Component
const NearByTheaterScreen = props => {

    var theaterList = useSelector(state => state.movies.nearByMoviewTheaters);
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState(null);

    console.log("Inside near by screen  " + theaterList);


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
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 10000
            });
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });

            console.log(pickedLocation)
        } catch (err) {
            Alert.alert(
                'Could not fetch location!',
                'Please try again later or pick a location on the map.',
                [{ text: 'Okay' }]
            );
        }
        setIsFetching(false);
    };


    const dispatch = useDispatch();

    var f = 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAaqH3c4BHdFHi7MGOdn-se7h41_IXN2DyDZHVsdIkM6MO2rXL18aGZ0QqvbCChHPoW0U00bJf3LYEmTrbHJAOWol0Mz57FjvqCrbpSGOJRetahQU4SURW3GH5YonriqAvEhCjeBQ0MVgMvj6NBsrg6cJGGhS4Rh8cg-bscVI5oBDbJ2AQhj8vXQ&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCJZ2riLHCzP9k49u1bn-2LSaqADGN9Xcs'

    //  theaterList = [new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon'),
    //  new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon'),
    //  new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon'),
    //  new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon'),
    //  new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon'),
    //  new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon'),
    //  new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon'),
    //  new NearByTheater('1', 'name', f, 'rating', 'vinicity', 'icon')]





    useEffect(() => {
        getLocationHandler()
        if(pickedLocation!==null)
        dispatch(movieActions.fetchNearByMoviewTheater(pickedLocation.lat, pickedLocation.lng));
    }, [dispatch]);

    const Items = itemData => {
        return <MovieTheaterItem
            movieHallName={itemData.item.name}
            imageUri={itemData.item.photo_reference}
            icon={itemData.item.icon}
            rating={itemData.item.rating}
            vicinity={itemData.item.vicinity} />
    }




    //console.log("-------->" + theaterList.length);

    //const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <View style={Styles.mainContainer}>
        <View style={Styles.listContainer}>

            <FlatList
                horizontal={false}
                data={theaterList}
                renderItem={Items} />
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