import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import PerfilLatNav from '../../components/PerfilLatNav';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Perfil/styles.css"
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../../assets/img/avatar/vinicius.jpeg'
import EventImg from '../../assets/img/past.events/hackfest.jpeg'
import PreviewCard from '../../components/CardPreview'
import Footer from '../../components/Footer'

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
    height: '13vw',
    left: '7vw'
  },
}));

function Perfil() {

  const classes = useStyles();

  return (
    <div className="Perfil">
      <Header />
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
            <Paper className={classes.paper} >Vinicius Jacik</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} >Redes sociais</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ display: 'flex' }}>
              <Grid item xs={12} container direction="row" spacing={2}>
                <PreviewCard
                  alt="Hacktober fest"
                  img={EventImg}
                  title="Hacktober Fest 2019"
                />
                <PreviewCard
                  alt="test"
                  img={EventImg}
                  title="test"
                />
                <PreviewCard
                  alt="test"
                  img={EventImg}
                  title="test"
                />
                <PreviewCard
                  alt="test"
                  img={EventImg}
                  title="test"
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
