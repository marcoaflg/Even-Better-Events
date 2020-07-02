import React from 'react';
import './styles.css';
import HeaderIn from '../../components/HeaderIn';
import LatNav from '../../components/LatNav';
import BlocCards from '../../components/Cards/BlocCards';
import Footer from '../../components/Footer'
import SingleEvent from '../../components/SingleEvent'
import GoTop from '../../components/GoTop'

function Event() { 

    return (
        <div>
            <HeaderIn />
            <GoTop />
            <SingleEvent />
            <LatNav />
        
            <BlocCards />
            <Footer />
        </div>
    );
}

export default Event;
