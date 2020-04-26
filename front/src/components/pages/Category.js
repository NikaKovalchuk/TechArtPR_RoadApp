import {addCategory, deleteCategory, fetchCategory, updateCategory} from "../../state/actions/category";
import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import {categoryStyles} from "../css/category";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '../form/TextField';
import Container from "@material-ui/core/Container";
import Title from "../form/Title";


class Category extends Component {
    state = {
        title: "",
        icon: "",
    };

    componentDidMount = () => {
        const id = this.props.match.params.id;
        id && this.props.loadCategory(id);
    };

    componentWillReceiveProps = (nextProps) => {
        const category = nextProps.category;
        const id = this.props.match.params.id;
        id && category && this.setState({title: category.title, icon: category.icon})
    };

    redirect = () => {
        const route = "/categories/";
        this.props.history.push(route)
    };

    onSubmit = () => {
        if (this.props.category) {
            this.props.updateCategory(this.props.category.id, this.state);
        } else {
            this.props.addCategory(this.state);
        }
        this.redirect()
    };

    onDeleteCategory = () => {
        this.props.deleteCategory(this.props.category.id);
    };

    render() {
        const {category, classes} = this.props;
        const id = this.props.match.params.id;
        id && category && !category.title && this.redirect();
        return (
            <Container maxWidth="xl">
                <Title
                    classes={classes}
                    title={category ? "Редактровать категорию " + category.title : "Создать новую"}
                    onRemove={id && this.onDeleteCategory}
                />
                <form className={classes.form} noValidate>
                    <TextField
                        label={"Title"}
                        name={"title"}
                        autoFocus
                        onInput={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                    <TextField
                        name={"icon"}
                        label={"Icon"}
                        onInput={event => this.setState({icon: event.target.value})}
                        value={this.state.icon}
                        classes={classes}
                        helpText={"Используйте названия с сайта https://material-ui.com/components/material-icons/"}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        disabled={this.state.icon === "" || this.state.title === ""}
                        onClick={this.onSubmit}>
                        Save
                    </Button>
                </form>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.category.category,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateCategory: (id, category) => dispatch(updateCategory(id, category)),
        addCategory: (category) => dispatch(addCategory(category)),
        deleteCategory: (category) => dispatch(deleteCategory(category)),
        loadCategory: (id) => dispatch(fetchCategory(id)),
    }
};

const styledComponent = withStyles(categoryStyles)(Category);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
