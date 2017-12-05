import axios from 'axios';

export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const VERIFY_USER = 'VERIFY_USER';

export const getUser = (username) => {
  const user = axios.get(`http://localhost:3030/users/${username}`);
  return {
    type: GET_USER,
    payload: user
  };
};

export const verifyUser = (usr, pass) => {
  usr.preventDefault();
  const user = {username: usr, password: pass};
  const activeUser = axios.post('http://localhost:3030/login', user);
  return{
    type: VERIFY_USER,
    payload: activeUser
  };
};
