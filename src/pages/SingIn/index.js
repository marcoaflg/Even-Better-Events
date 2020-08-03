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


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Mantenha-me conectado"
          />
          <Link to="/HomeIn" style={{ textDecoration: 'none' }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Entrar
          </Button>
          </Link>
          <Grid container>
            <Grid item xs>
              <Link to="#" style={{ textDecoration: 'none', color: 'white' }}>
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/SingUp" style={{ textDecoration: 'none', color: 'white' }}>
                Não tem uma conta? Cadastre!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <LatNav />
    </Container>
  );
}