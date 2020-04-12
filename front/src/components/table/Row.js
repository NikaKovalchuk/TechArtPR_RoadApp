import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import Cell from "./Cell";

class Row extends Component {

    render() {
        const {row, schema, onClick} = this.props;
        return (
            <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.code}
                onClick={() => onClick && onClick(row.id)}
            >
                {schema.map(column =>
                    <Cell
                        key={column.id}
                        value={row[column.id]}
                        column={column}
                    />)}
            </TableRow>
        );
    }
}

export default Row;
