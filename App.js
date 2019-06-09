/**
 * Irvine Company - Challenge
 * Ed Ryan - Jun 7, 2019
 *
 */

import React from 'react';
// middleware
import { createStackNavigator, createAppContainer } from "react-navigation";

// Amplify setup
import Amplify from 'aws-amplify';
import amplify from './src/aws-exports.js';
Amplify.configure(amplify);

// components
import Login from './src/components/Login.js'
import RecoverPassword from './src/components/RecoverPassword.js' 
import CreateAccount from './src/components/CreateAccount.js'
import Protected from './src/components/Protected.js'

// init react-navigator
const AppNavigator = createStackNavigator(
  {
    Login: Login,
    CreateAccount: CreateAccount,
    RecoverPassword: RecoverPassword,
    Protected: Protected
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer />
  )
}

export default App;