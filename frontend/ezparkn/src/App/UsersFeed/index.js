import React, { Component } from "react";
import SingleUser from './SingleUser';
import './style.css';
import getProfile from 'lib/getProfile';
import * as moment from 'moment';
export default class UsersFeed extends Component {
  constructor() {
    super();
  }

  render() {
    let Users = this.props.feed.map( (user) => {
      // TODO: need to get user name based off of userId attribute coming from parkingSpots state
      // getProfile({id: user.userId}).then(response =>{
      //   console.log(response);
        
      // }).catch(reason =>{
      //   console.log(reason);
        
      // });
      return(
        <SingleUser name={user.firstname} leavingIn={moment(user.leavingTime).format('hh:mm a')} parkedTime={moment(user.parkedTime).format('hh:mm a')}/>
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
