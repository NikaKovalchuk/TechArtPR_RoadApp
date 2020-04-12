import React, {Component} from 'react';
import config from "../config";
import GoogleMapReact from 'google-map-react';
import {bootstrapURLKeys, center} from "./pages/constants";


class GoogleMap extends Component {

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={bootstrapURLKeys}
                center={center}
                zoom={config["MAP_ZOOM"]}
                options={{
                    mapTypeControl: true,
                    streetViewControl: true,
                    styles: [{featureType: 'poi', elementType: 'labels', styles: [{visibility: 'on'}]}]
                }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={this.props.onGoogleApiLoaded}
                onClick={this.props.onClick}
            />
        )
    }
}

export default GoogleMap;
