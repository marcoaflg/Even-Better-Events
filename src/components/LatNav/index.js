import React from 'react';
import './styles.css';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import PersonIcon from '@material-ui/icons/Person';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import LanguageIcon from '@material-ui/icons/Language';
import Arrow from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';



const NavButton = ({onClick}) => 
  <button className="nav-but" 
   onClick={onClick}>
      <Arrow fontSize="Small" />
  </button>

const Dropdown = ({show}) => 
<div style={{visibility: show ? "visible" : "hidden",}}>

<div className="nav-comp"> <TouchAppIcon fontSize="Large"/><br></br>Confirmar presença</div>
      <div className="nav-comp"> <PersonIcon fontSize="Large"/><br></br>Perfil</div>
      <Link to="/Event" style={{ textDecoration: 'none' }}><div className="nav-comp"> <EventAvailableIcon fontSize="Large"/><br></br>Eventos</div></ Link>
      <div className="nav-comp"> <CardMembershipIcon fontSize="Large"/><br></br>Certificados</div>
      <div className="nav-comp"> <LanguageIcon fontSize="Large"/><br></br>Wilian Criador de Galaxias</div>
     
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
      <div className="LatNav">
        <Dropdown show={this.state.dropdownVisible} />
        <NavButton onClick={this.toggleDropdown} />
    
      </div>
    );
  }
}