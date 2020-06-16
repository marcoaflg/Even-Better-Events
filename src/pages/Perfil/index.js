import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import PerfilLatNav from '../../components/PerfilLatNav';
import ContentGrid from '../../components/GridDoPerfil';

function Perfil() {
  return (
    <div className="Perfil">
        <Header />
        <ContentGrid />
        <LatNav />
        <PerfilLatNav />
    </div>
  );
}

export default Perfil;
