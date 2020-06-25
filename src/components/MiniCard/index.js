import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
    },
    media: {
        height: 100,
    },
});

export default function MiniCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Fazer download do certificado"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                        {props.title}
                    </Typography>
                    Recebido: {props.receivedDate}

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={props.link} download={props.certificateName} >
                    Baixar certificado
            </Button>
            </CardActions>
        </Card>
    );
}