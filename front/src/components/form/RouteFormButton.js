import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

import {addRoute, updateRoute} from "../../state/actions/route";
import {routeStyles} from "../css/route";

class RouteFormButton extends Component {
    onSubmit = (event) => {
        const {id, locations, data, history, updateRoute, addRoute} = this.props;
        const locationList = locations.map(location => location.id);
        const body = {locations: locationList, ...data};

        !!id ? updateRoute(id, body) : addRoute(body);
    };

    render() {
        const {classes, isValid} = this.props;
        return (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                disabled={!isValid}
                onClick={this.onSubmit}>
                Сохранить
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateRoute: (id, route) => dispatch(updateRoute(id, route)),
        addRoute: (route) => dispatch(addRoute(route)),
    }
};

const styledComponent = withStyles(routeStyles)(RouteFormButton);
export default connect(null, mapDispatchToProps)(styledComponent);
