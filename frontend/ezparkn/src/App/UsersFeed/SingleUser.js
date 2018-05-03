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
            <p className="h5">{this.props.name} <span> Leaving in {this.props.leavingIn}</span></p>
            <small>Some car</small>
          </div>
        </div>
      </li>
    )
  }
}