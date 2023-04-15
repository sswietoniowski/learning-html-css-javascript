import axios from 'axios';

let apiUrl = '/api';

if (import.meta.env.VITE_API_URL) {
  apiUrl = `${import.meta.env.VITE_API_URL}/api`;
}

const initializeAxiosDefaults = () => {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.put['Content-Type'] = 'application/json';
};

initializeAxiosDefaults();
