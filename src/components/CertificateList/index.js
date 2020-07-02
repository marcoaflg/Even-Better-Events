import React from 'react'
import MiniCard from '../MiniCard'
import { AuthSettings, Users } from '../../DataBaseExemplo/Users'
import { Events } from '../../DataBaseExemplo/Events'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
      zIndex: "0",
    },
  }));


export default function CertificateList() {

    const items = []

    for (let index = 0; index < 6; index++) {
        items.push(
            <MiniCard
                    image={Events[index].Image}
                    title={Events[index].Name}
                    link='../../RandomFiles/certificado.txt'
                    certificateName='Certificado.doc'
                    receivedDate="01/01/2020"
                  />
        )
    }

    const classes = useStyles();

    return (
        <Paper className={classes.paper} >
        <Grid item xs={12} container direction="row" spacing={2}>
            {items}
        </Grid>
        </Paper>
    )
}