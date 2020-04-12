import React, {Component} from 'react';
import {Icon} from '@material-ui/core';

class CategoryList extends Component {

    render() {
        const {list} = this.props;
        return (
            list ?
                list.map(category =>
                    <Icon key={category} style={{paddingRight: "5px"}}>{category}</Icon>) : null)
    }
}

export default CategoryList;
