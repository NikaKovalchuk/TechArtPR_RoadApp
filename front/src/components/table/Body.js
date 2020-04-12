import React, {Component} from 'react';
import TableBody from '@material-ui/core/TableBody';

import Row from "./Row";

class Body extends Component {
    render() {
        const {data} = this.props;
        return (
            <TableBody>
                {data && data.map(row => <Row key={row.id} row={row} {...this.props}/>)}
            </TableBody>
        );
    }
}

export default Body;
