import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MOVIES_NAME } from '../data/dummy-data';
import GridList from '../components/GridList';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/color';

const SearchScreen = props => {

    const onGridCellClick = itemData => {
        props.navigation.navigate({
            routeName: 'DetailScreen',
            params: {
                movieId: itemData.item.id
            }
        });
    };

    return <View style={{backgroundColor:Colors.accent}}>
        <View style={Styles.searchContainer}>
            <TextInput style={Styles.searchbox} placeholder="Search Movie..." />
            <Text style={Styles.searchbutton}>Search</Text>
        </View>
        <GridList listData={MOVIES_NAME} onSelect={onGridCellClick} />
    </View>

};

SearchScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Search Screen'
    }
};

const Styles = StyleSheet.create({
    screen: {
    },
    searchContainer: {
        flexDirection: 'row'
    },
    searchbox: {
        margin: 10,
        borderColor: Colors.primary,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 7,
        maxWidth:'60%',
        minWidth:'60%'
    },
    searchbutton: {
        backgroundColor: Colors.primary,
        borderRadius: 7,
        padding: 10,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        margin: 10,
        maxWidth:'30%',
        minWidth:'30%'
 
    }
});

export default SearchScreen;