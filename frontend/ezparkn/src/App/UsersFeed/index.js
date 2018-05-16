import React, { Component } from "react";
import SingleUser from './SingleUser';
import './style.css';
// import getProfile from 'lib/getProfile';
import * as moment from 'moment';
import { getUsers } from './test.js';
export default class UsersFeed extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    // TEST
    let Users = this.props.feed.sort((spotA, spotB) => {
                      return (spotA.leavingTime < spotB.leavingTime)
                  }).map( (parking,index) => {
    
      return(
        <SingleUser key={index} parkingId={parking.id} name={parking.user ? parking.user.firstname?parking.user.firstname:"Anonymous":"Anonymous"} size={parking.user ? parking.user.car ? parking.user.car.size ? parking.user.car.size:"Vehicle":"Vehicle":"Vehicle"} leavingIn={moment(parking.leavingTime).format('hh:mm a')} parkedTime={moment(parking.parkedTime).format('hh:mm a')}/>
      );
    });
    //

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (


     <div className="card">
        <div className="card-header">
          Feed
          <button type="button" className="btn float-right" aria-label="Close" onClick={this.props.onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
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
