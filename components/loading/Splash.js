import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import jwt_decode from "jwt-decode";

export default class Splash extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.checkToken();
  }

  // Fetch the token from storage then navigate to our appropriate place
  checkToken = async () => {
    const userToken = await AsyncStorage.getItem('jwtToken');

    // if userToken is not undefined(saved in AsyncStorage from former requests)
    if (userToken) {
      //Decodes the token to json/JS object
      var decoded = jwt_decode(userToken);
      // checks if the token is expired, removes it from AsyncStorage
      // then sets the const userToken to null, so the Auth/LoginScreen stack will render
      if (decoded.exp < (new Date().getTime() / 1000)) {
        await AsyncStorage.removeItem('jwtToken');
        const userToken = null;
      }
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> Synclist </Text>
          <ActivityIndicator />
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by React Native</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3dc1d3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',

  }

})