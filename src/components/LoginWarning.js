import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import styles from '../styles/styles.js'

const LoginWarning = (props) => {

  const [state, setState] = useState({
    email: '',
    emailPlaceholder: 'Email',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your email?</Text>
    </View>
  )
}

export default LoginWarning;