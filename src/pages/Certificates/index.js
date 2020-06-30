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
import MiniCard from '../../components/MiniCard'
import hackfestImg from '../../assets/img/past.events/hackfest.jpeg'
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
    paper2: {
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
            <HeaderIn />
            <LatNav />
            <PerfilLatNav />

            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Estudante</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper}  >Meus Certificados</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Avatar alt="User" className={classes.avatar} src={AvatarImg} />
                    </Grid>
                    <Grid item xs={9}>
                    <Paper className={classes.paper} >
                            <Grid container spacing={1}>
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
                    <Grid item xs={3}>
                        <Paper className={classes.paper} >Vinicius Jacik</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper}>Aguardando liberação</Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Perfil;
