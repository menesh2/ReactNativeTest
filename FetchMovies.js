import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, TouchableHighlight, Text, View  } from 'react-native';

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
    }
  })

  export default FetchMovies