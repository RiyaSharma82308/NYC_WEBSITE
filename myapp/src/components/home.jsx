import React, { useState, Component } from "react";
import homewhy1 from "../images/homewhy1.png";
import homewhy2 from "../images/homewhy2.png";
import homewhy3 from "../images/homewhy3.png";
import homescaling from "../images/homescaling.png";
import homeestate from "../images/homeestate.png";
import hometea from "../images/hometea.png";
import homerunway from "../images/homerunway.png";
import homestrips from "../images/homestrips.png";
import "./ImageWithText.css";
import NYC_scaling_small_1 from "../images/NYC_scaling_small_1.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import data from "../data/images.json";
import datayellow from "../data/images.json";
import Modal from "./Modal";
import Modalright from "./Modalright";

export default function Home() {
  // const defaultClickedImg = ;
  const defaultClickedImg =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692345141/NYC_scaling_small_1_odj2nj.png";
  const [clickedImg, setClickedImg] = useState(defaultClickedImg);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "rgba(235, 230, 204, 0.8)",
          display: "flex", // Use flexbox for layout
          flexDirection: "column", // Stack elements vertically
          alignItems: "flex-start", // Align items to the left
          height: "56.52vw",
          paddingLeft: "5%", // Add left padding for the container
          marginBottom: "2vw", // Add margin at the bottom to create space
        }}
      >
        <span
          style={{
            fontSize: "4.64vw",
            fontFamily: "Hiragino Sans",
            fontWeight: "bold",
            textAlign: "left", // Align text to the left
            maxWidth: "90%", // Limit the width of the text to maintain responsiveness
            marginTop: "11vw",
          }}
        >
          We are...
        </span>
        <span
          style={{
            fontFamily: "Zabal DEMO",
            fontSize: "1.74vw",
            fontWeight: "500", // Adjusted font weight
            textAlign: "left", // Align text to the left
            marginTop: "1vw", // Add some top margin to separate the spans
          }}
        >
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
          <br />
          <br /> <span style={{ fontWeight: "900" }}>Dolor sit amet.</span>
        </span>
      </div>

      <div style={{ marginBottom: "4vw", marginTop: "4vw", marginLeft: "3vw" }}>
        {" "}
        {/* Add margin at the bottom to move the next section down */}
        <span
          style={{
            fontFamily: "Hiragino Sans",
            fontSize: "2.32vw",
            fontWeight: "800",
          }}
        >
          Why we exist?
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "6vw",
          paddingRight: "6vw",
          fontSize: "1.3vw",
          fontFamily: "Zabal DEMO",
          fontWeight: "500",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy1}
            alt="Image 1"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <p>
            To revolutionise the way <br /> businesses operate
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy2}
            alt="Image 2"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <p>
            To enable seamless growth
            <br /> and optimisation of resources
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy3}
            alt="Image 3"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6vw" }}
      >
        <Link
          to="#"
          style={{
            display: "inline-block",
            padding: "0.72vw 1.45vw",
            backgroundColor: "white",
            border: "0.07vw solid black",
            color: "black",
            textDecoration: "none",
            fontSize: "1.3vw",
            marginBottom: "7vw",
          }}
        >
          Discover our subsidiaries
        </Link>
      </div>

      <div className="image-container">
        <img
          src={require("../images/NYC_scaling_box.png")}
          alt="Image"
          className="img-fluid"
        />
        <div className="text-overlay">
          <h2>NYC SCALING</h2>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
            <br /> Labore doloremque quos id{" "}
          </p>
        </div>
        <div className="wrapper text-overlay-2 ">
          {data.data.map((item, index) => (
            <div key={index} className="wrapper-images">
              <img
                src={item.link}
                alt={item.text}
                onClick={() => handleClick(item, index)}
              />
            </div>
          ))}
          <div
            className="overlay-container"
            style={{
              position: "absolute",
              // top: "10px", // Adjust the top position
              left: "100%", // Adjust the right position
              bottom: "60%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: "999",
              marginRight: "50px", // Add margin to the right
              marginBottom: "40px",
            }}
          >
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                handelRotationRight={handelRotationRight}
                setClickedImg={setClickedImg}
                // handelRotationLeft={handelRotationLeft}
              />
            )}
            <div
              style={{
                width: "300px",
                height: "45px",
                border: "2px solid white",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                marginTop: "290px",
                marginLeft: "-642px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Visit website
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="image-container">
        <img
          src={require("../images/green_box.png")}
          alt="Image"
          className="img-fluid"
        />
        <div className="text-overlay-right">
          <h2>NYC Estate</h2>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
            <br /> Labore doloremque quos id{" "}
          </p>
        </div>
        <div
            className="overlay-container"
            style={{
              position: "absolute",
              left: "-25%", // Adjust the right position
              bottom: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: "999",
            }}
          >
        {clickedImg && (
              <Modalright
                clickedImg={clickedImg}
                handelRotationRight={handelRotationRight}
                setClickedImg={setClickedImg}
              />
            )}
            </div>
        <div className="wrapper text-overlay-2-right ">
          {data.data.map((item, index) => (
            <div key={index} className="wrapper-images">
              <img
                src={item.link}
                alt={item.text}
                onClick={() => handleClick(item, index)}
              />
            </div>
          ))}
          <div
            className="overlay-container"
            style={{
              position: "absolute",
              left: "100%", // Adjust the right position
              bottom: "60%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: "999",
              marginRight: "50px", // Add margin to the right
              marginBottom: "40px",
            }}
          >

            <div
              style={{
                width: "300px",
                height: "45px",
                border: "2px solid white",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                marginTop: "290px",
                marginLeft: "-640px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Visit website
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="image-container">
        <img
          src={require("../images/yellow_box.png")}
          alt="Image"
          className="img-fluid"
        />
        <div className="text-overlay">
          <h2>NYC Tea</h2>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
            <br /> Labore doloremque quos id{" "}
          </p>
        </div>
        <div className="wrapper text-overlay-2 ">
          {data.datayellow.map((item, index) => (
            <div key={index} className="wrapper-images">
              <img
                src={item.link}
                alt={item.text}
                onClick={() => handleClick(item, index)}
              />
            </div>
          ))}
          <div
            className="overlay-container"
            style={{
              position: "absolute",
              // top: "10px", // Adjust the top position
              left: "100%", // Adjust the right position
              bottom: "60%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: "999",
              marginRight: "50px", // Add margin to the right
              marginBottom: "40px",
            }}
          >
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                handelRotationRight={handelRotationRight}
                setClickedImg={setClickedImg}
              />
            )}
            <div
              style={{
                width: "300px",
                height: "45px",
                border: "2px solid white",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                marginTop: "290px",
                marginLeft: "-700px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Visit website
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="image-container">
        <img
          src={require("../images/NYC_scaling_box.png")}
          alt="Image"
          className="img-fluid"
        />
        <div className="text-overlay">
          <h2>NYC SCALING</h2>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
            <br /> Labore doloremque quos id{" "}
          </p>
        </div>
        <div className="wrapper text-overlay-2 ">
          {data.data.map((item, index) => (
            <div key={index} className="wrapper-images">
              <img
                src={item.link}
                alt={item.text}
                onClick={() => handleClick(item, index)}
              />
            </div>
          ))}
          <div
            className="overlay-container"
            style={{
              position: "absolute",
              // top: "10px", // Adjust the top position
              left: "100%", // Adjust the right position
              bottom: "60%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: "999",
              marginRight: "50px", // Add margin to the right
              marginBottom: "40px",
            }}
          >
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                handelRotationRight={handelRotationRight}
                setClickedImg={setClickedImg}
                // handelRotationLeft={handelRotationLeft}
              />
            )}
            <div
              style={{
                width: "300px",
                height: "45px",
                border: "2px solid white",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                marginTop: "290px",
                marginLeft: "-700px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Visit website
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="image-container">
        <img
          src={require("../images/green_box.png")}
          alt="Image"
          className="img-fluid"
        />
        <div className="text-overlay">
          <h2>NYC Estate</h2>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
            <br /> Labore doloremque quos id{" "}
          </p>
        </div>
        <div className="wrapper text-overlay-2 ">
          {data.data.map((item, index) => (
            <div key={index} className="wrapper-images">
              <img
                src={item.link}
                alt={item.text}
                onClick={() => handleClick(item, index)}
              />
            </div>
          ))}
          <div
            className="overlay-container"
            style={{
              position: "absolute",
              left: "100%", // Adjust the right position
              bottom: "60%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: "999",
              marginRight: "50px", // Add margin to the right
              marginBottom: "40px",
            }}
          >
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                handelRotationRight={handelRotationRight}
                setClickedImg={setClickedImg}
                // handelRotationLeft={handelRotationLeft}
              />
            )}
            <div
              style={{
                width: "300px",
                height: "45px",
                border: "2px solid white",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                marginTop: "290px",
                marginLeft: "-700px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Visit website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
