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
<div style={{visibility: show ? "hidden" : "visible"}}>









<div className="nav-comp" onClick={(e) => { if (window.confirm('Voce tem certeza que quer confirmar presença neste evento??')) this.deleteItem(e)}}> <TouchAppIcon fontSize="Large"/><br></br>Confirmar presença</div>
      <Link to="/Perfil" style={{ textDecoration: 'none' , color: 'white'}}><div className="nav-comp"> <PersonIcon fontSize="Large"/><br></br>Perfil</div></ Link>
      <Link to="/Event" style={{ textDecoration: 'none' , color: 'white'}}><div className="nav-comp"> <EventAvailableIcon fontSize="Large"/><br></br>Eventos</div></ Link>
      <Link to="/Certificates" style={{ textDecoration: 'none', color: 'white' }}><div className="nav-comp"> <CardMembershipIcon fontSize="Large"/><br></br>Certificados</div></Link>
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
      <div className="LatNav" style={{ zIndex: this.state.dropdownVisible ? "1" : "0"}}>
        <Dropdown show={this.state.dropdownVisible} />
        <NavButton onClick={this.toggleDropdown} />
    
      </div>
    );
  }
}