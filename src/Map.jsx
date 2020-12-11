import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Header from './Header';
import "./Map.css";

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoianVsaWFzdHAiLCJhIjoiY2toeWowNHRjMDYwazJ0bXRpcDhwbDMzdSJ9.hSSJuzTTKxS85m2bw0HZKw";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }
  
  render() {
    return (
      <>
        <Header />
        <div data-testid="map" className="mapContainer" ref={this.mapContainer}></div>
      </>
    )
  }
}

export default Map;