import React from 'react';
import './styles.css';
import PersonIcon from '@material-ui/icons/Person';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Arrow from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import EventAutentication from '../EventAutentication'
import { EventsSettings, Events } from '../../DataBaseExemplo/Events'


import GoTop from '../GoTop'

const CodeGeneratorButton = () => {
  if (EventsSettings.EventoOcorrendo) {
    return (
      <Link to="/CodeGenerator" style={{ textDecoration: 'none', color: 'white' }}><div className="nav-comp"> <EventAvailableIcon fontSize="Large" /><br></br>Gerar código do evento</div></ Link>
    )
    
  }
  else {
    return(
    <div></div>
    )
  }
}

const NavButton = ({ onClick }) =>
  <button className="nav-but"
    onClick={onClick}>
    <Arrow fontSize="Small" />
  </button>

const Dropdown = ({ show }) =>
  <div style={{ visibility: show ? "visible" : "hidden" }}>

    <CodeGeneratorButton />
    <div className="nav-comp"> <EventAutentication /></div>
    <Link to="/Perfil" style={{ textDecoration: 'none', color: 'white' }}><div className="nav-comp"> <PersonIcon fontSize="Large" /><br></br>Perfil</div></ Link>
    <Link to="/Event" style={{ textDecoration: 'none', color: 'white' }}><div className="nav-comp"> <EventAvailableIcon fontSize="Large" /><br></br>Eventos</div></ Link>
  </div>




export default class Parent extends React.Component {
  state = {
    dropdownVisible: true,
  };

  toggleDropdown = () => this.setState(state => ({
    dropdownVisible: !state.dropdownVisible,
  }));



  render() {
    return (
      <div>
        <GoTop />
        <div className="LatNav" style={{ zIndex: this.state.dropdownVisible ? "6" : "-1" }}>
          <Dropdown show={this.state.dropdownVisible} />


        </div>
        <NavButton onClick={this.toggleDropdown} />
      </div>
    );
  }
}