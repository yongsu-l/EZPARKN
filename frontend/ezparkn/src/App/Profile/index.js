import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { store } from 'store';
import { setProfile } from 'actions';
import putProfile from 'lib/putProfile';
import postCar from 'lib/postCar';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: store.getState().profile.id,
      firstname: store.getState().profile.firstname,
      lastname: store.getState().profile.lastname,
      email: store.getState().profile.email,
      car: store.getState().profile.car,
      model: store.getState().profile.model
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    this.setState(
      {[id]: event.target.value}
    );
  };
  updateProfile = () => {
    // Using API gives us no token error...
    putProfile(this.state).then(response =>{
      console.log(response);
    });
    postCar(this.state).then(response =>{
      console.log(response);
    }).catch(reason =>{
      if (reason.status == 403) {
        console.log('token missing');
      } 
      else {
        console.log(reason);
      }     
    });
    store.dispatch(setProfile(this.state));
    // This should work once the token is correctly attached to the PUT request upon firing
  }
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      
      <div className="card" >
        <div className="card-body">
          <div className="row">
            <div className="form-group col-md-3">
              <a className="avatar-lg" href="javascript:void(0)">
                <img src="../../img/champagne_papi.png" />
              </a>
            </div>
            <div className="form-group col-md-3">
              <p className="h5">{store.getState().profile.firstname ? store.getState().profile.firstname : "UPDATE NAME"}</p>
              <p className="text-muted">General information</p>
              <label htmlFor="first">First Name</label>
              <input type="text" id="firstname" className="form-control" onChange={ this.handleChange } value={store.getState().profile.firstname}/>
              <label htmlFor="last">Last Name</label>
              <input type="text" id="lastname" className="form-control" onChange={ this.handleChange } value={store.getState().profile.lastname}/>
            </div>
            <div className="form-group col-md-6">
              <div className="row mb-1">
                <div className="col-md-12">
                  <label htmlFor="email">Email address</label>
                  <input type="text" id="email" className="form-control" onChange={ this.handleChange } value={store.getState().profile.email}/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="car">Make</label>
                  <input type="text" id="car" className="form-control" onChange={ this.handleChange } value={store.getState().profile.car}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="model">Model</label>
                  <input type="text" id="model" className="form-control" onChange={ this.handleChange } value= {store.getState().profile.model}/>
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-md-4">
                  <button type="button" className="btn btn-primary btn-block" onClick={ this.updateProfile }>Save</button>
                </div>
                <div className="col-md-4">
                  <button type="button" className="btn btn-secondary btn-block" onClick={ this.props.onClose }>Cancel</button>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    )
  }
}
