import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/img/logoebevetor1.png';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LatNav from '../../components/LatNav';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  
  
  
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <a href="/" onClick={<img src={Logo} alt="logo" />}>
            <img src={Logo} alt="logo" />
          </a>
          <h2>Codigo de confirmação do evento<br /> EventName</h2 >
          <h2>1234 5678</h2>
      </div>
      <LatNav />
    </Container>
  );
}