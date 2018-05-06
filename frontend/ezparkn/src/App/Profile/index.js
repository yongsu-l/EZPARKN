import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { store } from 'store';
import { setProfile } from 'actions';
import putProfile from 'lib/putProfile';
import putCar from 'lib/putCar';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: store.getState().profile.firstname,
      lastname: store.getState().profile.lastname,
      email: store.getState().profile.email,
      car:{
        model: store.getState().profile.car.model,
        color: store.getState().profile.car.color,
        size: store.getState().profile.car.size,
        make: store.getState().profile.car.make
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    let car = Object.assign({}, this.state.car);    //creating copy of object
    switch (id){
      case "model":
        car.model = event.target.value;
        this.setState({car});
        break;
      case "color":
        car.color = event.target.value;
        this.setState({car});
        break;
      case "size":
        car.size = event.target.value;
        this.setState({car});
        break;
      case "make":
        car.make = event.target.value;
        this.setState({car});
        break;
      default:
        this.setState(
          {[id]: event.target.value}
        );
    }
  };
  updateProfile = () => {
    // Using API gives us no token error...
    putProfile(this.state).then(response =>{
      console.log(response);
    });
    putCar(this.state.car).then(response =>{
      console.log(response);
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
              <input type="text" id="firstname" className="form-control" onChange={ this.handleChange } value={this.state.firstname}/>
              <label htmlFor="last">Last Name</label>
              <input type="text" id="lastname" className="form-control" onChange={ this.handleChange } value={this.state.lastname}/>
            </div>
            <div className="form-group col-md-6">
              <div className="row mb-1">
                <div className="col-md-12">
                  <label htmlFor="email">Email address</label>
                  <input type="text" id="email" className="form-control" onChange={ this.handleChange } value={this.state.email}/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="make">Make</label>
                  <input type="text" id="make" className="form-control" onChange={ this.handleChange } value={this.state.car.make}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="model">Model</label>
                  <input type="text" id="model" className="form-control" onChange={ this.handleChange } value= {this.state.car.model}/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="car">Color</label>
                  <input type="text" id="color" className="form-control" onChange={ this.handleChange } value={this.state.car.color}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="size">Size</label>
                  <input type="text" id="size" className="form-control" onChange={ this.handleChange } value= {this.state.car.size}/>
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
