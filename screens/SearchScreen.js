import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GridList from '../components/GridList';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/color';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/actions/movies'


const SearchScreen = props => {

    const availableMovies = useSelector(state => state.movies.availableSearchedMovie)
    const dispatch = useDispatch();
    const [searchBoxData, setSearchBoxData] = useState('');
    const onSearchBoxDataChanged = inputText => {
        setSearchBoxData(inputText)
        console.log(inputText)
    };
    const onSearchButtonClick = () => {
        dispatch(fetchMovies(searchBoxData))
        setSearchBoxData('')
    };
    const onGridCellClick = itemData => {
        props.navigation.navigate({
            routeName: 'DetailScreen',
            params: {
                movieId: itemData.item.id
            }
        });
    };

    return <View style={{ height:'100%', backgroundColor: Colors.accent }}>
        <View style={Styles.searchContainer}>
            <TextInput
                style={Styles.searchbox}
                placeholder="Search Movie..."
                value={searchBoxData}
                onChangeText={onSearchBoxDataChanged}
            />
            <Text style={Styles.searchbutton} onPress={onSearchButtonClick}>Search</Text>
        </View>
        <GridList  style={Styles.list} listData={availableMovies} onSelect={onGridCellClick} />
    </View>
};

SearchScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Omdb',
    }
};

const Styles = StyleSheet.create({
    screen: {
        flex:1
    },
    searchContainer: {
        flexDirection: 'row'
    },
    searchbox: {
        margin: 10,
        borderColor: Colors.primary,   
        borderWidth: 0.5,
        borderRadius: 7,
        maxWidth: '60%',
        minWidth: '60%',
        maxHeight:50,
        textAlignVertical:'center',
        textAlign:'center'
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
        maxWidth: '30%',
        minWidth: '30%'
    },
    list:{
         height:'100%',
    }
});

export default SearchScreen;