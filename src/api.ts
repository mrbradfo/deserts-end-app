import axios from 'axios';
import { Plan, User, Assignment, Team } from './types';

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

export const getPlans = async (): Promise<Plan[]> => {
  return api
    .get('/plans')
    .then((response) => {
      const plans = response.data;
      return plans;
    })
    .catch((error) => {
      console.error('Error retrieving plans:', error);
    });
};

export const addPlan = async (plan: Plan): Promise<Plan> => {
  return api
    .post('/plans', plan)
    .then((response) => {
      const addedPlan = response.data;
      return addedPlan;
    })
    .catch((error) => {
      console.error('Error adding plan:', error);
    });
};

export const getTeams = async (): Promise<Team[]> => {
  return api
    .get('/teams')
    .then((response) => {
      const teams = response.data;
      return teams;
    })
    .catch((error) => {
      console.error('Error retrieving teams:', error);
    });
};

export const addTeam = async (team: Team): Promise<Team> => {
  return api
    .post('/teams', team)
    .then((response) => {
      const addedTeam = response.data;
      return addedTeam;
    })
    .catch((error) => {
      console.error('Error adding team:', error);
    });
};

export const getAssignments = async (): Promise<Assignment[]> => {
  return api
    .get('/assignments')
    .then((response) => {
      const assignments = response.data;
      return assignments;
    })
    .catch((error) => {
      console.error('Error retrieving assignments:', error);
    });
};

export const getUsers = async (): Promise<User[]> => {
  return api
    .get('/users')
    .then((response) => {
      const users = response.data;
      return users;
    })
    .catch((error) => {
      console.error('Error retrieving users:', error);
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

export const getAll = async <T>(path: string): Promise<T[]> => {
  return api
    .get(path)
    .then((response) => {
      const { data } = JSON.parse(JSON.stringify(response));
      return data;
    })
    .catch((error) => {
      console.error(`Error retrieving ${path}:`, error);
    });
};

export const add = async <T>(path: string, data: T): Promise<T> => {
  return api
    .post(path, data)
    .then((response) => {
      const { data: addedData } = response;
      return addedData;
    })
    .catch((error) => {
      console.error(`Error adding ${path}:`, error);
    });
};

export const update = async <T>(path: string, data: T): Promise<T> => {
  return api
    .put(path, data)
    .then((response) => {
      const { data: updatedData } = response;
      return updatedData;
    })
    .catch((error) => {
      console.error(`Error updating ${path}:`, error);
    });
};

export const remove = async <T>(path: string, id: number): Promise<T> => {
  return api
    .delete(`${path}/${id}`)
    .then((response) => {
      const { data: removedData } = response;
      return removedData;
    })
    .catch((error) => {
      console.error(`Error removing ${path}:`, error);
    });
};
