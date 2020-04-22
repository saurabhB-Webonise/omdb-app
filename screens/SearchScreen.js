import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import GridList from '../components/GridList';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/color';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/actions/movies';
import { NavigationEvents } from "react-navigation";



const SearchScreen = props => {

    const [searchBoxData, setSearchBoxData] = useState('');
    const [entererdData, setEnteredData] = useState('');
    const availableMovies = useSelector(state => state.movies.availableSearchedMovie)
    console.log("availableMovies --------> " + availableMovies);

    var tt = null;
    const t = () => {
        AsyncStorage.setItem("dum_key", availableMovies);
    }

    const y = async () => {
        try {
            let user = await AsyncStorage.getItem('dum_key');
            console.log(user);
            // if(availableMovies===undefined)
            // alert(user);
        } catch (error) {
            console.log(error)
            //alert(error)
        }
        
        tt = AsyncStorage.getItem("dum_key");
        console.log("-----}->" + tt);
    }

    y()
    // t()




    // if()
    // if (availableMovies !== undefined) {
    //     AsyncStorage.setItem("dum_key",availableMovies)
    // }


    const dispatch = useDispatch();
    ////

    const saveData = () => {
        let name = "Michal";
        AsyncStorage.setItem('user', name);
    };

    const displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            console.log(user);
            alert(user);
        }
        catch (error) {
            console.log(error)
            //alert(error)
        }
    }
    ////

    const onSearchBoxDataChanged = inputText => {
        setSearchBoxData(inputText)
        console.log(inputText)
    };

    const onSearchButtonClick = () => {
        setEnteredData(searchBoxData);
        setSearchBoxData('')
    };

    useEffect(() => {
        if (entererdData !== '')
            dispatch(fetchMovies(entererdData))
        console.log("-----------Called")
        t()
    }, [entererdData]);

    console.log("entered data " + entererdData)

    const onGridCellClick = itemData => {
        props.navigation.navigate({
            routeName: 'DetailScreen',
            params: {
                movieId: itemData.item.id
            }
        });
    };

    return <View style={{ height: '100%', backgroundColor: Colors.accent }}>
        <View style={Styles.searchContainer}>
            <TextInput
                style={Styles.searchbox}
                placeholder="Search Movie..."
                value={searchBoxData}
                onChangeText={onSearchBoxDataChanged} />
            <Text style={Styles.searchbutton} onPress={onSearchButtonClick}>Search</Text>
            <NavigationEvents
                onDidFocus={payload => {
                    console.log("will focus", payload);
                    //  if (entererdData !== '')
                    //    dispatch(fetchMovies(entererdData))
                }} />
        </View>
        <GridList style={Styles.list} listData={availableMovies} onSelect={onGridCellClick} />
    </View>
};

SearchScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Omdb',
    }
};

const Styles = StyleSheet.create({
    screen: {
        flex: 1
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
        maxHeight: 50,
        textAlignVertical: 'center',
        textAlign: 'center'
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
    list: {
        height: '100%',
    }
});

export default SearchScreen;