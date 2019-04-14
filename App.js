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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableHighlight underlayColor="white" onPress={() => this.props.navigation.navigate('FetchMovies')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get good Movies from remote</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class FetchMovies extends React.Component {

  static navigationOptions = {
    title: 'GOOD MOVIES',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={styles.continer}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.continer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.movieText}>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  FetchMovies: {screen: FetchMovies},
},
{
  initialRouteName: "Home"
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    paddingTop: 70,
    paddingLeft: 20,
  },
  movieText: {
    fontSize: 20,
    padding: 20,
    color: "gray",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

