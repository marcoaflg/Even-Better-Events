import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../assets/img/01.jpeg'
import image2 from '../../assets/img/02.jpeg';
import image3 from '../../assets/img/03.jpeg';


class Slider extends Component {
  render() {
      return (
          <Carousel autoPlay>
              <div>
                  <img alt="" src={image1}/>
              </div>
              <div>
                  <img src={image2} />
              </div>
              <div>
                  <img src={image3} />
              </div>
          </Carousel>
      );
  }
};

export default Slider;