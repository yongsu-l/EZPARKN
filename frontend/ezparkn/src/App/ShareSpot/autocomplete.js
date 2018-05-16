import React, {Component} from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './style.css';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
      latitude: null,
      longitude: null,
      isGeocoding: false,
      errorMessage: '',
      address: '',
    };
  }

  handleAddressChange = (address) => {
    this.setState({ 
      address 
    });
  }

  handleSelect = (address) => {
    console.log("select")
    this.setState({ isGeocoding: true });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => { 
        this.setState({
          latitude: lat,
          longitude: lng,
        });
        this.props.addressLocation({
          latitude: lat,
          longitude: lng,
        })
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.error('Error', error);
      });
  }

  onSubmit(event){
    event.preventDefault();//prevents page from refreshing
    this.props.addressLocation({
          latitude: this.state.lat,
          longitude: this.state.lng,
        });
  }



  render() {
    const { address, isGeocoding, errorMessage,} = this.state;

    return (
      <PlacesAutocomplete
        value={address}
        onChange={this.handleAddressChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input id="search" type="text" className="form-control"
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                console.log("test")
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#black', cursor: 'pointer' }
                            : { backgroundColor: '#black', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      
      </PlacesAutocomplete> 
    );
  }
}

export default LocationSearchInput; 