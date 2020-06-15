import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import LatNav from '../../components/LatNav';
import BlocCards from '../../components/Cards/BlocCards';


function Event() {

    return (
        <div>
            <Header />
            <LatNav />
            <BlocCards />
        </div>
    );
}

export default Event;
