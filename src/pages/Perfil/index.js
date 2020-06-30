import React from 'react';
import './styles.css';
import HeaderIn from '../../components/HeaderIn';
import LatNav from '../../components/LatNav';
import PerfilLatNav from '../../components/PerfilLatNav';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Perfil/styles.css"
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../../assets/img/avatar/marco.jpg'
import EventImg from '../../assets/img/past.events/hackfest.jpeg'
import PreviewCard from '../../components/CardPreview'
import Footer from '../../components/Footer'
import {Events} from '../../DataBaseExemplo/Events'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
    marginLeft: '3vw',
    marginRight: '3vw',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    zIndex: "0",
  },
  avatar: {
    width: '13vw',
    height: 'auto',
    left: '5vw'
  },
}));

function Perfil() {

  const classes = useStyles();

  return (
    <div className="Perfil">
      <HeaderIn />
      <LatNav />
      <PerfilLatNav />

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper} >Estudante</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} >Perfil</Paper>
          </Grid>
          <Grid item xs={3}>
            <Avatar alt="User" className={classes.avatar} src={AvatarImg} />
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} >Descrição do perfil<br /> Estudante de Engenharia de Software e entusiasta de arduíno e video-games</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} >Marco Garcia</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} >Redes sociais</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ display: 'flex' }}>
              <Grid item xs={12} container direction="row" spacing={2}>

                <PreviewCard
                  alt={Events[0].Name}
                  img={Events[0].Image}
                  title={Events[0].Name}
                  description= {Events[0].Description}
                />
                <PreviewCard
                  alt={Events[1].Name}
                  img={Events[1].Image}
                  title={Events[1].Name}
                  description= {Events[1].Description}
                />
                <PreviewCard
                  alt={Events[2].Name}
                  img={Events[2].Image}
                  title={Events[2].Name}
                  description= {Events[2].Description}
                />
                <PreviewCard
                  alt={Events[3].Name}
                  img={Events[3].Image}
                  title={Events[3].Name}
                  description= {Events[3].Description}
                />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
