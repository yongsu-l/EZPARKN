import React from 'react';
import './style.css';

export default class ParkingForm extends React.Component {

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
                  <input type="checkbox" checked={this.props.status} className="switch" onChange={ this.props.joinQueue } id="looking"/>
                  <label htmlFor="looking">{this.props.status ? 'Searching for a spot' : '' }</label>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-muted">{this.props.status ? 'Approximate waiting time' : '' }</h4>
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
