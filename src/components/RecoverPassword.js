import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import styles from '../styles/styles.js'

const RecoverPassword = (props) => {

  const [state, setState] = useState({
    email: '',
    emailPlaceholder: 'Email',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your email?</Text>
        
      <Input
        style={styles.loginInput} 
        placeholder={state.emailPlaceholder}
        value={state.email}
        onChange={ e  => setState({...state, email: e.value  }) }
        onFocus ={ () => setState({...state, emailPlaceholder: ''}) }
        onBlur  ={ () => setState({...state, emailPlaceholder: 'Email'}) }>
      </Input>

      <Button 
        buttonStyle={styles.loginSubmit} 
        title={"Submit"}>
      </Button>
      
      <Button 
        onPress={ () => props.navigation.navigate('Login') }
        buttonStyle={styles.submit} 
        title={"Go Back"}
      />
    </View>
  );
}

export default RecoverPassword;
