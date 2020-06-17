import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles({
  root: {
    maxWidth: '200px',
    marginLeft:'1vw',
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="120"
          src= {props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hacktober Fest 2019
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Uma puta festa de programação
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        
          <InputIcon /> Mais detalhes
            
        </Button>
      </CardActions>
    </Card>
  );
}