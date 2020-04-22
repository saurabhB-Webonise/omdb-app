import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';




const DummyScreen = props => {

    const [dummy, setDummy] = useState('');
    console.log("--"+dummy)
    const clickHandler = () => {
        console.log("-clicked---")
        setDummy('hello')
    }
    useEffect(() => {
        console.log("Called useEffect")
    });
    return <View style={styles.screen}>
        <Text>Dummy screen</Text>
        <Button title="Click" onPress={clickHandler} />
    </View>
};



const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'yellow',
    },
});

export default DummyScreen;