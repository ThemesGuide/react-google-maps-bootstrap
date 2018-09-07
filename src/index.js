import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map";

import "./styles.css";

const googleMapsApiKey = "AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU";

const modalMapStyles = [
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#e0efef"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        hue: "#1900ff"
      },
      {
        color: "#c0e8e8"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        lightness: 700
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#7dcdcd"
      }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <div className="container py-2 d-flex flex-column mvh-100 text-center">
        <h3>Google Maps, ReactJs + Bootstrap 4</h3>
        <div className="row py-3 flex-grow-1">
          <div className="col-12">
            <div className="card shadow h-100">
              {/* map is defined here and traffic layer is passed in*/}
              <Map apiKey={googleMapsApiKey} layerTypes={["TrafficLayer"]} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto mx-auto">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >
              Open Map in Modal
            </button>
          </div>
        </div>
      </div>
      <div className="modal" tabIndex="-1" role="dialog" id="myModal">
        <div
          className="modal-dialog modal-lg mvh-90 w-100 d-flex flex-column"
          role="document"
        >
          <div className="modal-content flex-grow-1">
            <div className="modal-header">
              <h5 className="modal-title">Map inside Modal</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0 h-100">
              <div className="h-100 w-100 position-absolute">
                {/*modal map is defined here- custom styles and zoom are passed in*/}
                <Map
                  apiKey={googleMapsApiKey}
                  center={[42.302, -71.033]}
                  styles={modalMapStyles}
                  zoom={13}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
