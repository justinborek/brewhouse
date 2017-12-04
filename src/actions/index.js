import { axios } from 'axios';

export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const getUser = (username) => {
  const users = axios.get('http://localhost:3030/users');
  return {
    type: GET_USER,
    payload: users
  };
};