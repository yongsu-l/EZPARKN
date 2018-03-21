import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Message } from 'semantic-ui-react'
import './styled.css';

const params = {key: 'AIzaSyAnSgqK0QCLi98urC5vRWCFnfmi9GR7nQI'};

export default class Home extends Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {

    return (
      <div className="container-fluid col-lg-12">
        <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6 map">
          <Gmaps width={'500px'} height={'500px'} lat={coords.lat} lng={coords.lng} zoom={15} params={params} onMapCreated={this.onMapCreated}>
            <Marker lat={coords.lat} lng={coords.lng} draggable={true} onDragEnd={this.onDragEnd} />
          </Gmaps>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content">

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 message">
            <h2 className="text-center">Important Messages</h2>
            <Message list={messages}/>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 parking">
            <h2 className="text-center">Current Parking Spots</h2>
            <a href="#"><Message list={parkingSpots}/></a>
          </div>
        </div>
      </div>
    );
  }
}
