import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { store } from 'store';

export default class ShareSpot extends Component {
  constructor(props) {
    super();
    this.state = {
      minutes:null,
      switch: null,
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
  }

  onSubmit(event){
    event.preventDefault();//prevents page from refreshing
    this.props.addShare(this.state);
    this.setState({
      minutes:null,
      switch:null,
    });
  }
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="form-group col-md-6">
              <div className="row mb-1">
                <div className="col-md-12">
                  <label htmlFor="leaving" >Leaving in: </label>
                  <input onChange={this.handleInputChange} type="number" className="minutes" id="minutes" min="0" step="5"/>
                  <select id="metric">
                    <option value="minutes">minutes</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <span className="switch">
                  <input onChange={this.handleInputChange} type="checkbox" className="switch" id="share"/>
                  <label htmlFor="share">Share Location</label>
                </span>
              </div>
              <div className="row mb-1">
                <div className="col-md-4">
                  <button onClick={this.onSubmit} type="button" className="btn btn-primary btn-block" >Share</button>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    )
  }
}