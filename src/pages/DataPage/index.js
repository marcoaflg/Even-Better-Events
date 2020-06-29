import React from 'react';
import './styles.css';
import HeaderIn from '../../components/HeaderIn';
import LatNav from '../../components/LatNav';
import PerfilLatNav from '../../components/PerfilLatNav';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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
      <HeaderIn />
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
              required
              fullWidth
              label="Nome Completo"
              placeholder="Nome"
              type="text"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Descrição do perfil, títulos, conquistas, etc."
              label="Descrição do perfil"
              multiline
              className={classes.textField}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              placeholder="Cidade"
              label="Cidade"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              required
              fullWidth
              placeholder="Endereço"
              label="Endereço"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              required
              fullWidth
              placeholder="Nº"
              label="Numero"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              placeholder="Bairro"
              label="Bairro"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              placeholder="CEP"
              label="CEP"
              type="tel"
              className={classes.textField}
              variant="outlined"
              inputProps={{
                maxlength: "9",
                minlength: "9",
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              required
              fullWidth
              placeholder="(XX)"
              label="(XX)"
              type="tel"
              inputProps={{
                maxlength: "2",
                minlength: "2",
              }}
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              required
              fullWidth
              placeholder="Telefone"
              type="tel"
              label="Telefone"
              inputProps={{
                maxlength: "9",
                minlength: "9",
              }}
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              placeholder="CPF"
              label="CPF"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              fullWidth
              placeholder="RG"
              label="RG"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              placeholder="Cargo"
              label="Cargo"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              placeholder="Instituição de Ensino"
              label="Instituição de Ensino"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              placeholder="Cuidados Médicos (diabetes, hipertensão, etc.)"
              label="Cuidados médicos"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Voltar ao Perfil
          </Button>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Salvar Alterações
          </Button>
          </Grid>
        </Grid>
      </div>
      
    </div>
  );
}

export default DataPage;
