import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';


class Field extends Component {

    render() {
        const {label} = this.props;
        return (
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={label}
                {...this.props}
            />
        )
    }
}

export default Field;
