import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LatNav from '../../components/LatNav';
import Footer from '../../components/Footer';
import CardBlock from '../../components/Cards/BlocCards.js'
function Home() {
  return (
    <div className="Home">
      <Header />
      <Slider />
      <LatNav />
      <CardBlock />
      <Footer />
    </div>
  );
}

export default Home;
