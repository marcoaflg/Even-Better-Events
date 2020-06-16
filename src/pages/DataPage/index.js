import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import PerfilLatNav from '../../components/PerfilLatNav';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    padding: 20,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function DataPage() {

  const classes = useStyles();

  return (

    <div className="Perfil">
      <Header />
      <LatNav />
      <PerfilLatNav />

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <p>Todas as informações aqui solicitadas são para uso de validação do perfil, cadastro em eventos, certificação e emergencias médicas.<br />
            Em caso de dúvidas, contate a nossa equipe.</p>
            </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Nome"
              type="text"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Descrição do perfil, títulos, conquistas, etc."
              multiline
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="Cidade"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              placeholder="Endereço"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              placeholder="Nº"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="Bairro"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="CEP"
              type="tel"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              placeholder="(XX)"
              type="tel"
              inputProps={{
                maxlength:"2",
                minlength: "2",
              }}
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              placeholder="Telefone"
              type="tel"
              inputProps={{
                maxlength:"9",
                minlength: "9",
              }}
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="CPF"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="RG"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="Cargo"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              placeholder="Instituição de Ensino"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Cuidados Médicos (diabetes, hipertensão, etc.)"
              id="outlined-margin-none"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}

export default DataPage;
