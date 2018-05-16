import {API, CAR, CREATE} from 'urls/API';
import { store } from 'store';
function putCar(body){
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

export default putCar;
