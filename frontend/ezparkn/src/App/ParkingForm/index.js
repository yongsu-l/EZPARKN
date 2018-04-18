import React from 'react';
import './style.css';

export default class ParkingForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="card">
          <div className="card-body">
            <div className="row mb-1">
              <div className="col-12">
                <p className="h3">Find a spot</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 input-group">
                <span className="switch">
                  <input type="checkbox" className="switch" id="looking"/>
                  <label htmlFor="looking">Looking for a spot</label>
                </span>
              </div>
            </div>
            <div className="form-group row USERS_LEAVING">
              <div className="col-md-12">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="user">
                      <div className="pr-20">
                        <a className="avatar">
                          <img className="img-fluid" src="../../../img/champagne_papi.png"/>
                        </a>
                      </div>
                      <div className="user-body">
                        <p className="h5">Drake <span> Leaving in 10 min</span></p>
                        <small>Range Rover</small>
                      </div>
                      <div className="pl-20">

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row"> 
              <div className="col-md-3 col-lg-2 col-xl-1"> 
                <button onClick={this.props.onClose} className="btn btn-primary">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
