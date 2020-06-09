import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedMovies } from '../../store2/actions/action-one';

import { fetchMovies } from '../../store2/actions/action-two';

const Two = props => {


    const dispatch = useDispatch();


    const oneList = useSelector(state => state.ReducerOne.sele)

    const twoList = useSelector(state => state.ReducerTwo.availableSearchedMovie)

    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('Two screen');
    console.log('**************************************************************');
    console.log('');
    console.log('One List');

    console.log(oneList);
    console.log('\n');
    console.log('');
    console.log('');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log('Two list');

    console.log(twoList);
    console.log('');
    console.log('');
    console.log('');
    console.log('**************************************************************');
    console.log('');
    return <View style={styles.screen}>
        <Text>Two Screen</Text>
        <Button title="second api call" onPress={() => {
            dispatch(fetchSelectedMovies())
        }} />
        <Button title="go to third" onPress={() => {
            props.navigation.navigate('rThree')
        }} />
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    }

});


export default Two;
