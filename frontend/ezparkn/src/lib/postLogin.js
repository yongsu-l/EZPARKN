// src/lib/postLogin.js

import {URL, API, LOGIN, USER, CREATE} from 'urls/API';
import getProfile from 'lib/getProfile';

function postLogin(body){
  return (
    fetch(API+USER+LOGIN, {
      method: 'POST',
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
