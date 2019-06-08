import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import styles from '../styles/styles.js'

const CreateAccount = (props) => {

  const [state, setState] = useState({
    username: '',
    userPlaceholder: 'Username',
    email: '',
    emailPlaceholder: 'Email',
    password: '',
    passwordPlaceholder: 'Password',
    confirmPassword: '',
    confirmPasswordPlaceholder: 'Confirm Password',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Account</Text>
        
      <Input
        style={styles.loginInput} 
        placeholder={state.userPlaceholder}
        value={state.username}
        onChange={ e  => setState({...state, username: e.value  }) }
        onFocus ={ () => setState({...state, userPlaceholder: ''}) }
        onBlur  ={ () => setState({...state, userPlaceholder: 'Username'}) }>
      </Input>
      <Input
        style={styles.loginInput} 
        placeholder={state.emailPlaceholder}
        value={state.email}
        onChange={ e  => setState({...state, email: e.value  }) }
        onFocus ={ () => setState({...state, emailPlaceholder: ''}) }
        onBlur  ={ () => setState({...state, emailPlaceholder: 'Email'}) }>
      </Input>
      <Input 
        style={styles.loginInput}
        secureTextEntry
        autoCorrect={false}
        placeholder={state.passwordPlaceholder}
        value={state.password}
        onChange={ e  => setState({...state, password: e.value  }) }
        onFocus ={ () => setState({...state, passwordPlaceholder: ''}) }
        onBlur  ={ () => setState({...state, passwordPlaceholder: 'Password'}) }>
      </Input>
      <Input 
        style={styles.loginInput}
        secureTextEntry
        autoCorrect={false}
        placeholder={state.confirmPasswordPlaceholder}
        value={state.confirmPassword}
        onChange={ e  => setState({...state, confirmPassword: e.value  }) }
        onFocus ={ () => setState({...state, confirmPasswordPlaceholder: ''}) }
        onBlur  ={ () => setState({...state, confirmPasswordPlaceholder: 'Password'}) }>
      </Input>

      <Button 
        buttonStyle={styles.loginSubmit} 
        title={"Register"}>
      </Button>
      
      <Button 
        onPress={ () => props.navigation.navigate('Login') }
        title={"Go Back"}
      />
    </View>
  );
}

export default CreateAccount;
