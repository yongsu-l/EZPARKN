// src/lib/postLogin.js

import axios from 'axios';
import {URL, API, LOGIN, USER, CREATE} from '../urls/API';
import { store } from '../store';
import { setToken } from '../actions';

function postLogin(body){
  return axios({
    method:'post',
    url: API + USER + LOGIN,
    headers:{
      "Content-Type": "application/json",
    },
    data: body
  }).then(function (response) {
      const token = response.data.token;
      store.dispatch(setToken(token));
    })
    .catch((error) => {
      console.log(error);
    });
}

export default postLogin;
