import React, { Component } from 'react';
import {register} from '../../utils/Users';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
    this.register = this.register.bind(this);
  }
  handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    this.setState({
      [id]: event.target.value
    });
  };
  register = () => {
    // Handle click event
    // TODO: Send request to backend
    //console.log(this.state);
    register(this.username, this.password, this.email);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-6 col-md-4 offset-sm-3 offset-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h2">Sign up</p>
                <p className="text-muted">Create your account below.</p>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input type="username" className="form-control" id="username" onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input type="email" className="form-control" id="email" onChange={ this.handleChange }/>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" onChange={ this.handleChange }/>
                </div>
                <div class="form-group">
                  <label for="confirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" onChange={ this.handleChange }/>
                </div>
                <button class="btn btn-raised btn-primary" onClick={ this.register }>Submit</button>
              </div>
              <div class="p-4 card-footer">
                <div class="row">
                  <div class="col-12 col-sm-6 offset-sm-3">
                    <p className="text-center text-muted">Sign in with your Google account.</p>
                    <button className="btn btn-secondary btn-block">
                      <span>Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
