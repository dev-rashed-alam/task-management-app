import axios from 'axios';
import { apiEndPoints } from '../constant';

/**
 * TODO: - will add axios request and response interceptors if required.
 * We will provide Authorization header to the server for checking valid user or not from central place by using axios interceptors.
 * But hence we are using mock api and mock api doesn't required this headers so we are not implementing it here.
 * If require we will implement it here.
 * We will also handle unauthorized or unauthenticated request from here by using interceptors
 */

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

/**
 * The apiHandler object for handling api request and response from a central place.
 *
 * @returns {Promise<Object>} A Promise that resolves to the api request
 */
const apiHandler = {
  GET: (endPointKey, queryParams = '') => {
    return axios.get(apiEndPoints[endPointKey] + queryParams, {
      headers
    });
  },
  POST: (endPointKey, requestBody) => {
    return axios.post(apiEndPoints[endPointKey], requestBody, {
      headers
    });
  },
  PUT: (endPointKey, id, requestBody) => {
    return axios.put(apiEndPoints[endPointKey] + `/${id}`, requestBody, {
      headers
    });
  },
  DELETE: (endPointKey, id) => {
    return axios.delete(apiEndPoints[endPointKey] + `/${id}`, {
      headers
    });
  }
};

export default apiHandler;
