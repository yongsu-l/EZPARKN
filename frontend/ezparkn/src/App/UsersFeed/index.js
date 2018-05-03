import React, { Component } from "react";
import SingleUser from './SingleUser';
import './style.css';

export default class UsersFeed extends Component {
  constructor() {
    super();
  }

  render() {
    let Users = this.props.feed.map( (user) => {
      return(
        <SingleUser name={user.name} leavingIn={user.leavingIn}/>
      );
    });
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="card">
        <div className="card-body">
          <div className="form-group row USERS_LEAVING">
            <div className="col-md-12">
              <ul className="list-group">{Users}</ul>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
