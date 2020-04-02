import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from 'react-native';

const MovieGridTile = props => {

  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return <View style={styles.gridItem}>
    <ImageBackground
      source={{ uri: props.Poster }}
      style={styles.bgImage}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.container, ...props.style }}>
          <View style={styles.innerContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {props.title}
            </Text>
          </View>
        </View>
      </TouchableCmp>
    </ImageBackground>
  </View>
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  innerContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10
  },
  title: {
    fontSize: 15,
    textAlign: 'right',
    color: 'white',
    fontFamily: 'open-sans'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    opacity: 0.7
  }
});

export default MovieGridTile;