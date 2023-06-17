import axios from 'axios';
import { Role, User, Volunteer } from './types';

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

export const addVolunteer = async (
  volunteer: Volunteer,
): Promise<Volunteer> => {
  return api
    .post('/volunteers', volunteer)
    .then((response) => {
      const addedVolunteer = response.data;
      return addedVolunteer;
    })
    .catch((error) => {
      console.error('Error adding volunteer:', error);
    });
};

export const addUser = async (user: User): Promise<User> => {
  return api
    .post('/users', user)
    .then((response) => {
      const addedUser = response.data;
      return addedUser;
    })
    .catch((error) => {
      console.error('Error adding user:', error);
    });
};
