import axios from 'axios';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const VERIFY_USER = 'VERIFY_USER';
export const GET_USER = 'GET_USER';

export const verifyUser = (usr, pass) => {
  const user = {username: usr, password: pass};
  const activeUser = axios.post('http://localhost:3030/login', user);
  return{
    type: VERIFY_USER,
    payload: activeUser
  };
};

export const addUser = (user) => {
  axios.post('http://localhost:3030/new-user', user);
  return{
    type: ADD_USER
  };
};

export const getUser = (username) => {
  const user = axios.get(`http://localhost:3030/users/${username}`);
  return{
    type: GET_USER,
    payload: user
  }
}

