import React, {Component} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


class CheckboxList extends Component {
    render() {
        const {items, onChange, checked} = this.props;
        return (
            <div>
                {items.map(item => (
                    <FormControlLabel
                        key={item.id}
                        control={
                            <Checkbox
                                checked={checked.includes(item.id)}
                                onChange={onChange}
                                name={item.id}
                            />
                        }
                        label={item.title}
                    />
                ))}
            </div>
        )
    }
}

export default CheckboxList;
