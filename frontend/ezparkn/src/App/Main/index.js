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
import { Button } from 'semantic-ui-react';
import "typeface-raleway";
import { store } from 'store';
import { subscribeToParkingSpots, iAmParking, iAmLeaving } from '../SocketIO/index';


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
} from './styled';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
            selectValue:'',
            checkedSpot: false,
            checkedLocation: false,
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
            isToggledOn: true,
        };

    this.handleClick = this.handleClick.bind(this);
    this.addShare = this.addShare.bind(this);

    subscribeToParkingSpots((err, parkingSpots) => {
      if(err)
        alert(err)
      else{
        this.setState({parkingSpots:parkingSpots});
      }
      console.log(store.getState())
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

  addShare(spot) {
      // iAmLeaving(leavingTime, lat, long, parkingId, ()=>{

      // })
        // const spots = this.state.players.concat(spot);
        // this.setState({
        //     spots: spots
        // });
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
    if (this.state.findingSpot) {
    }
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
               <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn" onClick={this.handleClick}>
                                <i class="glyphicon glyphicon-align-left"></i>
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

          <div classNameName="container-fluid">
          <div classNameName="row">
            <div classNameName="col-md-12">
              <div classNameName="map-wrapper">
                <Map parkingSpots={this.state.parkingSpots}></Map>
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
                <ParkingForm show={ this.state.showParking } onClose={this.toggleParking} joinQueue={this.toggleQueue} status={this.state.findingSpot} />
              </div>
            </div>
          </div>
          <div className="bottom-modal">
            <div className="row">
              <div className="col-md-12">
                <UsersFeed show={ this.state.showFeed } onClose={ this.toggleFeed } getFeed={ this.getFeed } feed={this.state.feed}/>
              </div>
            </div>

          </div>
          <div className="share-modal">
            <div className="row">
              <div className="col-md-12">
                <ShareSpot addShare = {this.addShare}  show={ this.state.showShareSpot } onClose={this.toggleShareSpot} />
              </div>
            </div>
          </div>
          

            </Content>
        </Wrapper> 
      </AppView>    
    )
  }
}
