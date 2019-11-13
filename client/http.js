/* eslint-disable arrow-body-style */
import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: '/api',
    timeout: 5000,
  });
};
