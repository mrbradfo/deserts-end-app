import axios from 'axios';
import { Role, Volunteer } from './types';

const baseURL = process.env.REACT_APP_API_ENDPOINT;
console.log('REACT_APP_API_ENDPOINT:', baseURL);

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axios.create({});

// Make requests using the configured Axios instance
export const getVolunteers = async (): Promise<Volunteer[]> => {
  return api
    .get('/volunteers')
    .then((response) => {
      const volunteers = response.data;
      return volunteers;
    })
    .catch((error) => {
      console.error('Error retrieving volunteers:', error);
    });
};

export const getRoles = async (): Promise<Role[]> => {
  return api
    .get('/roles')
    .then((response) => {
      const roles = response.data;
      return roles;
    })
    .catch((error) => {
      console.error('Error retrieving roles:', error);
    });
};
