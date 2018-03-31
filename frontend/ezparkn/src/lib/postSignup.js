// src/lib/postSignup.js

import axios from 'axios';
import {URL, API, LOGIN, USER, CREATE} from 'urls/API';
import { store } from 'store';
import { setToken } from 'actions';

function postSignup(body) {

  return axios({
    method: 'post',
    url: API + USER + CREATE,
    headers: {
      "Content-Type": "application/json",
    },
    data: body
  }).then(function (response) {
      console.log(response.data);
    })
    .catch((error) => {
      if(error.request.status === 500) {
        alert("Username already exists");
      } else {
        console.log(error);
        alert(error);
      }
    });
}

export default postSignup;
