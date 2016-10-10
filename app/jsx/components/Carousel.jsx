import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          { breakpoint: 768, settings: { slidesToShow: 1 } },
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 500, settings: 'unslick' }
      ]
    }
    return (
      <div className='container'>
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
    }
};

module.exports = Carousel;
