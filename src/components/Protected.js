import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import styles from '../styles/styles.js'

const Protected = (props) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the app!</Text>
      <Button
        style={styles.loginButton}
        title='Sign out'
        onPress={ async function() {
          await Auth.signOut(await AsyncStorage.getItem('userToken').username);
          await AsyncStorage.clear();
          props.navigation.navigate('Auth');
        } }
      />
    </View>
  )
}

export default Protected;