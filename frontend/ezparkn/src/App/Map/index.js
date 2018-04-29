import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import './styled.css';

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
    <Gmaps width={"100%"} height={"100%"} lat={40.8197255} lng={-73.9501939} zoom={16} params={params} onMapCreated={this.onMapCreated} scrollwheel={false}>

      {this.props.parkingSpots
        .map((parkingSpot, index) => {
                return <Marker key={index} lat={parkingSpot.lat} lng={parkingSpot.long} draggable={false} />;
            })}
    </Gmaps>
    );
  }
}

      // <Marker lat={40.819970} lng={-73.946783} draggable={false} name={'Current location'} />
      // {/* <InfoWindow lat={40.819970} lng={-73.946783} content={'139 ST: St Nicholas Ave'} onCloseClick={this.onCloseClick} onClick={this.onClick}/> */}
      // <Marker lat={40.819508} lng={-73.951885} draggable={false} />
      // {/* <InfoWindow lat={40.819508} lng={-73.951885} content={'136 ST: Amsterdam Ave'} onCloseClick={this.onCloseClick} /> */}
      // <Marker lat={40.817870} lng={-73.949802} draggable={false} />
      // {/* <InfoWindow lat={40.817870} lng={-73.949802} content={'135 ST: St Nicholas Terrace'} onCloseClick={this.onCloseClick} /> */}
