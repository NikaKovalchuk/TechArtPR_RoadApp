import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import ToolBar from "./ToolBar";
import NotFound from "./pages/NotFound"
import RouteList from "./pages/RouteList";
import AppRoute from "./pages/Route";
import Location from "./pages/Location";
import CategoryList from "./pages/CategoryList";
import Category from "./pages/Category";
import {rootStyles} from "./css/root";
import RouteForm from "./pages/RouteForm";


/**
 * Component for roots control
 */
class RootContainer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <BrowserRouter>
                    <ToolBar/>
                    <div className={classes.root}>
                        <Switch>
                            <Route exact path="/" component={RouteList}/>
                            <Route exact path="/auth" component={RouteList}/>
                            <Route exact path="/routes" component={RouteList}/>
                            <Route exact path="/location/:id" component={Location}/>
                            <Route exact path="/route/:id(\d+)" component={AppRoute}/>
                            <Route exact path="/route/edit/:id(\d+)" component={RouteForm}/>
                            <Route exact path="/route/new" component={RouteForm}/>
                            <Route exact path="/categories" component={CategoryList}/>
                            <Route exact path="/category/new" component={Category}/>
                            <Route exact path="/category/:id(\d+)" component={Category}/>
                            <Route exact path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default withStyles(rootStyles)(RootContainer);
