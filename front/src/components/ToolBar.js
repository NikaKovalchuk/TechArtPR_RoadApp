import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {toolbarStyles} from "./css/toolbar";


class ButtonAppBar extends Component {
    items = [
        {title: "Категории", route: "/categories/"},
        {title: "Маршруты", route: "/routes/"},
    ];

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.titles}>
                            {this.items.map((item) => (
                                <Typography variant="h6" className={classes.title} key={item.title}>
                                    <Link className={classes.link} to={item.route}>{item.title}</Link>
                                </Typography>
                            ))}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


ButtonAppBar.propTypes = {
    classes: PropTypes.object,
};


const styledComponent = withStyles(toolbarStyles)(ButtonAppBar);
export default styledComponent;
