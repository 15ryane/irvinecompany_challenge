import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 50
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30
  },

  loginInput: {
    fontSize: 17,
    textAlign: 'center',
    color: '#333333',
    borderColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 1,
    marginTop: 2,
    marginBottom: 5
  },

  loginSubmit: {
    width: 170,
    paddingHorizontal: 50,
    marginTop: 40,
    marginBottom: 20
  },

  loginButtonHelp: {
    fontSize: 15
  },

  txtMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: -20
  }

});

export default styles;
