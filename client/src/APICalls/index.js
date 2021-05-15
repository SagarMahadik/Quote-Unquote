import axios from 'axios';

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASEURL}` });

console.log('in axios index');
API.interceptors.request.use(req => {
  req.headers.authorization = `Bearer ${localStorage.token}`;

  return req;
});

export { API };
