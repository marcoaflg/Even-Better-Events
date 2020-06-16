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
  <button className="nav-but2" 
   onClick={onClick}>
      <Arrow fontSize="Small" />
  </button>

const Dropdown = ({show}) => 
<div style={{visibility: show ? "visible" : "hidden",}}>

<div className="nav-comp2"> <TouchAppIcon fontSize="Large"/><br></br>Meu perfil</div>
      <Link to="/Perfil" style={{ textDecoration: 'none' , color: 'white'}}><div className="nav-comp2"> <PersonIcon fontSize="Large"/><br></br>Meus dados</div></ Link>
      <Link to="/Event" style={{ textDecoration: 'none' , color: 'white'}}><div className="nav-comp2"> <EventAvailableIcon fontSize="Large"/><br></br>Histórico de eventos</div></ Link>
      <div className="nav-comp2"> <CardMembershipIcon fontSize="Large"/><br></br>Certificados</div>
      <div className="nav-comp2"> <LanguageIcon fontSize="Large"/><br></br>Sei lá o que escrever</div>
     
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
      <div className="LatNav2">
        <Dropdown show={this.state.dropdownVisible} />
        <NavButton onClick={this.toggleDropdown} />
    
      </div>
    );
  }
}