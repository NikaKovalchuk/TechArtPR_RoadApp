import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import {addRoute, updateRoute} from "../../state/actions/route";
import {routeStyles} from "../css/route";

class RouteFormButton extends Component {

    onSubmit = () => {
        const {locations, id, data, history, updateRoute, addRoute} = this.props;
        console.log(locations)
        const locationList = locations.map(location => location.id);
        const body = {locations: locationList, ...data};
        if (id) {
            updateRoute(id, body);
        } else {
            addRoute(body);
        }
        history.push("/");
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
