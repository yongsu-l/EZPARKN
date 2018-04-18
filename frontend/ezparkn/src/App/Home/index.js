import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Panel } from 'react-bootstrap';
import Map from '../Map/Map';
import Messages from '../Messages/Messages';
import Switch from "react-switch";
import { Button } from 'semantic-ui-react';
import './style.css';

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
    }
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
        <div>{ this.state.messages.map((messageBody, id) => { return ( <Messages key={id} messageBody={messageBody}/>) })}</div>
        <div> <div className="panel panel-default message-editor">

          <div className="panel-body"> 
          <textarea className="form-control message-editor-input" value={this.state.newMessageBody}onChange={this.handleInputChange}/>
          <button className="btn btn-success message-editor-button" onClick={this.addMessage}>Message</button> </div>
        </div> </div>
        </div>
      )
    }

    const renderParkingForm = () => {
      return(
      <div className="parking-request col-lg-12">

      <form onSubmit={this.handleSubmit} className="parkingForm">
      
        <label>
          
          <h4 className="parkSpotHeading">Leaving In:</h4>
          <select value={this.state.selectValue} onChange={this.handleChange} className="park-selectors">
          <option value=""></option>
            <option value="10 mins">10 Mins</option>
            <option value="20 mins">20 Mins</option>
            <option value="30 mins">30 Mins</option>
            <option value="40 mins">40 Mins</option>
          </select>
        </label>
    
        {/* <Button value="send" className="send-btn">Send</Button> */}
      </form>
      </div>
      )
    }
    return (

      <div>
        <div className="text-center header">
          <h2><span>FIND PARKING WITH EZPARKN</span></h2>
        </div>
      <div className="col-lg-12 ">
      <div className="hidden-xs col-sm-6 col-md-4 col-lg-3 sidebar">

      <div className="col-lg-12 first-switch">
      <label htmlFor="normal-switch"> <span className="spot-switch">I'm looking for a Spot</span>
       <Switch onChange={this.handleChangeSpot} checked={this.state.checkedSpot} className="normal-switch" />
       </label>
       </div>

       <div className="col-lg-12 second-switch">
      <label htmlFor="normal-switch1"> <span className="location-switch">Share my location</span>
       <Switch onChange={this.handleChangeLocation} checked={this.state.checkedLocation} id="normal-switch" />
       </label>
       </div>
        {/* {renderMessage()} */}
      
        {renderParkingForm()}
      <div className="parkingMessages">
        <h4 className="parking-header">Messages:</h4>
        <p className="messagesText"> {this.state.messageSent ? (parkingMessage) : '' }</p>
        </div>
      </div>
    
      <div className="hidden-xs col-sm-6 col-md-4 col-lg-8 map">
      <Map />
      </div>
      </div>
      </div>
    );
  }
}