import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import styles from '../styles/styles.js'

const RecoverPassword = (props) => {

  const [state, setState] = useState({
    username: '',
    usernamePlaceholder: 'Tell us your username',
    newPassword: '',
    newPasswordPlaceholder: 'Enter a new password',
    verifyCode: '',
    verifyCodePlaceholder: 'Verification code',
    submitted: false,
    message: '',
    codeSent: false
  });

  function clearState() {
    setState({
      ...state,
      username: '',
      newPassword: '',
      verifyCode: '',
      message: '',
      submitted: false
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Recovery</Text>
        
      <Input
        style={styles.loginInput} 
        value={state.username}
        placeholder={state.usernamePlaceholder}
        onChange={ e  => setState({...state, username: e.nativeEvent.text  }) }
      />

      {state.codeSent && <Input
        style={styles.loginInput} 
        secureTextEntry
        autoCorrect={false}
        value={state.newPassword}
        placeholder={state.newPasswordPlaceholder}
        onChange={ e  => setState({...state, newPassword: e.nativeEvent.text  }) }
      />}

      {state.codeSent && <Input
        style={styles.loginInput} 
        value={state.verifyCode}
        placeholder={state.verifyCodePlaceholder}
        onChange={ e  => setState({...state, verifyCode: e.nativeEvent.text  }) }
      />}

      <Text style={styles.txtMessage}>
        {state.message}
      </Text>  

      <Button 
        buttonStyle={styles.loginSubmit} 
        title={"Submit"}
        loading={state.submitted}
        onPress={ async function() {
            try {
            if(!state.codeSent) {
              setState({...state, message: 'Retrieving your account...', submitted: true});
              await Auth.forgotPassword(state.username);
              setState({
                ...state, 
                message: 'We sent a verification code to your email. Use it to update your account.', 
                submitted: false,
                codeSent: true
              });
            } else {
              setState({...state, message: 'Updating your account...', submitted: true});
              await Auth.forgotPasswordSubmit(state.username, state.verifyCode, state.newPassword);
              clearState();
              setState({
                ...state, 
                submitted: false, 
                message: 'Password change successful! Returning you to the login page...',
                codeSent: false
              });
              await setTimeout( () => props.navigation.navigate('Login'), 1500);
            }
          } catch (err) {
            clearState();
            console.log(err)
            setState({
              submitted: false, 
              message: err.message
            })
          }
        }}
      />

    </View>
  );
}

export default RecoverPassword;
