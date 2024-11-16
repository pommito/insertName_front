import axios from 'axios';

export const getCSRFToken = async () => {
  axios.defaults.withCredentials = true;
  try {
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {});
  } catch (error) {
    console.error('Failed to get CSRF token:', error);
    throw new Error('CSRF token fetch failed');
  }
};
