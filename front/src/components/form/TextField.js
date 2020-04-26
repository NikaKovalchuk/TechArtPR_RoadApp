import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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
