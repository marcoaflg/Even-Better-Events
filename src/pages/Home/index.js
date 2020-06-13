import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import LatNav from '../../components/LatNav/LatNav';
import EventCards from '../../components/Cards/Cards';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Slider />
      <LatNav />
      
    </div>
  );
}

export default Home;
