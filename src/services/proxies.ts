import axios from 'axios';

/**
 * Use this on calls that require auth. Add the ENV var REACT_APP_SITE_ENV to you local env file.
 * @param token
 */
export const getHeaders = (token: string) => {
  return process.env.REACT_APP_SITE_ENV === 'dev'
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    : {
        'Content-Type': 'application/json',
      };
};

export const worldProxy = axios.create({
  baseURL: (process.env.REACT_APP_WORLD_API_URL || 'https://api.vvaworld.com') + '/worldapi',
  timeout: parseInt(process.env.REACT_APP_REQUEST_TIMEOUT || '0', 10),
  headers: { 'Content-Type': 'application/json' }
});
