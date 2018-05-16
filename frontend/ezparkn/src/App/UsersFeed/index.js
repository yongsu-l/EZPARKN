import React, { Component } from "react";
import SingleUser from './SingleUser';
import './style.css';
import getProfile from 'lib/getProfile';
import * as moment from 'moment';
import { getUsers } from './test.js';
export default class UsersFeed extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // TEST
    let Users = this.props.feed.map( (user,index) => {

      return(
        <SingleUser key={index} name={user.user.firstname ? user.user.firstname:"Anonymous"} size={user.user.car ? user.user.car.size?user.user.car.size:"Vehicle":"Vehicle"} leavingIn={moment(user.leavingTime).format('hh:mm a')} parkedTime={moment(user.parkedTime).format('hh:mm a')}/>
      );
    });
    //

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
