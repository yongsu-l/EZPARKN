// src/actions/index.js

import * as actionType from './types';

export const setToken = (data) => {
  return {
    type: actionType.SET_TOKEN,
    data
  };
};

export const setUser = (data) => {
  return {
    type: actionType.SET_USER,
    data
  };
};

export const setProfile = (data) => {
  return {
    type: actionType.SET_PROFILE,
    data
  };
};
