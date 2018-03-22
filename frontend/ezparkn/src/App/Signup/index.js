import React, { Component } from 'react';
import { register } from '../../utils/Users';
import { Redirect } from 'react-router';
import FormValidator from './FormValidator';
import './Signup.css'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      errors: {
        username:'',
        email: '',
        password:'',
        confirmPassword:''
      },
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      formValid: false,
      redirectToNewPage: false
    }
    this.register = this.register.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    this.setState(
      {[id]: event.target.value},
      () =>{
        this.validateFormField(id,target.value) // 2nd param is a void callback fired on setState
      }
    
    );
  };
  validateFormField = (formId,value) => { 
    let formControlErrors = this.state.errors;
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;
    // Switch to handle the four input fields
    switch (formId) {
      case 'username':
        // Username needs to be at least 5 characters
        formControlErrors.username = value.length >= 5 ? '' : 'username';
        if (formControlErrors.username) {
          usernameValid = false;
        } else {
          usernameValid = true;
        }
        break;
      case 'email':
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        formControlErrors.email = (regExp.test(value)) ? '' : 'email';
        if (formControlErrors.email) {
          emailValid = false;
        } else {
          emailValid = true;
        }
        break;
      case 'password':
        // Needs at least a lowercase, uppercase, and a number, and between 8 and 40 chars
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d]).{8,40}$/);
        formControlErrors.password = (regExp.test(value)) ? '' : 'password';
        if (formControlErrors.password) {
          passwordValid = false;
        } else {
          passwordValid = true;
        }    
        break;
      case 'confirmPassword':
        // They match?
        formControlErrors.confirmPassword = (this.state.password === this.state.confirmPassword) ? '' : 'confirmPassword';    
        if (formControlErrors.confirmPassword) {
          confirmPasswordValid = false;
        } else {
          confirmPasswordValid = true;
        }       
        break;
      default:
        break;
    }
    // Set the new state
    this.setState(
      {
        errors: formControlErrors,
        usernameValid: usernameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmPasswordValid: confirmPasswordValid
      }, 
      this.validateForm);
  }
  validateForm = () => {
    this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid});
  }
  register = () => {
    register(this.state.username, this.state.password, this.state.email).then(response => 
        this.setState({redirectToNewPage: true}));
  };
  hasError = (field) =>{
    return(field.length === 0 ? '' : 'is-invalid');
  }
  render() {
    if(this.state.redirectToNewPage) {
      return <Redirect to="/splash"/>;
    }
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-sm-6 col-md-4 offset-md-4 offset-sm-3 ">
            <div className="card">
              <div className="card-body">
                <p className="h2">Sign up</p>
                <p className="text-muted">Create your account below.</p>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="username" className={`form-control ${this.hasError(this.state.errors.username)}`} id="username" onChange={ this.handleChange }/>
                  <FormValidator field={this.state.errors.username} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className={`form-control ${this.hasError(this.state.errors.email)}`} id="email" onChange={ this.handleChange }/>
                  <FormValidator field={this.state.errors.email} />
                </div>
                <div class="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className={`form-control ${this.hasError(this.state.errors.password)}`} id="password" onChange={ this.handleChange }/>
                  <FormValidator field={this.state.errors.password} />
                </div>
                <div class="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" className={`form-control ${this.hasError(this.state.errors.confirmPassword)}`} id="confirmPassword" onChange={ this.handleChange }/>
                  <FormValidator field={this.state.errors.confirmPassword} />                  
                </div>
                <button class="btn btn-raised btn-primary" onClick={ this.register } disabled={!this.state.formValid} >Submit</button>
              </div>
              <div class="p-3 card-footer">
                <div class="row">
                  <div class="col-12">
                    <p className="text-center text-muted">Already have an account? <a href="/splash">Sign in</a></p>
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
