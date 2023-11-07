import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status >= 400 && status < 500) {
        const url = error.config.url;
        if (url === '/email/check') {
          return Promise.resolve(error);
        }
      }
      if (status === 401) {
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  },
);
