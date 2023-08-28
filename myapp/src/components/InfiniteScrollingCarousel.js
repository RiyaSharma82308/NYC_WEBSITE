import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InfiniteScrollingCarousel = ({ images }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed:1500, // Adjust the auto-scroll speed (lower value for faster scrolling)
    infinite: true,
    speed: 1500, // Adjust the transition speed
    slidesToShow: 3.5, // Display 3.5 images at a time
    slidesToScroll: 1, // Scroll one image at a time
    initialSlide: images.length - 3,
    centerMode: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, idx) => (
        <div key={idx}>
          <img  style={{ maxHeight: '330px', maxWidth: '100%' }} src={image} alt={`Slide ${idx}`} />
        </div>
      ))}
    </Slider>
  );
};

export default InfiniteScrollingCarousel;
