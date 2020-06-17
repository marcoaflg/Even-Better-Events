import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LatNav from '../../components/LatNav';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Slider />
      <LatNav />
      <Footer />
    </div>
  );
}

export default Home;
