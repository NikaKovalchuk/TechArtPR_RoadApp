import React, {Component} from 'react';
import TextField from './TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";

class TextArea extends Component {
    render() {
        const {value, onInput, title} = this.props;
        return (
            <FormControlLabel
                control={
                    <TextField
                        name={!!title ? title : "description"}
                        label={!!title ? title : "Описание"}
                        onInput={onInput}
                        value={value}
                        multiline
                        rows={10}
                        rowsMax={20}
                    />
                }
            />
        )
    }
}

export default TextArea;
