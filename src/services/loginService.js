import apiHandler from '../common/apiHandler';
import toast from 'react-hot-toast';
import { generateRandomString } from '../helpers/helpers';

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

const isValidCredential = (requestBody, fileResponse) => {
  return (
    requestBody.username === fileResponse.username && requestBody.password === fileResponse.password
  );
};

export const setLocalStorage = (data) => {
  localStorage.setItem('username', data.username);
  localStorage.setItem('name', data.name);
  localStorage.setItem('email', data.email);

  /**
   * As we have no jwt token that's why i'm creating a random string as a token
   * */

  localStorage.setItem('token', generateRandomString(20));
};

export const useAuth = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const getUserInfo = () => {
  let user = {};
  if (useAuth()) {
    user.name = localStorage.getItem('name');
    user.username = localStorage.getItem('username');
    user.email = localStorage.getItem('email');
  }
  return user;
};

export const doLogout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('name');
  localStorage.removeItem('token');
};
