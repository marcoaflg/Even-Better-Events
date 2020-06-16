import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../../components/GridDoPerfil/styles.css"
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../../assets/img/avatar/vinicius.jpeg'
import EventImg from '../../assets/img/past.events/hackfest.jpeg'
import PreviewCard from '../CardPreview'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
        marginLeft: '3vw',
        marginRight: '3vw'
    },
    avatar: {
        width: '13vw',
        height: '13vw',
        left: '7vw'
    },
}));

export default function Parent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Perfil</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Avatar alt="User" className={classes.avatar} src={AvatarImg} />
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper} style={{ paddingLeft: 0, marginLeft: 0 }} >Descrição do perfil<br /> Estudante de Engenharia de Software e entusiasta de arduíno e video-games</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} style={{ paddingRight: 0, marginRight: 0 }} >Estudante, Vinicius Jacik</Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper} style={{ paddingLeft: 0, marginLeft: 0 }}>Redes sociais</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} >
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
    );
}