import { combineReducers } from 'redux';
import {
  GET_USER,
  ADD_USER,
  UPDATE_USER
} from '../actions';

const userReducer = (user = {}, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload.data;
    case ADD_USER:
      return action.payload.data;
    case UPDATE_USER:
      return action.payload.data;
    default: 
      return user;
  }
};

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;