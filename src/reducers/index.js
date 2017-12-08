import { combineReducers } from 'redux';
import {
  ADD_USER,
  UPDATE_USER,
  VERIFY_USER
} from '../actions';

const userReducer = (user = {}, action) => {
  switch(action.type) {
    case ADD_USER:
      return action.payload.data;
    case UPDATE_USER:
      return action.payload.data;
    case VERIFY_USER:
      return action.payload.data;
    default: 
      return user;
  }
};

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;