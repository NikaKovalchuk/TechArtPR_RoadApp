import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import {mapComponentStyles} from "./css/map";

class SearchBar extends Component {

    static propTypes = {
        maps: PropTypes.shape({
            places: PropTypes.shape({
                SearchBox: PropTypes.func,
            }),
            event: PropTypes.shape({
                clearInstanceListeners: PropTypes.func,
            }),
        }).isRequired,
        placeholder: PropTypes.string,
        onPlacesChanged: PropTypes.func,
    };

    static defaultProps = {
        placeholder: 'Search...',
        onPlacesChanged: null,
    };

    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
    }

    componentDidMount() {
        const {
            maps: {places},
        } = this.props;

        this.searchBar = new places.SearchBox(this.searchInput.current);
        this.searchBar && this.searchBar.addListener('places_changed', this.onPlacesChanged);
    }

    onPlacesChanged = () => {
        const newPlace = this.searchBar.getPlaces();
        const {map} = this.props;
        const lat = newPlace[0].geometry.location.lat();
        const lng = newPlace[0].geometry.location.lng();
        map.setCenter({lat: lat, lng: lng});
    };

    render() {
        const {placeholder, classes} = this.props;
        return (
            <input
                ref={this.searchInput}
                placeholder={placeholder}
                type="text"
                className={classes.search}
            />
        );
    }
}

export default withStyles(mapComponentStyles)(SearchBar);

