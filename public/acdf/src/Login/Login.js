import React, { Fragment, useState } from "react";
import { TextField, Button, Container, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    marginTop: "5ch",
  },
  inputField: {
    display: "block",
    marginTop: "5ch",
    width: "25ch",
  },
}));

function attemptLogin(usuario, password) {
  axios
    .post("http://127.0.0.1:3000/login", { email: usuario, password: password })
    .then((response) => {
      window.localStorage.setItem("_token", response.data.token);
      window.location.reload();
    })
    .catch((error) => {
      return false;
    });
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function Login() {
  const classes = useStyles();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Container maxWidth="sm">
        <h1>Aplicacion para el control digital y formatos del DSC</h1>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.inputField}
            type="password"
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {{if (!attemptLogin(usuario, password)) {
            setOpen(true)
          }}
            
          }}
        >
          Iniciar Sesión
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert severity="error">
            ¡Usuario o contraseña incorrectos!
          </Alert>
        </Snackbar>
      </Container>
    </Fragment>
  );
}

export default Login;
