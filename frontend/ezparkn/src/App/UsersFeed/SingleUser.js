import React, {Component} from 'react';
import * as moment from 'moment';
export default class SingleUser extends Component {

  render() {
    console.log(moment(this.props.leavingIn, 'hh:mm:ss a'));
    console.log()
    return(
      <li className="list-group-item">
        <div className="user">
          <div className="pr-20">
            <a className={"avatar " + ((moment(new Date(), 'hh:mm:ss a')).diff(moment(this.props.parkedTime, 'hh:mm:ss a'), 'minutes') > 30 ? 'avatar-parked': 'avatar-leaving')}>
              <img className="img-fluid" alt="" src="../../../img/champagne_papi.png"/>
              <i></i>
            </a>
          </div>
          <div className="user-body">
            <p className="h6">{this.props.name} <span> is leaving at {this.props.leavingIn}</span></p>
            <p className="text-muted"> { this.props.size } <small>parked at {this.props.parkedTime}</small></p>            
          </div>
        </div>
      </li>
    )
  }
}