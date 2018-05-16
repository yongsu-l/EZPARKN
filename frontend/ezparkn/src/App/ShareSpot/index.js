import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { store } from 'store';

export default class ShareSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes:5,
      share: false,
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const id = target.id;
      this.setState({
          [id]: value
      });
      this.props.getCurrentLocation(!this.state.share)
  }

  onSubmit(event){
    event.preventDefault();//prevents page from refreshing
    this.props.addShare(this.state);
    this.setState({
      minutes:5,
    });
  }
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (


       <div className="card">
        <div className="card-header">
          Share Spot
          <button type="button" className="btn float-right" aria-label="Close" onClick={this.props.onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body">
                <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="leaving" >Leaving in: </label>
              <input onChange={this.handleInputChange} type="number" className="minutes form-control" value={this.state.minutes} id="minutes" min="0" step="5"/>
              <select id="metric" className="form-control">
                <option value="minutes">minutes</option>
              </select>
            </div>
              <span className="switch">
                <input onChange={this.handleInputChange} type="checkbox" checked={this.state.share} className="switch" id="share"/>
                <label htmlFor="share">Share Location</label>
              </span>
            <div className="form-group col-md-3">
              <button onClick={this.onSubmit} type="button" disabled={!this.props.checkedLocation} className="btn btn-primary btn-block" >Share</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}