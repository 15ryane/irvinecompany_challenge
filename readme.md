# Irvine Company Challenge
Ed Ryan, Jun 8-9th

Specifications: Create a login screen using react-native and node.js.

### Overview

A simple react-native frontend with an AWS backend.

The app is built from the react-native CLI boilerplate.

React-navigation is used to control the flow and structure of the UX. We seperate the program into an Auth navigation stack and an App navigation stack. Access to or from either is controlled via AuthLoading screen, which checks for the 'userToken' key stored in react-native's AsyncStorage and navigates the user accordingly.

The Auth stack consists of three screens: CreateAccount, Login, and RecoverPassword. Each screen is its own stateful component.

The logic and state of each screen is largely self-contained. While this does introduce some code repetition, this approach allows screen state to persist through the navigation stack - useful for when the user accidentally navigates to the wrong page and has to backtrack.

State is managed through react-hooks. This allows us to entirely avoid class declarations and write purely functional code.

Backend logic is handled through AWS Cognito. The details of authentication - password validation, creating accounts, hashing and storing passwords, sending verification codes through email, resetting account passwords - are all gracefully handled by Amazon.

The UI is fortified with react-native-elements. Stylings are not in-line - rather, they are declared in a seperate styles.js file and imported.

### Thanks!

Thanks for taking a look! Please reach out if you have any questions or remarks.
