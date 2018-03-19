import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import './styled.css';


const coords = {
    lat: 40.8197255,
    lng: -73.9501939
  };
  
  const params = {v: '3.exp', key: 'AIzaSyAnSgqK0QCLi98urC5vRWCFnfmi9GR7nQI'};

export default class Location extends Component {
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
            
        </div>
        );
      }
}