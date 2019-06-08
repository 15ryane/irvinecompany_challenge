/**
 * Irvine Company - Challenge
 * Ed Ryan - Jun 7, 2019
 *
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/components/Login.js'
import RecoverPassword from './src/components/RecoverPassword.js' 
import CreateAccount from './src/components/CreateAccount.js'
import LoginWarning from './src/components/LoginWarning.js'

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    CreateAccount: CreateAccount,
    RecoverPassword: RecoverPassword,
    LoginWarning: LoginWarning
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