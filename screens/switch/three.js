import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';



const Three = props => {
    return <View style={styles.screen}>
        <Text>Three Screen</Text>
        <Button title="go to first" onPress={() => {
            props.navigation.navigate('rOne')
        }} />
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'maroon'
    }

});

export default Three;
