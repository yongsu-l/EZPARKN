import React, {Component} from 'react';
export default class SingleUser extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <li className="list-group-item">
        <div className="user">
          <div className="pr-20">
            <a className={"avatar " + (Number(this.props.leavingIn) > 30 ? 'avatar-parked': 'avatar-leaving')}>
              <img className="img-fluid" src="../../../img/champagne_papi.png"/>
              <i></i>
            </a>
          </div>
          <div className="user-body">
            <p className="h6">{this.props.name} <span> Leaving at {this.props.leavingIn}</span></p>
            <p className="text-muted"><small>Parked at {this.props.parkedTime} with some car</small></p>            
          </div>
        </div>
      </li>
    )
  }
}