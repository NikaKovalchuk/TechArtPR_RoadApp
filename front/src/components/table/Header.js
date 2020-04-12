import React, {Component} from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from "./StyledTableCell";

class Header extends Component {
    render() {
        const {schema} = this.props;
        return (
            <TableHead>
                <TableRow>
                    {schema.map(column => (
                        <StyledTableCell
                            key={column.id}
                            align={column.align}
                            style={{minWidth: column.minWidth}}>
                            {column.label.toUpperCase()}
                        </StyledTableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }
}

export default Header;
