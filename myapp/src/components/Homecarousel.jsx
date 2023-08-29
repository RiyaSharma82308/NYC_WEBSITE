import React, { useState, Component } from "react";
import right_arrow from "../images/next.png";
import { Link } from "react-router-dom";
const imageTextData = [
  {
    text: "Our Vision...",
    image:
      "https://res.cloudinary.com/dkm3kczin/image/upload/v1692592049/home_violet_enlarged_hkj4fc.png",
  },
  {
    text: "Our Mission...",
    image:
      "https://res.cloudinary.com/dkm3kczin/image/upload/v1692591963/home_yellow_enlarged_eo5jcu.png",
  },
];
export default function Homecarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageTextData.length);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "40.51vw",
        top: "73.42vw",
        backgroundColor: "#EBE6CC",
        // position: "relative",
        overflow: "hidden", 
      }}
    >
      <div
        className="text-container"
        style={{ flex: 1, marginTop: "0vw", marginLeft: "12.66vw" }}
      >
        <p
          style={{
            fontFamily: "Hiragino Sans",
            fontSize: "4.05vw",
            fontWeight: "800",
            lineHeight: "6.08vw",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          {imageTextData[currentIndex].text}
        </p>
      </div>
      <div
        className="image-container"
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <img
          src={imageTextData[currentIndex].image}
          alt="Slider"
          style={{ width: "24.05vw", height: "29.11vw", marginLeft: "6.33vw" , marginBottom:"50px"}}
        />
        <img
          src={imageTextData[(currentIndex + 1) % imageTextData.length].image}
          alt="Next Slider"
          style={{
            position: "absolute",
            top: 0,
            left: "24.05vw", // Adjust as needed
            width: "70%", // Adjust the visible portion
            height: "29.11vw",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </div>
      <div>
        <img
          src={right_arrow}
          onClick={handleNext}
          style={{
            marginTop: "34.81vw",
            marginRight: "2.53vw",
            width: "2.53vw",
            height: "2.15vw",
          }}
        ></img>
      </div>
    </div>
  );
}