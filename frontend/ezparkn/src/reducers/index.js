// src/reducers/index.js

import { combineReducers } from 'redux';
import * as actionType from 'actions/types';

const tokenInitialState = null;
const token = (state = tokenInitialState, action) => {
  switch(action.type) {
    case actionType.SET_TOKEN:
      return action.data;
    default:
      return state;
  };
};

const userInitialState = {};
const user = (state = userInitialState, action) => {
  switch(action.type) {
    case actionType.SET_USER:
      return action.data;
    default:
      return state;
  };
};

const profileInitialState = {};
const profile = (state = profileInitialState, action) => {
  switch(action.type) {
    case actionType.SET_PROFILE:
      return action.data;
    default:
      return state;
  };
};

const appReducer = combineReducers({
  token, profile, user,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
