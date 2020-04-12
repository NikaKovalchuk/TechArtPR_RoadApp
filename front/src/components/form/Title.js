import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

class Title extends Component {
    render() {
        const {title, onEdit, onRemove, classes} = this.props;
        return (
            <Container className={classes.info} maxWidth="xl">
                {title && <Typography variant={"h4"} className={classes.title}>{title}</Typography>}
                {onEdit &&
                <Button variant="contained" className={classes.button} onClick={onEdit}>Редактировать</Button>}
                {onRemove && <Button variant="contained" className={classes.button} onClick={onRemove}>Удалить</Button>}
            </Container>
        )
    }
}

export default Title;
