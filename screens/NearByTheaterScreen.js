import React from 'react';
import { StyleSheet, View } from 'react-native';
import MealList from '../components/MovielList';
import { MEALS } from '../data/dummy-data';
import Colors from '../constants/color';


//Rendering UI Component
const NearByTheaterScreen = props => {
    const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <View style={Styles.list}>
        <MealList  listData={favMeal} navigation={props.navigation} />
    </View>

};

NearByTheaterScreen.navigationOptions = (navdata) => {
    return {
        headerTitle: "Near by Theaters"
    }
};

// Styling section
const Styles = StyleSheet.create({
    list: {
        backgroundColor: Colors.accent,
        height:'100%'
    }
});


// Exporting for use
export default NearByTheaterScreen;