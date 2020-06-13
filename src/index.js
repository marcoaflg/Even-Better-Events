import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from './pages/Home';
import Event from './pages/Event/Event';
const theme = createMuiTheme({
  palette: {
    primary: { main: "#009688" },
    secondary: { main: "#004d40" },
    type: "dark"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <React.StrictMode>
  <CssBaseline />
    <Home />
  </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);
