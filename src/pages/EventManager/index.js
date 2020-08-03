import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Perfil/styles.css"
import EventImg from '../../assets/img/past.events/hackfest.jpeg'
import Footer from '../../components/Footer'
import { Events } from '../../DataBaseExemplo/Events'
import { AuthSettings, Users } from '../../DataBaseExemplo/Users'

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
    title: {
        padding: theme.spacing(2),
        textAlign: 'Left',
        color: theme.palette.text.secondary,
        height: '100%',
        zIndex: "0",
        margin: '0',
    },
    eventAvatar: {
        width: '22.5vw',
        height: '13vw'
    },
}));


export default function EventManager() {

    const classes = useStyles();
    const Id = 0;

    return (
        <div>
            <Header />
            <LatNav />


            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item lg={12}>
                        <Paper className={classes.title} ><h1>{Events[Id].Name}</h1></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <img alt="User" className={classes.eventAvatar} src={Events[Id].Image} />
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} ><h3>Descrição do Evento</h3>{Events[Id].Description}</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Criado por: {Events[Id].CreatedBy} </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} >Redes sociais</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} >{Events[Id].Adress} </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Data: {Events[Id].StartingDate} </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Horário: {Events[Id].Schedule}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} >Palestras e detalhes</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} >*Content*</Paper>{ /* Colocar aqui palestra com data e horario(inicio/fim), tema, palestrante, descrição, localização (sala, bloco, etc) Fazer um card de preview*/}
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Participantes</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} ></Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Adicionar lista de participantes</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} >*Colocar o view info dos participantes*</Paper>
                    </Grid>


                </Grid>
            </div>

            <Footer />
        </div>
    );
}