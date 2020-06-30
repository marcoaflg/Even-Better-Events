import React from 'react';
import './styles.css';
import HeaderIn from '../../components/HeaderIn';
import LatNav from '../../components/LatNav';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Perfil/styles.css"
import EventImg from '../../assets/img/past.events/hackfest.jpeg'
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

    return (
        <div>
            <HeaderIn />
            <LatNav />


            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item lg={12}>
                        <Paper className={classes.title} ><h1>Hacktober Fest</h1></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <img alt="User" className={classes.eventAvatar} src={EventImg} />
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} ><h3>Descrição do Evento<br /> Evento onde os participantes programam uma festa \o/</h3></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Criado por: Vinicius Jacik</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} >Redes sociais</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} >Endereço: Av. das Cataratas, 1118 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Sala: 303. </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Data: 25/12/2020</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Horário: Vide Palestras</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} >Palestras e detalhes</Paper>{ /* Colocar aqui palestra com data e horario(inicio/fim), tema, palestrante, descrição, localização (sala, bloco, etc) Fazer um card de preview*/}
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


                </Grid>
            </div>

            <Footer />
        </div>
    );
}