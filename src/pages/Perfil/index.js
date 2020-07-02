import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Perfil/styles.css"
import Avatar from '@material-ui/core/Avatar';
import Footer from '../../components/Footer'
import { Events } from '../../DataBaseExemplo/Events'
import { AuthSettings, Users } from '../../DataBaseExemplo/Users'
import EventList from '../../components/EventList'
import CertificateList from '../../components/CertificateList'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
    marginLeft: '3vw',
    marginRight: '3vw',
    marginTop: '2%',
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
      <Header />
      <LatNav />


      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper} >{Users[AuthSettings.UserId].Position}</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} >Perfil</Paper>
          </Grid>
          <Grid item xs={3}>
            <Avatar alt="User" className={classes.avatar} src={Users[AuthSettings.UserId].Image} />
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} >{Users[AuthSettings.UserId].Description}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} >{Users[AuthSettings.UserId].Name}</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper} >Redes sociais</Paper>
          </Grid>
          <Typography gutterBottom variant="h5" component="h2" noWrap>
            Eventos recentes
          </Typography>
          <Grid item xs={12}>

            <EventList />

          </Grid>
          <Typography gutterBottom variant="h5" component="h2" noWrap>
            Certificados
          </Typography>
          <Grid item xs={12}>

            <CertificateList />

          </Grid>
          
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
