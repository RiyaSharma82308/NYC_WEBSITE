import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Homecarousel.css';

import prevArrowImage from '../images/prev.png';
import nextArrowImage from '../images/next.png';

export default class Homecarousel extends Component {
  render() {
    return (
      <div>
        <Carousel interval={5000} prevIcon={<img id='icprev' src={prevArrowImage} alt="Previous" />} nextIcon={<img id='icnext' src={nextArrowImage} alt="Next" />}>
          <Carousel.Item>
            <div className='carousel-item-content'>
              <span className='ictagline'>NYC Tagline 1</span>
              <img src={require('../images/aboutcar1.png')}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='carousel-item-content'>
              <span className='ictagline'>NYC Tagline 2</span>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='carousel-item-content'>
              <span className='ictagline'>NYC Tagline 3</span>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
