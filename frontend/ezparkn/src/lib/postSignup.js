// src/lib/postSignup.js

import {URL, API, LOGIN, USER, CREATE} from 'urls/API';

function postSignup(body) {

  return (
    fetch(API+USER+CREATE, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  );
}

export default postSignup;
