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
        const messages = [
          'Friend A is leaving in 20 Minutes.',
          'Never Miss A Parking Spot At CCNY',
        ];
        
        const parkingSpots = [
          '139 ST: St Nicholas Ave',
          '136 ST: Amsterdam Ave',
        ]

        return (
        <div className="container">
            <div className="text-center header">
              <h2><span>FIND PARKING WITH EZPARKN</span></h2>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 map">
                <Gmaps width={'1075px'} height={'400px'} lat={40.8197255} lng={-73.9501939} zoom={16} params={params} onMapCreated={this.onMapCreated} scrollwheel={false}>
              
                <Marker lat={40.819970} lng={-73.946783} draggable={false} />
                <InfoWindow lat={40.819970} lng={-73.946783} content={'139 ST: St Nicholas Ave'} onCloseClick={this.onCloseClick} />
                
                <Marker lat={40.819508} lng={-73.951885} draggable={false} />
                <InfoWindow lat={40.819508} lng={-73.951885} content={'136 ST: Amsterdam Ave'} onCloseClick={this.onCloseClick} />
                
                <Marker lat={40.817870} lng={-73.949802} draggable={false} />
                <InfoWindow lat={40.817870} lng={-73.949802} content={'135 ST: St Nicholas Terrace'} onCloseClick={this.onCloseClick} />

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
