import axios from 'axios';
import { Volunteer } from './types';

// client to retrieve volunteers from server
export const getVolunteers = async () => {
  const response = await axios.get('/api/volunteers');
  return response.data;
};
