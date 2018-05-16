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
import { setToken, setProfile, setUser } from 'actions';
import { Redirect } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import './style.css';

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
  Hover,
  Logo,
  Modal
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
      parkingSpots: []
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
  signout = () =>{
    store.dispatch(setToken(null));
    store.dispatch(setUser(null));
    store.dispatch(setProfile(null));
    window.location.href='/';
  }

  getFeed = () => {
    // function call
  }
  toggleParking = () => {
    this.setState({
      showParking: !this.state.showParking,
      showProfile: false,
      showShareSpot: false,
      showFeed: false
    });
  }

  toggleProfile = () => {
    this.setState({
      showProfile: !this.state.showProfile,
      showParking: false,
      showShareSpot: false,
      showFeed: false
    });
  }
  toggleFeed = () => {
    this.setState({
      showFeed: !this.state.showFeed,
      showProfile: false,
      showParking: false,
      showShareSpot: false
    });
  }
  contactPage = () => {
    window.location.href='/contact'
  }
  aboutPage = () => {
    window.location.href='/about'
  }

  toggleShareSpot = () => {
    this.setState({
      showShareSpot: !this.state.showShareSpot,
      showProfile: false,
      showParking: false,
      showFeed: false
    });
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

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.7em',
    verticalAlign: 'middle',
    color: '#fff',
    fontWeight: '400'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    marginLeft: '10px',
    fontWeight: '700'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: '2'
  }
}
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

        <Wrapper id = "outer-container">
        

            <Content>

                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }  styles = {styles} width={ 400 } zIndex={2}>

                  <Logo src= './img/logo.png' />
                  <Hover id="home" className="menu-item" href="#homeSubemenu"> Home  </Hover>
                  <Hover id="profile" className="menu-item" onClick={this.toggleProfile} href="#"> Profile</Hover>
                  <Hover id="parking" className="menu-item" onClick={this.toggleParking} href="#">  Find Parking</Hover>
                  <Hover id="spot" className="menu-item" onClick={this.toggleShareSpot} href="#">  Share Spot</Hover>
                  <Hover id="feed" className="menu-item" onClick={this.toggleFeed} href="#">  Feed</Hover>
                  <Hover id="about" className="menu-item" onClick={this.aboutPage} href="#">  About</Hover>
                  <Hover id="contact" className="menu-item" onClick={this.contactPage} href="#">  Contact us</Hover>
                  <Hover id="splash" className="menu-item" onClick={this.signout} href="./">  Log Out</Hover>
                </Menu>


          <div className="container-fluid" id = "page-wrap">
              <MapDisplay zIndex={1}>
                <Map parkingSpots={this.state.parkingSpots} getCurrentLocation={this.state.getLocationToggle} setCurrentLocation={this.setCurrentLocation}> </Map>
              </MapDisplay>

              <Modal zIndex={3}>
                <Profile show={ this.state.showProfile } onClose={this.toggleProfile} />
              </Modal>

              <Modal>
                <ParkingForm show={ this.state.showParking } onClose={this.toggleParking} currentQueueState = {this.state.findingSpot} joinQueue={this.toggleQueue} status={this.state.findingSpot}/>              
              </Modal>

              <Modal>
                <UsersFeed show={ this.state.showFeed } onClose={ this.toggleFeed } feed={this.state.parkingSpots}/>              
              </Modal>

              <Modal>
                <ShareSpot addShare = {this.addShare}  toggleState={this.state.getLocationToggle}  checkedLocation={this.state.checkedLocation} getCurrentLocation={ this.getCurrentLocation } show={ this.state.showShareSpot } onClose={this.toggleShareSpot} />
           
              </Modal>
          </div>

         
  

            </Content>
        </Wrapper> 
      </AppView>    
    )
  }
}
