import React, { Component } from 'react';

import {
  Button,
  Container,
  Title

} from './styled';

class Splash extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Container>
        <Title> EZPARKN </Title>
          <div>
            <label for="email">Email:</label>
            <input type="text" className="form-control" placeholder="Email" id="email"/>
            <br></br>
            <label for="password">Password:</label>
            <input type="text" className="form-control" placeholder="Password" id="password"/>
            <br></br>
            <br></br>
            <Button small>Sign In</Button>
            <br></br>
            <p> Don't have an account? Sign up </p>
          </div>
      </Container>

        );
  }
}

export default Splash;