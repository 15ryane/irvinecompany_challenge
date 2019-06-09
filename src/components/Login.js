import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import styles from '../styles/styles.js';



const Login = (props) =>  {

  const [state, setState] = useState({
    username: '',
    userPlaceholder: 'Username',
    password: '',
    passwordPlaceholder: 'Password',
    verifyCode: '',
    verifyCodePlaceholder: 'Enter your verification code',
    needsVerification: false,
    submitted: false,
    message: props.navigation.getParam('message') || ''
  });

  function clearState() {
    setState({
      ...state,
      username: '',
      password: '',
      verifyCode: '',
      message: '',
      submitted: false,
      needsVerification: false
    })
  }

  return (
    <View style={styles.container}>
        
      <Input
        style={styles.loginInput} 
        placeholder={state.userPlaceholder}
        value={state.username}
        autofocus
        onChange={ e  => setState({...state, username: e.nativeEvent.text  }) }
      />
      {!state.needsVerification && <Input 
        style={styles.loginInput}
        secureTextEntry
        autoCorrect={false}
        placeholder={state.passwordPlaceholder}
        value={state.password}
        onChange={ e  => setState({...state, password: e.nativeEvent.text  }) }
      />}

      {state.needsVerification && <Input 
        style={styles.loginInput}
        autoCorrect={false}
        placeholder={state.verifyCodePlaceholder}
        value={state.verifyCode}
        onChange={ e  => setState({...state, verifyCode: e.nativeEvent.text  }) }
      />}

      <Text style={styles.txtMessage}>
        {state.message}
      </Text>  

      <Button 
        buttonStyle={styles.loginSubmit} 
        title={"Submit"}
        onPress={ async function(e) {
          try {
            setState({...state, submitted: true});
            if(!state.needsVerification) {
              const user = await Auth.signIn(state.username, state.password)
              clearState();
              props.navigation.navigate('Protected', { user: user} );
            } else {
              await Auth.confirmSignUp(state.username, state.verifyCode)
              setState({
                ...state, 
                message: 'Verified! Please log in again.',
                password: '',
                needsVerification: false
              })
            }
          } catch (err) {
            const errMsg = err.message || err;
            setState({
              ...state,
              password: '',
              verifyCode: '',
              message: errMsg,
              submitted: false,
              needsVerification: (err.code === 'UserNotConfirmedException')
            })
          }
        } } 
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