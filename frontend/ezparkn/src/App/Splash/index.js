import React, { Component } from 'react';

import {
  Button,
  Container,
  Title,
  Box,
  Box2,
  LeftSide,
  RightSide

} from './styled';

class Splash extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Container>
        <Box>
          <Box2>
            <Title> EZPARKN </Title>
              <div>
                <div>
                  <LeftSide>
                      <label for="email">Email:</label>
                  </LeftSide>
                  <RightSide>
                      <input type="text" className="form-control" placeholder="Email" id="email"/>
                  </RightSide>
                </div>
                
                <div>
                  <LeftSide>
                      <label for="password">Password:</label>
                  </LeftSide>
                  <RightSide>
                      <input type="text" className="form-control" placeholder="Password" id="password"/>
                  </RightSide>
                </div>

                <br></br>
                <br></br>
              </div>
              <br></br>
              <Button small>Sign In</Button>
                <br></br>
                <p> Don't have an account? Sign up </p>
            </Box2>
          </Box>
      </Container>

        );
  }
}

export default Splash;