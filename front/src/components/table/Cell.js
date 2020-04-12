import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import {Icon} from '@material-ui/core';

class Cell extends Component {
    render() {
        const {column, value} = this.props;
        const icon = <Icon style={{paddingRight: "5px"}}>{value}</Icon>;
        const text = column.format && typeof value === 'number' ? column.format(value) : value;
        const content = column.id === "icon" ? icon : text;
        return (
            <TableCell key={column.id} align={column.align}>
                {content}
            </TableCell>
        )
    }
}

export default Cell;
