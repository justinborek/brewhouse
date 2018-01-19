import axios from 'axios';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const VERIFY_USER = 'VERIFY_USER';
export const GET_USER = 'GET_USER';

export const verifyUser = (usr, pass) => {
  const user = {username: usr, password: pass};
  const activeUser = axios.post('https://brewhouse-backend.herokuapp.com/login', user);
  return{
    type: VERIFY_USER,
    payload: activeUser
  };
};

export const addUser = (user) => {
  axios.post('https://brewhouse-backend.herokuapp.com/new-user', user);
  return{
    type: ADD_USER
  };
};

export const getUser = (username) => {
  const user = axios.get(`https://brewhouse-backend.herokuapp.com/${username}`);
  return{
    type: GET_USER,
    payload: user
  }
}

export const updateUser = (user) => {
  const updatedUser = axios.put(`https://brewhouse-backend.herokuapp.com/users/${user.username}`, user)
  return {
    type: UPDATE_USER,
    payload: updatedUser
  };
}

