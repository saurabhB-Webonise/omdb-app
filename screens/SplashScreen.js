import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';




const SplashScreen = props => {


    const [flag, setFlag] = useState(false);

    const promises = () => {

        const promise = new Promise((resolve) =>
            setTimeout(
                () => {
                    setFlag(true)
                },
                2000
            )
        );
        return promise;
    }


    const Timer = () => {


        promises().then((resolve) => {
            return (<View><Text>Time out</Text></View>)
        }, (reject) => { })
    };
    promises()
    return <View>
        {flag ? (<Text>Hello</Text>) : (<Text>World</Text>)}
    </View>
};


const Styles = StyleSheet.create({

});



export default SplashScreen;