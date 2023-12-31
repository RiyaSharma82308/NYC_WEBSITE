import React, { useState, Component } from "react";
import homewhy1 from "../images/homewhy1.png";
import homewhy2 from "../images/homewhy2.png";
import homewhy3 from "../images/homewhy3.png";
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

        <div>
          
          <Homecarousel/>
        </div>

      <div style={{ marginBottom: "4vw", marginTop: "4vw", marginLeft: "3vw" }}>
        {" "}
        {/* Add margin at the bottom to move the next section down */}
        <span
          style={{
            fontFamily: "Hiragino Sans Bold",
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
            To revolutionise the way <p>businesses operate</p>
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
            backgroundColor: "white",
            border: "0.07vw solid black",
            color: "black",
            textDecoration: "none",
            fontSize: "1.3vw",
            marginBottom: "7vw",
            alignItems:"center",
            justifyContent:"center",
            paddingTop:"0.5vw",
            paddingBottom:"0.5vw",
            width:"21.74vw",
            display:"flex"

          }}
        >
          Discover our subsidiaries
        </Link>
      </div>
      <div style={{marginLeft:"0.7vw", marginRight:"0.7vw"}}>
      <Box />
      </div>
          <div style={{marginTop:"2vw", marginLeft:"0.7vw", marginRight:"0.7vw"}}>
      <Box2 />
          </div>
          <div style={{marginTop:"2vw", marginLeft:"0.7vw", marginRight:"0.7vw"}}>  
      <Box3 />
          </div>

          <div style={{marginTop:"2vw", marginLeft:"0.7vw", marginRight:"0.7vw"}}>
      <Box4 />
          </div>
          <div style={{marginTop:"2vw", marginLeft:"0.7vw", marginRight:"0.7vw"}}>
      <Box5 />
          </div>

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
            marginBottom:"4.7vw"
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
              onClick={toggleDropdown}
              style={{
                fontFamily: 'Zabal DEMO',
                fontSize: '1.3vw',
                fontWeight: '500',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'black'
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
              onClick={toggleDropdown}
              style={{
                fontFamily: 'Zabal DEMO',
                fontSize: '1.3vw',
                fontWeight: '500',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'black'
              }}
            >
              Hide Founder’s Note
            </button>
            </div>
          )}
        </div>
        <div style={{marginLeft:"3vw"}}>
          <span style={{fontSize:"2.32vw", fontFamily:"Hiragino Sans Bold"}}>Testimonials</span>
        </div>
        <div id='tc'>
          <Testimonialscarousel/>
        </div>
      <ContactForm />
    </div>
  );
}
