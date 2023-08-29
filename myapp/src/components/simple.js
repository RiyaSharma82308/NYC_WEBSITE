import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import img1 from '../images/scarousel1.png';
import img2 from '../images/scarousel2.png';
import img3 from '../images/scarousel3.png';
import nextButtonImage from '../images/next.png';
import prevButtonImage from '../images/prev.png';
import './ServicesCarousel.css'; // Import your CSS file

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 0
  }
};

const images = [
  img1,
  img2,
  img3,
  img1
];

const textStyles = {
  fontFamily: "Zabal DEMO",
  fontSize: "1.3vw",
  textAlign: "center",
};

const boxStyles = {
  border: "0.07vw solid black",
  padding: "0.58vw",
  backgroundColor: "white",
  marginTop: "2vw",
  width: "21.74vw"
};

const imageTexts = [
  "Consultancy",
  "Research",
  "Investment"
];

const Simple = ({ deviceType }) => {
  const carouselRef = React.useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      customButtonGroup={<div className="custom-button-group2">
        <CustomPrevButton onClick={handlePrev} />
        <CustomNextButton onClick={handleNext} />
      </div>}
      showDots={false}
      renderButtonGroupOutside={true}
      arrows={false}
      ref={carouselRef}
    >
      {images.map((image, index) => {
        return (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <Image
                draggable={false}
                style={{ width: "17.39vw", height: "17.39vw" }}
                src={image}
              />
            </div>
            <div style={{ ...boxStyles, display: "inline-block" }}>
              <div style={textStyles}>{imageTexts[index]}</div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

const CustomNextButton = ({ onClick }) => (
  <button onClick={onClick} className="custom-button2">
    <img id='next' src={nextButtonImage} alt="Next" />
  </button>
);

const CustomPrevButton = ({ onClick }) => (
  <button onClick={onClick} className="custom-button2">
    <img id='prev' src={prevButtonImage} alt="Previous" />
  </button>
);

export default Simple;
