/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

