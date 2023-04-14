import axios from 'axios';

export let apiUrl = 'api';

if (import.meta.env.VITE_API_URL) {
  apiUrl = `${import.meta.env.VITE_API_URL}/api`;
}

export const initializeAxiosDefaults = () => {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.put['Content-Type'] = 'application/json';
};

export default initializeAxiosDefaults;
