import React, { useState } from 'react';
import *  as Font from 'expo-font';
import { AppLoading } from 'expo';
import OmdbNavigator from './navigation/OmdbNavigator';
import SplashScreen from './screens/SplashScreen';

import movieReducer from './store/reducers/movies';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import DummyScreen from './screens/DummyScreen';

enableScreens();

const rootReducer = combineReducers({
  movies: movieReducer
});

// Add the autoRehydrate middleware to your redux store
// const store = createStore(reducer, undefined, autoRehydrate())

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));




// Enable persistence
//persistStore(store)


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)} />
  }
  return <Provider store={store}>
    <OmdbNavigator />
  </Provider>;


  //  return <DummyScreen />
}
