import axios from 'axios';
import { Volunteer } from './types';

// Read the API_ENDPOINT environment variable
// load .env file
// read API_ENDPOINT from .env file
const endpoint = process.env.API_ENDPOINT;
console.log('API_ENDPOINT:', endpoint);

const api = axios.create({
  baseURL: 'http://localhost:4545',
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
