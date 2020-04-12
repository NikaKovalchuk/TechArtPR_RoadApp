import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import MaterialUiTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Header from "./Header";
import Body from "./Body";
import withStyles from "@material-ui/core/styles/withStyles";
import {tableStyles} from "../css/table";

class Table extends Component {
    render() {
        const {schema, classes} = this.props;
        return (
            <Paper className={classes.table}>
                <TableContainer>
                    <MaterialUiTable stickyHeader aria-label="sticky table">
                        <Header schema={schema}/>
                        <Body {...this.props}/>
                    </MaterialUiTable>
                </TableContainer>
            </Paper>
        );
    }
}

export default withStyles(tableStyles)(Table);
