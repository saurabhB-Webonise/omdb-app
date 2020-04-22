import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Text extends Component {




    
    state = {
        text: ''
    };

    onChangeText = text => { this.setState({ text }) }

    onSubmitEditing2 = () => {
        const { onSubmitEditing } = this.props
        const { text } = this.state
        if (!text) return // Don't submit if empty
        onSubmitEditing(text)
        this.setState({ text: '' })
    }

    onSubmitingText = () => {
        const { onSubmitingTextttt } = this.props
        onSubmitingTextttt(text)
        this.setState({ text: '' })
    }

    render() {
        <View><Text> hello world</Text></View>
    }
}


const styles = StyleSheet.create({




});
