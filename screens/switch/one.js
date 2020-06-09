import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedMovies } from '../../store2/actions/action-one';

import { fetchMovies } from '../../store2/actions/action-two';


const One = props => {


    const dispatch = useDispatch();

    const twoList = useSelector(state => state.ReducerTwo.availableSearchedMovie)

    const oneList = useSelector(state => state.ReducerOne.sele)

    console.log('');
    console.log('_______________________________________________________________');

    console.log('searched movie');
    console.log(twoList);

    console.log('_______________________________________________________________');

    console.log('');

    console.log('');
    console.log('**************************************************************');

    console.log('second list api call');
    console.log(oneList);

    console.log('**************************************************************');

    console.log('');


    return <View style={styles.screen}>
        <Text>One Screen</Text>

        <Button title="search api call" onPress={() => {
            dispatch(fetchMovies('avenger'))
        }} />

        <Button title="go to second" onPress={() => {
            props.navigation.navigate('rTwo')
        }} />

        <Button title="second api call" onPress={() => {
            dispatch(fetchSelectedMovies())
        }} />

    </View>
};

const styles = StyleSheet.create({


    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    }

});


export default One;
