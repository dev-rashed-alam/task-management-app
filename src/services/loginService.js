/**
 This file contains functions related to user authentication.
 */
import apiHandler from '../common/apiHandler';
import toast from 'react-hot-toast';
import { generateRandomString } from '../helpers/helpers';

/**
 * This function is responsible for authenticating user credentials.
 * The function sends a GET request to the login API endpoint .
 * which is located in our public folder as a json file to retrieve user data.
 * If the credentials are valid, it returns the user data.
 * Otherwise, it calls the callback function with an error object
 * containing the error message and the username.
 */
export const doLogin = async (requestBody, callback) => {
  try {
    const { data } = await apiHandler.GET('login');
    if (isValidCredential(requestBody, data)) {
      return data;
    } else {
      callback({
        errors: {
          data: { username: requestBody.username },
          message: 'Invalid credentials!'
        }
      });
    }
  } catch ({ response }) {
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.error('There was an error in the server side!');
    }
  }
};

/**
 * This function is a helper function to check if the given credentials are valid.
 * It receives a requestBody object and a fileResponse object as parameters.
 * The function returns true if the username and password in the requestBody object match the corresponding properties in the fileResponse object.
 */
const isValidCredential = (requestBody, fileResponse) => {
  return (
    requestBody.username === fileResponse.username && requestBody.password === fileResponse.password
  );
};

/**
 * This function is responsible for saving user data in the local storage.
 * As we have to JWT token, so we make a random string as token.
 * We will check this token in localstorage if it exists then we will think that requested user is valid.
 */
export const setLocalStorage = (data) => {
  localStorage.setItem('username', data.username);
  localStorage.setItem('name', data.name);
  localStorage.setItem('email', data.email);
  localStorage.setItem('token', generateRandomString(20));
};

/**
 * This function is a hook that returns true if there is a token in the local storage.
 */
export const useAuth = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

/**
 * This function is responsible for retrieving user data from the local storage.
 */
export const getUserInfo = () => {
  let user = {};
  if (useAuth()) {
    user.name = localStorage.getItem('name');
    user.username = localStorage.getItem('username');
    user.email = localStorage.getItem('email');
  }
  return user;
};

/**
 *This function is responsible for removing user data from localstorage
 * */
export const doLogout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('name');
  localStorage.removeItem('token');
};
