import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Panel } from 'react-bootstrap';
import Map from '../Map';
import Messages from '../Messages';
import Profile from '../Profile';
import ParkingForm from '../ParkingForm';
import Switch from "react-switch";
import { Button } from 'semantic-ui-react';
import './style.css';
import { store } from 'store';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state ={
      selectValue:'',
      checkedSpot: false,
      checkedLocation: false,
      messages: [],
      newMessageBody: '',
      messageSent: false,
      showParking: false,
      showProfile: false,
    }
  }

  toggleParking = () => {
    this.setState({showParking: !this.state.showParking});
  }

  toggleProfile = () => {
    this.setState({showProfile: !this.state.showProfile});
  }

  handleChange = (event) => {
    // alert("The value is ", e.target.value)
    
    this.setState({selectValue: event.target.value,
    messageSent: true,
    });
  }

  handleSubmit = (event) => {
    // alert('Your parking waiting time is: ' + this.state.selectValue);
    this.setState({messageSent: true})
    event.preventDefault();
  }

  addMessage = () => {
    const newState = Object.assign({}, this.state);
    newState.messages.push(this.state.newMessageBody);
    newState.newMessageBody = '';
    this.setState(newState);
  }

  handleInputChange = (e) => {
    this.setState({
      newMessageBody: e.target.value,
    })
  }

  handleChangeSpot = (checkedSpot) => {
    this.setState({ checkedSpot });
    // alert("The value is" + checked);
  }

  handleChangeLocation = (checkedLocation) => {
    this.setState({ checkedLocation });
    // alert("The value is" + checked);
  }

  render() {
    var parkingMessage='You Parking Waiting Time is : '+this.state.selectValue;

    const renderMessage = () => {
      return(
        <div className="messages">
          <div>
            { this.state.messages.map((messageBody, id) => { return ( <Messages key={id} messageBody={messageBody}/>) })}
          </div>
          <div> 
            <div className="panel panel-default message-editor">
            <div className="panel-body"> 
            <textarea className="form-control message-editor-input" value={this.state.newMessageBody}onChange={this.handleInputChange}/>
            <button className="btn btn-success message-editor-button" onClick={this.addMessage}>Message</button> </div>
            </div> 
          </div>
        </div>
      )
    }
    return (
    <div id="wrapper">
      <div id="sidebar">
        <ul className="nav">
          <li className="nav-item align-middle">
            <p className="h5">EZ<span>PARKN</span></p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={ this.toggleProfile }>Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={ this.toggleParking } >Find Parking</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Feed</a>
          </li>
        </ul>
      </div>
      <div id="main-view">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="map-wrapper">
                <Map></Map>
              </div>
            </div>
          </div>
          <div className="profile-modal">
            <div className="row">
              <div className="col-md-12">
                <Profile show={ this.state.showProfile } onClose={this.toggleProfile} />
              </div>
            </div>
          </div>
          <div className="right-modal">
            <div className="row">
              <div className="col-md-12">
                <ParkingForm show={ this.state.showParking } onClose={this.toggleParking} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
