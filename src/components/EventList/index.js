import React from 'react'
import PreviewCard from '../CardPreview'
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

export default function EventList() {

    const items = []

    for (let index = 0; index < 6; index++) {
        items.push(
            <PreviewCard
                alt={Events[index].Name}
                img={Events[index].Image}
                title={Events[index].Name}
                description={Events[index].Description}
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