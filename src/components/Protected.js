import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import styles from '../styles/styles.js'

const Protected = (props) => {

  const { user } = props.navigation.state.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.username}!</Text>
      <Button
        style={styles.loginButton}
        title='Sign out'
        onPress={ async function() {
          await Auth.signOut(user);
          props.navigation.navigate('Login', {error: 'Signed out!'});
        } }
      />
    </View>
  )
}

export default Protected;