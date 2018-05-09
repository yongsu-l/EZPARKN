import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Panel } from 'react-bootstrap';
import Map from '../Map';
import Messages from '../Messages';
import Profile from '../Profile';
import UsersFeed from '../UsersFeed';
import ParkingForm from '../ParkingForm';
import ShareSpot from '../ShareSpot';
import Switch from "react-switch";
import moment from "moment";
import { Button } from 'semantic-ui-react';
import "typeface-raleway";
import { store } from 'store';
import { subscribeToParkingSpots, iAmParking, iAmLeaving, joinQueue, leaveQueue} from '../SocketIO/index';
import getProfile from '../../lib/getProfile';


import {
  AppView,
  MainView,
  Para,
  Wrapper,
  Sidebar,
  SideHead,
  SideActive,
  SideComponents,
  SideUlP,
  SideUlUlA,
  Content,
  SideComponentsMore,
  NavDisplay,
  MapDisplay,
} from './styled';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOn: true,
      selectValue:'',
      checkedSpot: false,
      getLocationToggle: false,
      checkedLocation: false,
      currentLocation: null,
      messages: [],
      newMessageBody: '',
      messageSent: false,
      showParking: false,
      showProfile: false,
      showShareSpot: false, 
      spots: [],
      showFeed: false,
      feed: [],
      findingSpot:false,
      parkingSpots: [],
    };

    this.handleClick = this.handleClick.bind(this);

    this.addShare = this.addShare.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.setCurrentLocation = this.setCurrentLocation.bind(this);

    subscribeToParkingSpots((err, parkingSpots) => {
      console.log(parkingSpots);
      
      if(err)
        alert(err)
      else{
        this.setState({parkingSpots:parkingSpots});
      }
    });

}
  getFeed = () => {
    // function call
  }
  toggleParking = () => {
    this.setState({showParking: !this.state.showParking});
  }

  toggleProfile = () => {
    this.setState({showProfile: !this.state.showProfile});
  }
  toggleFeed = () => {
    this.setState({showFeed: !this.state.showFeed});
  }

  toggleShareSpot = () => {
    this.setState({showShareSpot: !this.state.showShareSpot});
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

  addShare(shareSpot) {
    // console.log(store.getState().token);
    var currentDateTime = new Date();
    var leavingDateTime = new Date(currentDateTime.getTime() + shareSpot.minutes*60000);
    console.log(leavingDateTime)
      iAmLeaving(leavingDateTime, this.state.currentLocation.lat, this.state.currentLocation.long, store.getState().token, (err , parkingSpots)=>{
        if(err)
          console.log(err)
        else {
          alert("Parking spot submitted, Thank you!")
          this.setState({parkingSpots:parkingSpots});  
          // console.log(moment(parkingSpots[1].leavingTime).format()) 
        }
      })
    }

  getCurrentLocation(val){
    this.setState({
      getLocationToggle:val
    })
  }

  setCurrentLocation(pos){
    if(pos){
      if(pos.coords.latitude == null || pos.coords.longitude == null){
        alert('Failed to get location try again') 
        this.setState({getLocationToggle:false})
      }
      else{
        this.setState({
          checkedLocation: true,
          currentLocation: {
            lat:pos.coords.latitude,
            long: pos.coords.longitude,
          },
        })
      }
    }
    else{
      alert('Failed to get location try again') 
      this.setState({getLocationToggle:false})
    }
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
  toggleQueue = () =>{
   this.setState({findingSpot: !this.state.findingSpot});
    this.state.findingSpot ? joinQueue() : leaveQueue() ;
  }

  handleClick(){
    this.setState(prevState => ({
      isToggledOn: !prevState.isToggledOn
    }));
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
      <AppView>
        <Wrapper>
        
        {
            this.state.isToggledOn &&
            <Sidebar>
                <SideHead>
                    <h3>EzPARKN</h3>
                </SideHead>

                <SideComponents>
                    <SideUlP>An easier way to find parking</SideUlP>
                    <SideComponentsMore>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                    </SideComponentsMore>
                    <SideComponentsMore>
                        <a href="#" onClick={ this.toggleProfile } >Profile</a>
                    </SideComponentsMore>
                    <SideComponentsMore>
                        <a href="#" onClick={ this.toggleParking } >Find Parking</a>
                    </SideComponentsMore>
                    <SideComponentsMore>
                        <a href="#" onClick={this.toggleShareSpot} >Share Spot</a>
                    </SideComponentsMore>
                    <SideComponentsMore>
                        <a href="#" onClick={this.toggleFeed} >Feed</a>
                    </SideComponentsMore>
                </SideComponents>

            </Sidebar>

          }
            <Content>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.handleClick}>
                                <i className="glyphicon glyphicon-align-left"></i>
                                <span>Sidebar</span>
                            </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="./">Log In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./signup">Sign Up</a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav> 

          <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="map-wrapper">
                <Map parkingSpots={this.state.parkingSpots} getCurrentLocation={this.state.getLocationToggle} setCurrentLocation={this.setCurrentLocation}> </Map>
              </div>
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
                <ParkingForm show={ this.state.showParking } onClose={this.toggleParking} currentQueueState = {this.state.findingSpot} joinQueue={this.toggleQueue} status={this.state.findingSpot}/>              
              </div>
            </div>
          </div>
          <div className="bottom-modal">
            <div className="row">
              <div className="col-md-12">
                <UsersFeed show={ this.state.showFeed } onClose={ this.toggleFeed } feed={this.state.parkingSpots}/>
              </div>
            </div>

          </div>
          <div className="share-modal">
            <div className="row">
              <div className="col-md-12">
                <ShareSpot addShare = {this.addShare}  toggleState={this.state.getLocationToggle}  checkedLocation={this.state.checkedLocation} getCurrentLocation={ this.getCurrentLocation } show={ this.state.showShareSpot } onClose={this.toggleShareSpot} />
              </div>
            </div>
          </div>
          

            </Content>
        </Wrapper> 
      </AppView>    
    )
  }
}
