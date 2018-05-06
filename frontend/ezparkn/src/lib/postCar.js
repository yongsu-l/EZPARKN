// src/lib/postCar.js

import {URL, API, CAR, USER, CREATE} from 'urls/API';
import { store } from 'store';
function postCar(body){
  return (
    fetch(API+CAR+CREATE, {
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

export default postCar;
