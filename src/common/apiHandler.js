import axios from 'axios';
import { apiEndPoints } from '../constant';

/**
 * TODO: - will add axios request and response interceptors if required.
 */

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

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
  DELETE: (endPointKey) => {
    return axios.delete(apiEndPoints[endPointKey], {
      headers
    });
  }
};

export default apiHandler;
