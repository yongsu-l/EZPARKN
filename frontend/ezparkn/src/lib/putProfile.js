// src/lib/putProfile.js

import {URL, API, USER, PROFILE} from 'urls/API';
import { store } from 'store';
function putProfile(body){
  return (
    fetch(API+USER+PROFILE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': store.getState().token
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  );
}

export default putProfile;
