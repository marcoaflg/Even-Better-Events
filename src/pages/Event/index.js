import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import BlocCards from '../../components/Cards/BlocCards';
import Footer from '../../components/Footer'
import SingleEvent from '../../components/SingleEvent'


function Event() { 

    return (
        <div>
            <Header />
            <LatNav />
            <SingleEvent />
           
        
            <BlocCards />
            <Footer />
        </div>
    );
}

export default Event;
