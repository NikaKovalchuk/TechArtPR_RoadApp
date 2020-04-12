import React, {Component} from 'react';
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles from "@material-ui/core/styles/withStyles";

import TextField from '../form/TextField';
import Title from "../form/Title";
import TextArea from "../form/TextArea";
import CheckboxList from "../form/CheckboxList";
import SearchBar from '../SearchBar';
import {fetchCategories} from "../../state/actions/category";
import {deleteRoute, fetchRoute} from "../../state/actions/route";

import Map from "../Map";
import {routeStyles} from "../css/route";
import RouteFormButton from "../form/RouteFormButton";

class RouteForm extends Component {
    constructor(props) {
        super(props);

        this.searchBar = React.createRef();

        this.state = {
            mapsLoaded: false,
            map: null,
            maps: null,
            title: "",
            description: "",
            categories: [],
            locations: [],
        };
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        id && this.props.loadRoute(id);
        if (!this.props.categories.length) {
            this.props.loadCategories();
        }
    };

    onChangeCategoryList = event => {
        var categories = this.state.categories;
        const name = parseInt(event.target.name);
        if (event.target.checked) {
            categories.push(name);
        } else {
            const index = categories.indexOf(name);
            categories.splice(index, 1);
        }
        this.setState({...this.state, categories});
    };

    componentWillReceiveProps = (nextProps) => {
        const id = this.props.match.params.id;
        id && this.setState({...nextProps.route});
    };

    validateData = () => {
        const {title, description} = this.state;
        return !(title === "" || description === "")
    };

    onClick = (locations) => this.setState({locations: locations});

    onDeleteRoute = () => {
        this.props.deleteRoute(this.props.route.id);
        this.props.history.push("/");
    };

    apiLoaded = (map, maps) => {
        map.controls[maps.ControlPosition.TOP_LEFT].push(this.searchBar.current);
        this.setState({
            mapsLoaded: true,
            map: map,
            maps: maps,
        });
    };

    render() {
        const {route, classes, history} = this.props;
        const isValid = this.validateData();
        const id = this.props.match.params.id;
        const {locations, mapsLoaded, map, maps, title, description, categories} = this.state;
        return (
            <Container>
                <Title
                    classes={classes}
                    title={id ? "Редактировать путь " + route.title : "Создать путь"}
                    onRemove={id && this.onDeleteRoute}
                />
                <FormControl component="fieldset" className={classes.form} style={{width: '100%'}}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <TextField
                                    name="title"
                                    label="Название"
                                    autoFocus
                                    onInput={event => this.setState({title: event.target.value})}
                                    value={this.state.title}
                                />
                            }
                        />
                    </FormGroup>
                    {!!this.props.categories.length ?
                        <FormHelperText>Выберите категории из списка</FormHelperText> :
                        <FormHelperText>Добавьте категории в меню "Категории"</FormHelperText>
                    }
                    <FormGroup>
                        <CheckboxList
                            items={this.props.categories}
                            onChange={this.onChangeCategoryList}
                            checked={this.state.categories}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextArea
                            onInput={event => this.setState({description: event.target.value})}
                            value={this.state.description}
                        />
                    </FormGroup>
                    <Map
                        onClick={this.onClick}
                        onGoogleApiLoaded={this.apiLoaded}
                        locationKeys={locations}
                    >
                        <div ref={this.searchBar}>
                            {mapsLoaded && (
                                <SearchBar map={map} maps={maps}/>
                            )}
                        </div>
                    </Map>
                    <RouteFormButton
                        isValid={isValid}
                        data={{title, description, categories}}
                        id={id}
                        history={history}
                        locations={locations}
                    />
                </FormControl>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        route: state.routes.route,
        categories: state.category.list,
        locations: state.locations.list,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteRoute: (route) => dispatch(deleteRoute(route)),
        loadRoute: (id) => dispatch(fetchRoute(id)),
        loadCategories: () => dispatch(fetchCategories()),
    }
};

const styledComponent = withStyles(routeStyles)(RouteForm);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
