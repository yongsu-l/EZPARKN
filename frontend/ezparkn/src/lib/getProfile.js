// src/lib/getProfile.js

import {URL, API, USER, PROFILE} from 'urls/API';
import { store } from 'store';
// TODO: error regarding body of request.. needs to be addressed
function getProfile(body){
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

export default getProfile;
