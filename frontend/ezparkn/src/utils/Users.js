import axios from 'axios';

//Register user
//Register user
export function register(Username, Password, Email) {

    return axios({
        method: 'post',
        url: 'http://localhost:3001/user/create',
        headers: {
            "Content-Type": "application/json",
        },
        data: {
          username: Username,
          password: Password,
          email: Email,
          }
        })
        .then(function (response) {
            console.log(response.data)
            alert("Sending request to admin")
        })
        .catch((error) => {
            if(error.request.status === 500) {
                alert("Username already exists")
            } else {
              console.log(error);
                alert(error)
            }
        })
}
