import React from 'react';
import './styles.css';
import HeaderGuest from '../../components/HeaderGuest';
import Slider from '../../components/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LatNav from '../../components/LatNav';
import Footer from '../../components/Footer';
import CardBlock from '../../components/Cards/BlocCards.js'
function Home() {
  return (
    <div className="Home">
      <HeaderGuest />
      <LatNav />
      <Slider />     
      <CardBlock />
      <Footer />
    </div>
  );
}

export default Home;
