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
import Box3 from "./Box3";
import Box5 from "./Box5";
import Box2 from "./Box2";
import Box4 from "./Box4";
import Box from "./Box";
import NYC_scaling_small_1 from "../images/NYC_scaling_small_1.png";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import data from "../data/images.json";
import Modal from "./Modal";
import Modalright from "./Modalright";
import ServicesCarousel from './servicescarousel';
import Testimonialscarousel from './Testimonialscarousel';
import Homecarousel from './Homecarousel';

export default function Home() {
  // const defaultClickedImg = ;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(prevState => !prevState);
  };
  const defaultClickedImg =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692593607/home_beige_enlarged_mvwjyh.png";
  const [clickedImg, setClickedImg] = useState(defaultClickedImg);
  const [currentIndex, setCurrentIndex] = useState(null);

  const defaultClickedImggreen =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692592049/home_violet_enlarged_hkj4fc.png";
  const [clickedImggreen, setClickedImggreen] = useState(
    defaultClickedImggreen
  );
  const [currentIndexgreen, setCurrentIndexgreen] = useState(null);

  const defaultClickedImgyellow =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692592049/home_violet_enlarged_hkj4fc.png";
  const [clickedImgyellow, setClickedImgyellow] = useState(
    defaultClickedImgyellow
  );
  const [currentIndexyellow, setCurrentIndexyellow] = useState(null);

  const defaultClickedImgviolet2 =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692593607/home_beige_enlarged_mvwjyh.png";
  const [clickedImgviolet2, setClickedImgviolet2] = useState(
    defaultClickedImgviolet2
  );
  const [currentIndexviolet2, setCurrentIndexviolet2] = useState(null);

  const defaultClickedImggreen2 =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692592049/home_violet_enlarged_hkj4fc.png";
  const [clickedImggreen2, setClickedImggreen2] = useState(
    defaultClickedImggreen2
  );
  const [currentIndexgreen2, setCurrentIndexgreen2] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    console.log(currentIndex);
    setClickedImg(item.enlarged);
  };
  const handleClickgreen = (item, index) => {
    setCurrentIndexgreen(index);
    console.log(currentIndexgreen);
    setClickedImggreen(item.enlarged);
  };
  const handleClickyellow = (item, index) => {
    setCurrentIndexyellow(index);
    setClickedImgyellow(item.enlarged);
  };
  const handleClickviolet2 = (item, index) => {
    setCurrentIndexviolet2(index);
    setClickedImgviolet2(item.enlarged);
  };
  const handleClickgreen2 = (item, index) => {
    setCurrentIndexgreen2(index);
    setClickedImggreen2(item.enlarged);
  };
  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].enlarged;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationRight_green = () => {
    const totalLength = data.datagreen.length;
    if (currentIndexgreen + 1 >= totalLength) {
      setCurrentIndexgreen(0);
      const newUrl = data.datagreen[0].enlarged;
      setClickedImggreen(newUrl);
      return;
    }
    const newIndex = currentIndexgreen + 1;
    const newUrl = data.datagreen.filter((item) => {
      return data.datagreen.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImggreen(newItem);
    setCurrentIndexgreen(newIndex);
  };

  const handelRotationRight_yellow = () => {
    const totalLength = data.datayellow.length;
    if (currentIndexyellow + 1 >= totalLength) {
      setCurrentIndexyellow(0);
      const newUrl = data.datayellow[0].enlarged;
      setClickedImgyellow(newUrl);
      return;
    }
    const newIndex = currentIndexyellow + 1;
    const newUrl = data.datayellow.filter((item) => {
      return data.datayellow.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImgyellow(newItem);
    setCurrentIndexyellow(newIndex);
  };
  const handelRotationRight_violet2 = () => {
    const totalLength = data.dataviolet2.length;
    if (currentIndexviolet2 + 1 >= totalLength) {
      setCurrentIndexviolet2(0);
      const newUrl = data.dataviolet2[0].enlarged;
      setClickedImgviolet2(newUrl);
      return;
    }
    const newIndex = currentIndexviolet2 + 1;
    const newUrl = data.dataviolet2.filter((item) => {
      return data.dataviolet2.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImgviolet2(newItem);
    setCurrentIndexviolet2(newIndex);
  };
  const handelRotationRight_green2 = () => {
    const totalLength = data.datagreen2.length;
    if (currentIndexgreen2 + 1 >= totalLength) {
      setCurrentIndexgreen2(0);
      const newUrl = data.datagreen2[0].enlarged;
      setClickedImggreen2(newUrl);
      return;
    }
    const newIndex = currentIndexgreen2 + 1;
    const newUrl = data.datagreen2.filter((item) => {
      return data.datagreen2.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImggreen2(newItem);
    setCurrentIndexgreen2(newIndex);
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
          overflow: "hidden",
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
            fontWeight: "31.65vw", // Adjusted font weight
            textAlign: "left", // Align text to the left
            marginTop: "1vw", // Add some top margin to separate the spans
          }}
        >
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
          <br />
          <br /> <span style={{ fontWeight: "56.96vw" }}>Dolor sit amet.</span>
        </span>
      </div>

      <div style={{ marginBottom: "4vw", marginTop: "4vw", marginLeft: "3vw" }}>
        {" "}
        {/* Add margin at the bottom to move the next section down */}
        <span
          style={{
            fontFamily: "Hiragino Sans",
            fontSize: "2.32vw",
            fontWeight: "50.63vw",
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
          fontWeight: "31.65vw",
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

      <Box />

      <br />

      <Box2 />

      <br />
      <Box3 />
      <br />
      <Box4 />
      <br />
      <Box5 />
      <br/>
      <div style={{marginTop:"4vw", marginLeft:"3vw"}}>
        <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.32vw", fontWeight:"800"}}>Our Services...</span>
      </div>
      <div>

        <ServicesCarousel/>
      </div>
      <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '2vw 0',
          }}
        >
          {!isDropdownVisible && (
                 <div
                 style={{
                  border: '0.07vw solid rgba(35, 31, 32, 1)',
                  width: '86.23vw',
                  height: '2.9vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '3vw',
                  marginRight: '3vw',
                  marginTop: '6.5vw',
                }}
               >
            <button
              onClick={this.toggleDropdown}
              style={{
                fontFamily: 'Zabal DEMO',
                fontSize: '1.3vw',
                fontWeight: '500',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              View Founder’s Note
            </button>
            </div>
          )}

          {isDropdownVisible && (
            <div style={{marginTop:"3.4vw"}}>
              <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.32vw", marginLeft:"-10vw"}}>Founder’s Note...</span>
        <div
        style={{
          display: 'flex', // Display image and text side by side
          alignItems: 'center',
          width: '70vw', // Adjusted width
          padding: '1vw',
          marginTop: '2.6vw',
          backgroundColor: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',

        }}
      >
        <img
          style={{ width: '20.14vw', height: '26.88vw', marginRight: '1vw' }}
          src={require('../images/karan.png')}
          alt="Founder"
        />
              <p style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", fontWeight:"bold"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dictum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dictum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dictum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dictum risus. Maecenas vel dictum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dictum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dictum risus. 
              </p>
            </div>
            </div>
          )}

          {isDropdownVisible && (
                  
                 <div
                 style={{
                  border: '0.07vw solid rgba(35, 31, 32, 1)',
                  width: '86.23vw',
                  height: '2.9vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '3vw',
                  marginRight: '3vw',
                  marginTop: '2vw',
                }}
               >
            <button
              onClick={this.toggleDropdown}
              style={{
                fontFamily: 'Zabal DEMO',
                fontSize: '1.3vw',
                fontWeight: '500',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Hide Founder’s Note
            </button>
            </div>
          )}
        </div>
        <div id='tc'>
          <Testimonialscarousel/>
        </div>
        <Link className="btn btn-outline-warning" to="/services">
          View all services
        </Link>
        











      <br />
      <ContactForm />
    </div>
  );
}
