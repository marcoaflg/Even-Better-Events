import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import image1 from '../../assets/img/Banner-Evento-Sao-Paulo-Lancamento-Livro.jpg'
import image2 from '../../assets/img/banner02.jpg';
    
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight:350,
  
  },
});

export default function EventCards(props) {
  const classes = useStyles();

  return (
    <div className="EventCards">

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Imagem Evento"
            height="140"
            image={image1}
            title={props.titleimg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {props.TittleEvent}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.DescEvent}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          <FavoriteIcon />
          </Button>
          <Button size="small" color="primary">
            Compartilhar
          </Button>
          <Button size="small" color="primary">
            Saber mais
          </Button>
         
        </CardActions>

      </Card>

    </div>
    
  );
}
