import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { store } from 'store';

export default class Profile extends Component {
  constructor(props) {
    super(props);
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
              <p className="h3">{store.getState().profile.firstname ? store.getState().profile.firstname : "UPDATE NAME"}</p>
              <p className="text-muted">General information</p>
            </div>
            <div className="form-group col-md-6">
              <div className="row mb-1">
                <div className="col-md-12">
                  <label htmlFor="email">Email address</label>
                  <input type="text" id="email" className="form-control" value={store.getState().profile.email}/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="car">Make</label>
                  <input type="text" id="car" className="form-control" value="Land Rover"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="model">Model</label>
                  <input type="text" id="model" className="form-control" value="Range Rover"/>
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-md-4">
                  <button type="button" className="btn btn-primary btn-block">Save</button>
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
