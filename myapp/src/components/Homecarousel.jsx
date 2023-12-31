import React, { useState } from "react";
import right_arrow from "../images/next.png";
import { Link } from "react-router-dom";

const imageTextData = [
  {
    text: "YELLOW1",
    image: "https://res.cloudinary.com/dkm3kczin/image/upload/v1692591963/home_yellow_enlarged_eo5jcu.png",
  },
  {
    text: "YELLOW2",
    image: "https://res.cloudinary.com/dkm3kczin/image/upload/v1692591963/home_yellow_enlarged_eo5jcu.png",
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
        overflow: "hidden",
      }}
    >
      <div
        className="text-container"
        style={{ flex: 1, marginTop: "-7vw", marginLeft: "12.66vw" }}
      >
        <p
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginTop:"9vw"
          }}
        >
          <span style={{ color: "black", fontFamily: "Hiragino Sans Bold",
            fontSize: "4.05vw",marginBottom: "1em" }}>We are...</span>
          {imageTextData[currentIndex].text === "YELLOW1" ? (
            <span style={{ color: "black", fontFamily:"Zabal DEMO", fontSize:"1.74vw", textAlign: "left",
            display: "flex", flexDirection: "column"}}>Yellow1<span style={{fontFamily:"Zabal Bold", fontSize:"1.74vw",paddingTop: "1.5em"}}>Dolor sit amet</span></span>
            
          ) : (
            <span style={{ color: "black", fontFamily:"Zabal DEMO", fontSize:"1.74vw", textAlign: "left",
            display: "flex", flexDirection: "column"}}>Yellow2<span style={{fontFamily:"Zabal Bold", fontSize:"1.74vw",paddingTop: "1.5em"}}>Dolor sit amet</span></span>
          )}
          <Link to="/about" style={{ color: "black", fontFamily:"Zabal DEMO", fontSize:"1.3vw", textAlign: "left", display: "flex", flexDirection: "column", textDecoration: "none",border: "0.07vw solid rgba(35, 31, 32, 1)",width:"21.74vw", height:"2.9vw", whiteSpace: "nowrap", justifyContent:"center", alignItems:"center",marginTop:"10vw"  }}>Know more about us</Link>
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
          style={{ width: "24.05vw", height: "29.11vw", marginLeft: "6.33vw", marginBottom: "50px" }}
        />
        <img
          src={imageTextData[(currentIndex + 1) % imageTextData.length].image}
          alt="Next Slider"
          style={{
            position: "absolute",
            top: 0,
            left: "24.05vw",
            width: "70%",
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
          alt="Right Arrow"
        />
      </div>
    </div>
  );
}
