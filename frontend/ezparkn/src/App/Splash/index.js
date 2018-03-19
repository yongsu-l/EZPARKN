import React, { Component } from 'react';
import {FormGroup} from 'react-bootstrap';
import {login} from '../../utils/Users';
import { Redirect } from 'react-router';

import {
  Button,
  Container,
  Title,
  Box,
  Box2,
  LeftSide,
  RightSide

} from './styled';

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.state={
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
      redirectToNewPage: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login = () => {
    console.log(this.state.username)
    console.log(this.state.password)
    login(this.state.username, this.state.password).then(response => 
        this.setState({redirectToNewPage: true}));
  };

  onChange = (event) => {
    const target = event.target;
    const id = target.id;
    this.setState({
      [id]: event.target.value
    });
  };

  render(){
    const { errors, identifier, password, isLoading, redirectToNewPage} = this.state;
    if(this.state.redirectToNewPage) {
      return <Redirect to="/home"/>;
    }
    return (
      <Container>
        <Box>
          <Box2>
            <Title> EZPARKN </Title>
              <div className="form-group">
                <LeftSide>
                  <label for="username">Username</label>
                </LeftSide>
                <RightSide>
                  <input 
                    type="username" 
                    className="form-control" 
                    id="username" 
                    onChange={ this.onChange }
                  />
                </RightSide>
              </div>

              <div class="form-group">
                <LeftSide>
                  <label for="password">Password</label>
                </LeftSide>
                <RightSide>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    onChange={ this.onChange }/>
                </RightSide>
              </div>
              <p></p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <button class="btn btn-raised btn-primary" onClick={ this.login } >Log In</button>

              <p> Don't have an account? <a href="/signup">Sign Up</a></p>
            </Box2>
          </Box>
      </Container>

        );
  }
}

export default Splash;