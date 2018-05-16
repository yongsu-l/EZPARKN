import React, {Component} from 'react';
import * as moment from 'moment';
import './style.css';
import { iAmParking } from '../SocketIO/index';
import { store } from 'store';
export default class SingleUser extends Component {
  constructor() {
    super();
  }
  takeSpot = (e) => {
    e.preventDefault();
    iAmParking(store.getState().token, this.props.parkingId,(err , parkingSpots)=>{
      if(err)
        console.log(err)
      else {
        alert("Parked, Thank you!")
        // this.setState({parkingSpots:parkingSpots});  
        // console.log(moment(parkingSpots[1].leavingTime).format()) 
      }
    });
  } 

  render() {
    console.log(moment(this.props.leavingIn, 'hh:mm:ss a'));
    console.log()
    return(
      <li className="list-group-item">
        <div className="user">
          <div className="pr-20"
            <a className={"avatar " + ((moment(new Date(), 'hh:mm:ss a')).diff(moment(this.props.leavingIn, 'hh:mm:ss a'), 'minutes') < -30 ? 'avatar-parked': 'avatar-leaving')}>
              <img className="img-fluid" alt="" src="../../../img/champagne_papi.png"/>
              <i></i>
            </a>
          </div>
          <div className="user-body">
            <p className="h6" style={{color:'black'}}>{this.props.name} <span> is leaving at {this.props.leavingIn}</span></p>
            <p className="text-muted"> { this.props.size } <small>parked at {this.props.parkedTime}</small></p>            
          </div>
          {
            ((moment(new Date(), 'hh:mm:ss a').diff(moment(this.props.leavingIn, 'hh:mm:ss a'), 'minutes')) > 0 ? true:false) &&
            <button id = 'take'className="btn btn-raised" onClick={ this.takeSpot } >Take Spot</button>
          }
        </div>
      </li>
    )
  }
}