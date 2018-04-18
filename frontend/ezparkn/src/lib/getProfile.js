// src/lib/getProfile.js

import {URL, API, USER, PROFILE} from 'urls/API';
import { store } from 'store';

function postLogin(body){
  return (
    fetch(API+USER+PROFILE, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  );
}

export default postLogin;
