import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import postLogin from 'lib/postLogin';
import { Redirect } from 'react-router';
import { store } from 'store';
import { setToken } from 'actions';

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
      username: '',
      password: '',
      isLoading: false,
      redirectToNewPage: false
    };

    this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLogin(e) {
    e.preventDefault;
    const username = this.state.username;
    const password = this.state.password;

    postLogin({
      username,
      password
    }).then(json => {
      if (json && json.success) {
        store.dispatch(setToken(json.token));
        this.setState({redirectToNewPage: true});
      } else {
        alert(json.msg);
      }
      console.log(json);
    });
  } 

  onChange = (event) => {
    const target = event.target;
    const id = target.id;
    this.setState({
      [id]: event.target.value
    });
  };

  render(){
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
              <button class="btn btn-raised btn-primary" onClick={ this.onLogin } >Log In</button>
              
              <p> Don't have an account? <a href="/signup">Sign Up</a></p>
            </Box2>
          </Box>
      </Container>
        );
  }
}

export default Splash;
