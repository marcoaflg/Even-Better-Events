import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../assets/img/past.events/hackfest.jpeg'
import image2 from '../../assets/img/past.events/gdgfoz.jpeg';
import image3 from '../../assets/img/past.events/frontendday.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './styles.css';


class Slider extends Component {
    render() {
        return (
            <>
                <CssBaseline />
                <Container className="carousel" maxWidth="xl">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        useKeyboardArrows
                        emulateTouch
                        dynamicHeight
                        showThumbs={false}
                        showStatus={false}
                    >
                        <div>
                            <img alt="/" src={image1} />
                        </div>
                        <div>
                            <img alt="/" src={image2} />
                        </div>
                        <div>
                            <img alt="/" src={image3} />
                        </div>
                    </Carousel>
                </Container>
            </>
        );
    }
};

export default Slider;