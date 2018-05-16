import React from 'react';
// import React, { Component } from 'react';
// import { FormGroup } from 'react-bootstrap';
import postLogin from 'lib/postLogin';
import { Redirect } from 'react-router';
import { store } from 'store';
import { setToken, setProfile } from 'actions';

import {
  Button,
  Container,
  Box,
  Box2,
  LeftSide,
  RightSide,
  Logo,
  Input
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

  onLogin = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    postLogin({
      username,
      password
    }).then(json => {
      if (json && json.success) {
        store.dispatch(setToken(json.token));
        console.log(json);
        store.dispatch(setProfile(json.profile));
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
      return <Redirect to="/main"/>;
    }
    return (
      <Container>
        <Box>
          <Box2>
            <Logo src= './img/logo.png' />
            <form onSubmit = { this.onLogin }>
            <div className="form-group">
                <LeftSide>
                  <label htmlFor="username">Username</label>
                </LeftSide>
                <RightSide>
                  <Input 
                    type="username" 
                    className="form-control" 
                    id="username" 
                    onChange={ this.onChange }
                  />
                </RightSide>
              </div>

              <div className="form-group">
                <LeftSide>
                  <label htmlFor="password">Password</label>
                </LeftSide>
                <RightSide>
                  <Input 
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
              <Button small onSubmit={ this.onLogin } >Log In</Button>
            </form>
            <p className="text-center text-muted" > Don't have an account? <a href="/signup">Sign Up</a></p>
            </Box2>
          </Box>
      </Container>
        );
  }
}

export default Splash;
