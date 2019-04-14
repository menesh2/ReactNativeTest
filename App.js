/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, TouchableHighlight, Text, View  } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import FetchMovies from './FetchMovies';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  FetchMovies: {screen: FetchMovies},
},
{
  initialRouteName: "Home"
});

const App = createAppContainer(MainNavigator);

export default App;

