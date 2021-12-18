import React, { useState } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import "./mapContainer.css";
import mapStyle from "./mapStyle";

export class MapContainer extends React.Component {
  render() {
    function mapLoaded(mapProps, map) {
      map.setOptions({
        styles: mapStyle,
      });
    }

    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={styles.map}
        initialCenter={{
          lat: 50.87479026110443,
          lng: 4.316171065355136,
        }}
        onReady={(mapProps, map) => mapLoaded(mapProps, map)}
        disableDefaultUI={true}
        className="map"
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

const styles = {
  map: {
    width: "100%",
    height: "100%",
  },
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC8qEG6KThOI99-sOs-D9ZaKvtMvi4jm2c",
})(MapContainer);
