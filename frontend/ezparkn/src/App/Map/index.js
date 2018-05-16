import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
// import createReactClass from 'create-react-class';
import Geolocation from "react-geolocation";
// import MapEvents from './map'


const coords = {
  lat: 40.8197255,
  lng: -73.9501939
};

const params = {key: 'AIzaSyCQac5G7XjeVqPqFf8b9C0x5u40eyUd1KM'};


export default class Map extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd = (e) => {
    console.log('onDragEnd', e);
  }

  onCloseClick = () => {
    console.log('onCloseClick');
  }

  onClick = (e) => {
    console.log('onClick', e);
  }

  render() {

    return (

      <div>
        <Gmaps
          width={'100%'}
          height={'calc(100vh - 90px)'}
          lat={40.8197255} 
          lng={-73.9501939} 
          zoom={16}
          params={params}
           >

           <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
          <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={this.props.name}
          onCloseClick={this.onCloseClick} />

          {this.props.parkingSpots
            .map((parkingSpot, index) => {
                    return <Marker key={index} lat={parkingSpot.lat} lng={parkingSpot.long} draggable={false} />;
                })}
          
          {this.props.parkingSpots
        .map((parkingSpot, index) => {
                return (
                  <InfoWindow lat={parkingSpot.lat}  lng={parkingSpot.long} content={parkingSpot.user?parkingSpot.user.username:"Anonymous"} onCloseClick={this.onCloseClick} onClick={this.onClick}/> 
                )
            })}

          {this.props.getCurrentLocation && <Geolocation onSuccess={(position)=>{console.log(position); this.props.setCurrentLocation(position)}} onError={console.log}/> }
        </Gmaps>
      </div>
    );

  }

}

      // <Marker lat={40.819970} lng={-73.946783} draggable={false} name={'Current location'} />
      // {/* <InfoWindow lat={40.819970} lng={-73.946783} content={'139 ST: St Nicholas Ave'} onCloseClick={this.onCloseClick} onClick={this.onClick}/> */}
      // <Marker lat={40.819508} lng={-73.951885} draggable={false} />
      // {/* <InfoWindow lat={40.819508} lng={-73.951885} content={'136 ST: Amsterdam Ave'} onCloseClick={this.onCloseClick} /> */}
      // <Marker lat={40.817870} lng={-73.949802} draggable={false} />
      // {/* <InfoWindow lat={40.817870} lng={-73.949802} content={'135 ST: St Nicholas Terrace'} onCloseClick={this.onCloseClick} /> */}
