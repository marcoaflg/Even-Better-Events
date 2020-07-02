import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Perfil/styles.css"
import Avatar from '@material-ui/core/Avatar';
import PreviewCard from '../../components/CardPreview'
import Footer from '../../components/Footer'
import { Events } from '../../DataBaseExemplo/Events'
import { AuthSettings, Users } from '../../DataBaseExemplo/Users'
import MiniCard from '../../components/MiniCard'
import hackfestImg from '../../assets/img/past.events/hackfest.jpeg'

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

          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ display: 'flex' }}>
              <Grid item xs={12} container direction="row" spacing={2}>

                <PreviewCard
                  alt={Events[0].Name}
                  img={Events[0].Image}
                  title={Events[0].Name}
                  description={Events[0].Description}
                />
                <PreviewCard
                  alt={Events[1].Name}
                  img={Events[1].Image}
                  title={Events[1].Name}
                  description={Events[1].Description}
                />
                <PreviewCard
                  alt={Events[2].Name}
                  img={Events[2].Image}
                  title={Events[2].Name}
                  description={Events[2].Description}
                />
                <PreviewCard
                  alt={Events[3].Name}
                  img={Events[3].Image}
                  title={Events[3].Name}
                  description={Events[3].Description}
                />
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
                    <Paper className={classes.paper} >
                            <Grid container spacing={0}>
                                <Grid item xs={3} >
                                    <MiniCard 
                                        image= {hackfestImg}
                                        title= {Events[0].Name}
                                        link='../../RandomFiles/certificado.txt'
                                        certificateName= 'Certificado.doc'
                                        receivedDate= "01/01/2020"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                <MiniCard 
                                        image= {hackfestImg}
                                        title="Hackfest 2019"
                                        link='../../RandomFiles/certificado.txt'
                                        certificateName= 'Certificado.doc'
                                        receivedDate= "02/01/2020"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                <MiniCard 
                                        image= {hackfestImg}
                                        title="Hackfest 2019"
                                        link='../../RandomFiles/certificado.txt'
                                        certificateName= 'Certificado.doc'
                                        receivedDate= "03/01/2020"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                <MiniCard 
                                        image= {hackfestImg}
                                        title="Hackfest 2019"
                                        link='../../RandomFiles/certificado.txt'
                                        certificateName= 'Certificado.doc'
                                        receivedDate= "04/01/2020"
                                    />
                                </Grid>
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
