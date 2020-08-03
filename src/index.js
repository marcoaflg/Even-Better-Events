import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Home from './pages/Home';
// import Event from './pages/Event/Event';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#009688" },
    secondary: { main: "#004d40" },
    type: "dark"
  }
});

ReactDOM.render(
  <BrowserRouter>
  <MuiThemeProvider theme={theme}>
  <React.StrictMode>
  <CssBaseline />
    <Routes />
  </React.StrictMode>
  </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
