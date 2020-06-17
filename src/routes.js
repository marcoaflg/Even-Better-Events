import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingUp from './pages/SingUp';
import SingIn from './pages/SingIn';
import Event from './pages/Event';
import Perfil from './pages/Perfil';
import DataPage from './pages/DataPage';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SingUp" component={SingUp} />
            <Route path="/SingIn" component={SingIn} />
            <Route path="/Event" component={Event} />
            <Route path="/Perfil" component={Perfil} />
            <Route path="/DataPage" component={DataPage} />
        </ Switch>
    </BrowserRouter>
);

export default Routes;