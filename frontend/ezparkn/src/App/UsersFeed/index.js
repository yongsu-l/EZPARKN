import React, { Component } from "react";
import 'style.css';

export default class UsersFeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="form-group row USERS_LEAVING">
        <div className="col-md-12">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="user">
                <div className="pr-20">
                  <a className="avatar avatar-leaving">
                    <img className="img-fluid" src="../../../img/champagne_papi.png"/>
                    <i></i>
                  </a>
                </div>
                <div className="user-body">
                  <p className="h5">Drake <span> Leaving in 10 min</span></p>
                  <small>Range Rover</small>
                </div>
                <div className="pl-20">
                  <button className="btn btn-primary">Get</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}