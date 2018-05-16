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


      <div className="card">
        <div className="card-header">
          Find A Spot
          <button type="button" className="btn float-right" aria-label="Close" onClick={this.props.onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body">
                <span className="switch">
                  <input type="checkbox" checked={this.props.status} className="switch" onChange={ this.props.joinQueue } id="looking"/>
                  <label htmlFor="looking">{this.props.status ? 'Searching for a spot' : '' }</label>
                </span>


                <h4 className="text-muted">{this.props.status ? 'Approximate waiting time' : '' }</h4>

        </div>
      </div>

    );
  }
}
