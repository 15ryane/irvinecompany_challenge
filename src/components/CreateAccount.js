import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import styles from '../styles/styles.js'

const CreateAccount = (props) => {

  const [state, setState] = useState({
    username: '',
    usernamePlaceholder: 'Username',
    email: '',
    emailPlaceholder: 'Email',
    password: '',
    passwordPlaceholder: 'Password',
    confirmPassword: '',
    confirmPasswordPlaceholder: 'Confirm password',
    message: '',
    submitted: false
  });

  return (
    <View style={styles.container}>
        
      <Input
        style={styles.loginInput} 
        placeholder={state.usernamePlaceholder}
        value={state.username}
        onChange={ e  => setState({...state, username: e.nativeEvent.text  }) }
      />
      <Input
        style={styles.loginInput} 
        placeholder={state.emailPlaceholder}
        value={state.email}
        onChange={ e  => setState({...state, email: e.nativeEvent.text  }) }
      />
      <Input 
        style={styles.loginInput}
        secureTextEntry
        autoCorrect={false}
        placeholder={state.passwordPlaceholder}
        value={state.password}
        onChange={ e  => setState({...state, password: e.nativeEvent.text  }) }
      />
      <Input 
        style={styles.loginInput}
        secureTextEntry
        autoCorrect={false}
        placeholder={state.confirmPasswordPlaceholder}
        value={state.confirmPassword}
        onChange={ e  => setState({...state, confirmPassword: e.nativeEvent.text }) }
      />

      <Text style={styles.txtMessage}>
        {state.message}
      </Text>

      <Button 
        buttonStyle={styles.loginSubmit} 
        title={'Register'}
        disabled={state.submitButtonDisabled}
        loading={state.submitted}
        onPress={ async function() {
          if(state.password !== state.confirmPassword) {
            setState({
              ...state,
              password: '',
              confirmPassword: '',
              message: `Your passwords didn't match.`
            })
          } else {
            try {
              setState({...state, submitted: true, message: 'Registering your account...'});
              await Auth.signUp(state.username, state.password, state.email);
              setState({...state, submitted: false, message: 'Registered! Returning you to the login page...'});
              await setTimeout( () => props.navigation.navigate('Login'), 1500);
            } catch (err) {
              if(err.name === 'InvalidParameterException') {
                setState({
                  ...state, 
                  password: '',
                  confirmPassword: '',
                  submitted: false,
                  message: 'Passwords must be at least 8 characters long.'
                })
              } else {
                setState({
                  ...state, 
                  password: '',
                  confirmPassword: '',
                  submitted: false,
                  message: err.message
                })  
              }
            }
          }
        }}
      />
      
    </View>
  );
}

export default CreateAccount;
