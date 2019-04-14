import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View  } from 'react-native';
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

  const styles = StyleSheet.create({
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
      },
  })

  export default HomeScreen;