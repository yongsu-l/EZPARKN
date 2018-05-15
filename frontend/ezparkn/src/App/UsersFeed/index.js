import React, { Component } from "react";
import SingleUser from './SingleUser';
import './style.css';
// import getProfile from 'lib/getProfile';
import * as moment from 'moment';
import { getUsers } from './test.js';
export default class UsersFeed extends Component {
  
  render() {
    // Actual
    // let Users = this.props.feed.map( (user) => {
    //   // TODO: Need to make sure firstname attribute from Users table is put into 'user' object
    //   return(
    //     <SingleUser name={user.firstname} size={user.car.size} leavingIn={moment(user.leavingTime).format('hh:mm a')} parkedTime={moment(user.parkedTime).format('hh:mm a')}/>
    //   );
    // });

    // TEST
    let Users = getUsers().map( (user) => {

      return(
        <SingleUser name={user.firstname} size={user.car.size} leavingIn={moment(user.leavingTime).format('hh:mm a')} parkedTime={moment(user.parkedTime).format('hh:mm a')}/>
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
