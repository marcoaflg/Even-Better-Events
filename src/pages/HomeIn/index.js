import React from 'react';
import './styles.css';
import HeaderIn from '../../components/HeaderIn';
import Slider from '../../components/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LatNav from '../../components/LatNav';
import Footer from '../../components/Footer';
import CardBlock from '../../components/Cards/BlocCards.js'

function HomeIn() {
    return (
        <div className="HomeIn">
            <HeaderIn />
            <LatNav />
            <Slider />
           
            <CardBlock />
            <Footer />
        </div>
    );
}

export default HomeIn;