import axios from 'axios';

//Register user
export function register(username, password, email) {
  return axios({
    method: 'post',
    url: 'localhost:3001/user/create',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      username: username,
      password: password,
      email: email
    }
  }).then(function(response) {
    console.log(response.data);
    alert('Registering user')
  }).catch((err) => {
    alert(err);
  })
}
