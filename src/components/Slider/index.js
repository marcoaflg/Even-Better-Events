import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider';
import image1 from '../../assets/img/Banner-Evento-Sao-Paulo-Lancamento-Livro.jpg'
import image2 from '../../assets/img/banner02.jpg';


class Slider extends Component {
  render() {
    return (
        <BackgroundSlider
          images={[image1, image2]}
          duration={10}
          transition={2}
        />
    )
  }
}

export default Slider;