import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use(req => {
  req.headers.authorization = `Bearer ${localStorage.token}`;

  return req;
});

export { API };
