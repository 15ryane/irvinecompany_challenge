import React from 'react';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';

import styles from '../styles/styles.js';

const AuthLoadingScreen = (props) => {

  const checkIfLoggedIn = async function() {
    const userToken = await AsyncStorage.getItem('userToken');
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  checkIfLoggedIn();

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

export default AuthLoadingScreen;