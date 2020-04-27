import React, {Component} from 'react';
import { TextField, Container, Typography } from '@material-ui/core';

class Field extends Component {
    render() {
        const {label, helpText, classes} = this.props;
        return (
            <Container>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id={label}
                    {...this.props}
                />
                {helpText && <Typography className={classes.help}>{helpText}</Typography>}
            </Container>
        )
    }
}

export default Field;
