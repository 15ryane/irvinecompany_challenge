import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import styles from '../styles/styles.js'


const Login = (props) =>  {

  const [state, setState] = useState({
    username: '',
    userPlaceholder: 'Username',
    password: '',
    passwordPlaceholder: 'Password',
    submitted: false
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sample Login</Text>
        
      <Input
        style={styles.loginInput} 
        placeholder={state.userPlaceholder}
        value={state.username}
        onChange={ e  => setState({...state, username: e.value  }) }
        onFocus ={ () => setState({...state, userPlaceholder: ''}) }
        onBlur  ={ () => setState({...state, userPlaceholder: 'Username'}) }
      />
      <Input 
        style={styles.loginInput}
        secureTextEntry
        autoCorrect={false}
        placeholder={state.passwordPlaceholder}
        value={state.password}
        onChange={ e  => setState({...state, password: e.value  }) }
        onFocus ={ () => setState({...state, passwordPlaceholder: ''}) }
        onBlur  ={ () => setState({...state, passwordPlaceholder: 'Password'}) }
      />

      <Button 
        buttonStyle={styles.loginSubmit} 
        title={"Submit"}
        onPress={ () => setState({...state, submitted: true})}
        loading={state.submitted}
      />

      <Button
        type='clear'
        titleStyle={styles.loginButtonHelp}
        onPress={ () => props.navigation.navigate('RecoverPassword') }
        title="Forgot your password?"
      />

      <Button
        type='clear'
        titleStyle={styles.loginButtonHelp}
        onPress={ () => props.navigation.navigate('CreateAccount') }
        title="Register an account"
      />

    </View>
  );
}

export default Login;