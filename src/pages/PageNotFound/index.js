import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LatNav from '../../components/LatNav';
import ErrorPage from '../../components/ErrorPage';
import './styles.css';

function PageNotFound() {
    return (
        <div>
            <Header />
            <LatNav />
            <ErrorPage />
          
            <Footer />
        </div>
    );
}

export default PageNotFound;