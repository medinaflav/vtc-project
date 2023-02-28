import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Autocomplete from "react-google-autocomplete";

const mapStyles = {
  width: '100%',
  height: '100%'
};

const apiKey = "AIzaSyBH-Avt5EmPHIfV0f0QrE-HjhQRJbJYrWM"

export function MapContainer(props) {
  const navigate = useNavigate();
  const options = {
    fields: ["address_components", "geometry", "name"],
    types: [],
  };
  return (
    <div className="App">
      <div className="container">
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
          fullscreenControl={false}
          mapTypeControl={false}
          scaleControl={false}
          streetViewControl={false}
          panControl={false}
          rotateControl={false}
          zoomControl={false}
        />
        <form onSubmit={() => navigate('devis')}>
          <Autocomplete
            apiKey={apiKey}
            id='depart'
            className='input'
            placeholder='Départ'
            language='fr'
            options={options}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          />
          <Autocomplete
            apiKey={apiKey}
            id='arrivee'
            className='input'
            placeholder='Arrivée'
            language='fr'
            options={options}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          />
          <button className="button is-link">Réserver</button>
        </form>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({ apiKey })(MapContainer);