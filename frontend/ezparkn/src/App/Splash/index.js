import React, { Component } from 'react';
import {FormGroup} from 'react-bootstrap';

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
  constructor(props){
    super(props);
    this.state={
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    const { errors, identifier, password, isLoading} = this.state;
    return (
      <Container>
        <Box>
          <Box2>
            <form onSubmit={this.onSubmit}>
            <Title> EZPARKN </Title>
              <div className="form-group">
                <LeftSide>
                  <label for="email">Email</label>
                </LeftSide>
                <RightSide>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
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
              <div className="form-group"><a href="/Location" className="btn btn-primary btn-lg" href="/Location" disabled={isLoading}>Login</a></div>

              <p> Don't have an account? <a href="/signup">Sign Up</a></p>
            </form>
            </Box2>
          </Box>
      </Container>
      

        );
  }
}

export default Splash;