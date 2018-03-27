// src/utils/Users.js

import axios from 'axios'
import {URL, API, LOGIN, USER, CREATE} from '../urls/API'
import { store } from '../store';
import { setToken } from '../actions';

export function register(Username, Password, Email) {

  return axios({
    method: 'post',
    url: API + USER + CREATE,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      username: Username,
      password: Password,
      email: Email,
    }
  })
    .then(function (response) {
      console.log(response.data)
    })
    .catch((error) => {
      if(error.request.status === 500) {
        alert("Username already exists")
      } else {
        console.log(error);
        alert(error)
      }
    })
}

export function login(Username, Password){
  return axios({
    method:'post',
    url: API + USER + LOGIN,
    headers:{
      "Content-Type": "application/json",
    },
    data: {
      username: Username,
      password: Password,
    }
  })
    .then(function (response) {
      const token = response.data.token;
      store.dispatch(setToken(token));
    })
    .catch((error) => {
      if(error.request.status === 500) {
        alert("Username already exists")
      } else {
        console.log(error);
        alert(error)
      }
    })
}
