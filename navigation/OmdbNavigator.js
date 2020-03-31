
import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createAppContainer } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import DetailScreens from '../screens/DetailScreen';
import NearByTheaterScreen from '../screens/NearByTheaterScreen';

import Colors from '../constants/color';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native';




const defaultStackNavoptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitle: 'Details'
};

// stack navigator
const MealNavigator = createStackNavigator({
    SearchScreen: SearchScreen,
    DetailScreen: DetailScreens
}, {
    defaultNavigationOptions: defaultStackNavoptions
});

const NearByStacknavigator = createStackNavigator({
    NearByTheater: NearByTheaterScreen

}, {
    defaultNavigationOptions: defaultStackNavoptions
});
// common code for nav
var tabScreenConfig = {
    Search: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='md-search' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary
        }

    }, NearBy: {
        screen: NearByStacknavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='md-tv' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accent
        }
    }
};

const createMaterialBottomTabNavigatorCode = createMaterialBottomTabNavigator(
    tabScreenConfig, {
    activeTintColor: Colors.primary,
    shifting: true,
});

const createBottomTabNavigatorCode = createBottomTabNavigator(
    tabScreenConfig,
    {
        tabBarOptions: {
            activeTintColor: Colors.primary
        }
    });

const MealFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigatorCode : createBottomTabNavigatorCode

export default createAppContainer(MealFavTabNavigator);