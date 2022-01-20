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
        'X-IG-ExtToken': `${token}`,
        'X-IG-SiteId': process.env.REACT_APP_SITE_ID || ''
      };
};

export const sportProxy = axios.create({
  baseURL: (process.env.REACT_APP_SPORTS_API_URL || '') + '/sportsapi',
  timeout: parseInt(process.env.REACT_APP_REQUEST_TIMEOUT || '0', 10),
  headers: { 'Content-Type': 'application/json' }
});
