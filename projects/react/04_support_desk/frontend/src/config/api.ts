let apiUrl = 'api';

if (import.meta.env.VITE_API_URL) {
  apiUrl = `${import.meta.env.VITE_API_URL}/api`;
}

export default apiUrl;
