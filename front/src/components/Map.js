import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {mapComponentStyles} from "./css/map";
import GoogleMap from "./GoogleMap";
import loadLocationList from "../lib/loadLocations";
import loadLocation from "../lib/loadLocation";
import direction from "../lib/direction";
import {loadLocations} from "../state/actions/locations";


class Map extends Component {

    state = {
        map: null,
        maps: null,
        locations: [],
    };

    onGoogleApiLoaded = ({map, maps}) => {
        !!this.props.onGoogleApiLoaded && this.props.onGoogleApiLoaded(map, maps);
        this.setState({map, maps});
        this.onMapUpdate()
    };

    onClick = (location) => {
        const {maps, map} = this.state;
        if (!this.props.onClick || !maps) return;
        loadLocation(map, maps, location, (location) => {
            location && this.setState({
                locations: [...this.state.locations, {
                    location: location.geometry.location,
                    id: location.place_id
                }]
            });
            this.props.onClick(this.state.locations);
            this.onLocationsUpdate(this.state.locations);
        });
    };

    sortLocations = (a, b) => {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
        return 0;
    };

    onMapUpdate = () => {
        const {maps, map} = this.state;
        const {locationKeys, loadedLocations} = this.props;
        if (!locationKeys) return;
        loadLocationList(map, maps, locationKeys, (location, end) => {
            this.setState({locations: [...this.state.locations, location]});
            !!end && loadedLocations(this.state.locations.sort(this.sortLocations))
        });
    };

    onLocationsUpdate = (locations) => direction(
        this.state.map, this.state.maps, locations, this.props.draggable);

    componentWillReceiveProps = (nextProps) => {
        const locations = nextProps.locations;
        if (locations !== this.props.locations && locations && locations.length) {
            const locationList = locations.map(location => ({
                location: location.location,
                id: location.place_id,
            }));
            this.onLocationsUpdate(locationList)
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.map}>
                <GoogleMap
                    onGoogleApiLoaded={this.onGoogleApiLoaded}
                    onClick={this.onClick}
                />
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        locations: state.locations.list,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadedLocations: locations => dispatch(loadLocations(locations))
    }
};

const styledComponent = withStyles(mapComponentStyles)(Map);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
