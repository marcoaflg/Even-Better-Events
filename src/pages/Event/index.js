import React from 'react';
import './styles.css';
import HeaderIn from '../../components/HeaderIn';
import LatNav from '../../components/LatNav';
import BlocCards from '../../components/Cards/BlocCards';
import Footer from '../../components/Footer'
import SingleEvent from '../../components/SingleEvent'

function Event() { 

    return (
        <div>
            <HeaderIn />
            <SingleEvent />
            <LatNav />
            <BlocCards />
            <Footer />
        </div>
    );
}

export default Event;
