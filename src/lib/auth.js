import { Auth } from 'aws-amplify';

const auth = {
  signIn: async function(username, password) {
    try {
      const user = await Auth.signIn(username, password);
      return user;
    } catch (err) {
      return err;
    }
  },

  register: async function(username, password, email) {
    Auth.signUp({
      username: username,
      password: password,
      attributes: {
          email: email
      }
    })
    .then(data => data)
    .catch(err => {
      console.log(err);
    })
  },

  forgotPassword: async function(username) {
    Auth.forgotPassword(username)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  },

  forgotPasswordSubmit: async function(username, code, new_password) {
    auth.forgotPasswordSubmit(username, code, new_password) 
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
}


export default auth;
