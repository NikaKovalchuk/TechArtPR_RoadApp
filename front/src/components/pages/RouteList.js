import React, {Component} from 'react';
import {connect} from "react-redux";
import Table from "../table";
import {fetchRoute} from "../../state/actions/route"
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import {routeStyles} from "../css/route";


class RouteList extends Component {
    handleClick = (id) => {
        const route = "/route/" + id;
        this.props.fetchRoute(id);
        this.props.history.push(route)
    };

    onAdd = () => this.props.history.push("/route/new/");

    render() {
        const {routes, schema, classes} = this.props;
        return (
            <Container maxWidth="xl">
                <Button
                    variant="contained"
                    onClick={this.onAdd}
                    className={classes.button}>
                    Добавить
                </Button>
                <Table
                    data={routes}
                    onClick={this.handleClick}
                    schema={schema}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        routes: state.routes.list,
        schema: state.routes.schema,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRoute: (id) => dispatch(fetchRoute(id)),
    }
};

const styledComponent = withStyles(routeStyles)(RouteList);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
