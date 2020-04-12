import React, {Component} from 'react';
import Map from "../Map";
import {loadLocation} from "../../state/actions/locations";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import {locationStyles} from "../css/location";
import Title from "../form/Title";
import {locationFields} from "./constants";

class Location extends Component {

    onMapMount = (map, maps) => {
        const placeService = new maps.places.PlacesService(map);
        const id = this.props.match.params.id;
        const request = {
            placeId: id,
            fields: locationFields,
        };
        placeService.getDetails(request, (results, status) => {
            if (status === 'OK') {
                this.props.loadLocation(results);
                map.setOptions({center: results.geometry.location});
                new window.google.maps.Marker({
                    position: results.geometry.location,
                    map,
                    title: results.name,
                })
            }
        });
    };

    render() {
        const {location, classes} = this.props;
        const {formatted_address, formatted_phone_number, website} = location;

        return (
            <Container maxWidth="xl">
                <Title
                    title={location.name}
                    classes={classes}
                />
                {formatted_address &&
                <Typography className={classes.description}>Адресс: {formatted_address}</Typography>}
                {formatted_phone_number &&
                <Typography className={classes.description}>Телефон: {formatted_phone_number}</Typography>}
                {website &&
                <Typography>Сайт: <Link className={classes.description}>{website}</Link></Typography>}
                <Map onGoogleApiLoaded={this.onMapMount}/>
            </Container>
        )

    }
}

const mapStateToProps = state => {
    return {
        route: state.routes.route,
        location: state.locations.location,
        schema: state.locations.schema,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadLocation: location => dispatch(loadLocation(location)),
    }
};

const styledComponent = withStyles(locationStyles)(Location);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
