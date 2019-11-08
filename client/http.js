import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: '/api',
    timeout: 5000,
    // headers: {
    //   Authorization: `Bearer ${state.authentication.token}`,
    // },
  });
};
