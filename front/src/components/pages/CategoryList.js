import {fetchCategories} from "../../state/actions/category";
import React, {Component} from 'react';
import Table from "../table";
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import {categoryStyles} from "../css/category";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";

class CategoryList extends Component {
    componentDidMount = () => this.props.loadCategories();

    onEditCategory = (id) => {
        const route = "/category/" + id;
        this.props.history.push(route)
    };

    onAddCategory = () => {
        const route = "/category/new/";
        this.props.history.push(route)
    };

    render() {
        const {list, schema, classes} = this.props;
        return (
            <Container maxWidth="xl">
                <Button variant="contained" onClick={this.onAddCategory} className={classes.button}>Добавить</Button>
                <Table
                    data={list}
                    schema={schema}
                    onClick={this.onEditCategory}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.category.list,
        schema: state.category.schema,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadCategories: () => dispatch(fetchCategories())
    }
};

const styledComponent = withStyles(categoryStyles)(CategoryList);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
