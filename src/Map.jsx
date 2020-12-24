import React, { Component } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import Header from "./Header";
import "./Map.css";
import OrderTaxi from "./OrderTaxi";
// import { Route } from "./Route";
import { Link } from "react-router-dom";

const Route = (map, coordinates) => {
  // map.getLayer('route') && map.removeLayer('route').removeSource('route');

  map.flyTo({
    center: coordinates[0],
    zoom: 13
  });
 
  map.addLayer({
    id: 'route',
    type: 'line',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates
        }
      }
    },
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#ffc617',
      'line-width': 8
    }
  });
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.mapContainer = React.createRef();
  }

  state = {
    hasCard: true,
    coordinates: []
  };

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoianVsaWFzdHAiLCJhIjoiY2toeWowNHRjMDYwazJ0bXRpcDhwbDMzdSJ9.hSSJuzTTKxS85m2bw0HZKw";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [30.27, 60], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
  }

  // componentDidUpdate() {
  //   if (this.map.getLayer('route')) {
  //     this.map.removeLayer('route');
  //     this.map.removeSource('route');
  // }
  //     Route(this.map, this.props.coordinates);
    
  // }

  componentDidUpdate() {
    if (this.props.coordinates.length > 0) {
      Route(this.map, this.props.coordinates);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <>
        <Header />
        <div
          data-testid="map"
          className="mapContainer"
          ref={this.mapContainer}
        ></div>
        {this.props.hasCard  ? (
          <OrderTaxi />
        ) : (
          <div className="form-alert">
            <div className="alert">
              <h2>Taxi Order</h2>
              <p>Method of payment has not been added. Go to your profile.</p>
              <Link to="/profile" className="profile-btn">
                Go to profile
              </Link>
            </div>
          </div>
        )} 
      </>
    );
  }
}

export default connect(
  (state) => ({
    // cardNumber: state.card.cardNumber,
    // expiryDate: state.card.expiryDate,
    // cardName: state.card.cardName,
    // cvc: state.card.cvc,
    coordinates: state.route.route,
    hasCard: state.card.hasCard,
    addresses: state.addresses.addresses
  }),{}
)(Map);
