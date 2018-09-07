import React from "react";
import GoogleMapReact from "google-map-react";
import MapPoint from "./MapPoint";
import MapEmoji from "./MapEmoji";

export class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultProps: {
        center: {
          lat: this.props.lat || 41.633,
          lng: this.props.lng || -71.222
        },
        zoom: this.props.zoom || 11
      }
    };
  }

  loadMap() {}

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: this.props.apiKey ? this.props.apiKey : "you need an API key!"
        }}
        defaultCenter={this.state.defaultProps.center}
        defaultZoom={this.state.defaultProps.zoom}
        layerTypes={["TrafficLayer"]}
      >
        <MapEmoji
          emoji="🎯"
          lat={this.state.defaultProps.center.lat}
          lng={this.state.defaultProps.center.lng}
          text="Map Center"
        />
        <MapPoint lat={41.633} lng={-71.233} text={"Point 1"} />
        <MapPoint lat={41.643} lng={-71.243} text={"Point 2"} />
        <MapEmoji emoji="🎱" lat={41.61} lng={-71.323} />
      </GoogleMapReact>
    );
  }
}

export default Map;
