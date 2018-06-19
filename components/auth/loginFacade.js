import { AsyncStorage } from 'react-native';
import { handleHttpErrors, makeFetchOptions } from '../../httpRequest/fetchReduce';

const URL = require("../../package.json").config.url;

class ApiFacade {

  setToken = async (token) => {
    await AsyncStorage.setItem('jwtToken', token)
  }

  getToken = async () => {
    const token = await AsyncStorage.getItem('jwtToken');
    return token;
  }

  loggedIn = async () => {
    const loggedIn = await this.getToken() != null;
    return loggedIn;
  }

  logout = async () => {
    await AsyncStorage.removeItem("jwtToken");
  }

  login = async (user, pass) => {
    const options = await makeFetchOptions("POST", { username: user, password: pass });
    await fetch(URL + "/api/login", options, true)
      .then(handleHttpErrors)
      .then(res => {
        this.setToken(res.token)
      })
      .catch(function (error) {
        console.log('ERROR : There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        return error.message;
      });
  }
}

const facade = new ApiFacade();
export default facade;
