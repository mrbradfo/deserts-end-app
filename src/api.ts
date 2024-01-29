import axios from 'axios';

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

export const get = async <T>(path: string, id: number): Promise<T> => {
  console.log('get:', path, id);
  return api
    .get(`${path}/${id}`)
    .then((response) => {
      const { data } = JSON.parse(JSON.stringify(response));
      return data;
    })
    .catch((error) => {
      console.error(`Error retrieving ${path}:`, error);
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
