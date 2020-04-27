import React, {Component} from 'react';
import Table from "../../table";
import { Typography, Container } from "@material-ui/core";
import {connect} from "react-redux";
import CategoryList from "./CategoryList";
import withStyles from "@material-ui/core/styles/withStyles";
import {routeStyles} from "../../css/route";
import {deleteRoute, fetchRoute} from "../../../state/actions/route";
import Title from "../../form/Title";
import Map from "../../Map";

class Index extends Component {
    componentDidMount = () => {
        const id = this.props.match.params.id;
        id && this.props.loadRoute(id);
    };

    onLocationClick = (id) => {
        const route = "/location/" + id + "/";
        this.props.history.push(route)
    };

    onRemove = () => {
        this.props.deleteRoute(this.props.route.id);
        this.props.history.push("/");
    };

    onEdit = () => this.props.history.push("/route/edit/" + this.props.route.id);

    render() {
        const {locations, schema, route, classes} = this.props;
        const validLocations = !!route.locations && !!route.locations.length;

        return (
            <Container maxWidth="xl">
                {validLocations && <Map locationKeys={route.locations} draggable={false}/>}
                <Title
                    title={route.title}
                    classes={classes}
                    onRemove={this.onRemove}
                    onEdit={this.onEdit}
                />
                <CategoryList list={route.categories}></CategoryList>
                <Typography className={classes.description}>{route.description}</Typography>
                {validLocations && <Table
                    data={locations}
                    schema={schema}
                    onClick={this.onLocationClick}
                />}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        route: state.routes.route,
        locations: state.locations.list,
        schema: state.locations.schema,
        categories: state.category.list,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadRoute: id => dispatch(fetchRoute(id)),
        deleteRoute: id => dispatch(deleteRoute(id)),
    }
};

const styledComponent = withStyles(routeStyles)(Index);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
