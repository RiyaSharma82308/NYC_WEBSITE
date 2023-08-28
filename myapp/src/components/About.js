import React from "react";
import Navbar from "./Navbar";
import homewhy1 from "../images/about_N.png";
import homewhy2 from "../images/about_Y.png";
import homewhy3 from "../images/about_C.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import InfiniteScrollingCarousel from "./InfiniteScrollingCarousel";
import ContactForm from "./ContactForm";
const About = () => {
  const carouselImages = [
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692446914/about_img1_ml8tz8.png",
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692446914/about_img2_jtesoe.png",
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692446981/about_img3_asec8a.png",
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692446914/about_img1_ml8tz8.png",
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692446914/about_img2_jtesoe.png",
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692446981/about_img3_asec8a.png",
    // Add more image URLs here
  ];
  //   const divStyle = {
  //     height: '30vw',
  //     width: '100vw', // 100% of viewport width
  //     backgroundColor: '#EBE6CC',
  //   };
  return (
    <div>
      <Navbar />

      <div>
        <img
          src={require("../images/aboutPage.png")}
          alt="Image"
          className="img-fluid"
        />
        <div className="text-overlay-about">
          <h2
            style={{
              fontSize: "2.53vw",
              fontWeight: "800",
              lineHeight: "3.8vw",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            We bring growth in <br />
            businesses across the world
          </h2>
        </div>
        <div className=" text-overlay-about-box">
          <Link
            to="/"
            style={{
              paddingTop: "0.3vw",
              paddingBottom: "0.5vw",
              border: "0.06vw solid #231F20",
              color: "black",
              width: "18.99vw",
              height: "2.53vw",
              textDecoration: "none",
              fontSize: "1.14vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Have a project in mind?
          </Link>
        </div>
        <div className=" text-overlay-about-box-2">
          <Link
            to="/"
            style={{
              paddingTop: "0.3vw",
              paddingBottom: "0.5vw",
              border: "0.06vw solid #231F20",
              color: "black",
              width: "18.99vw",
              height: "2.53vw",
              textDecoration: "none",
              fontSize: "1.14vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Discover out subsidiaries
          </Link>
        </div>
      </div>
      <br />
      <InfiniteScrollingCarousel images={carouselImages} />
      <br />
      <div>
        <img
          src={require("../images/aboutPage2.png")}
          alt="Image"
          className="img-fluid"
        />
        <div className="text-overlay-about-2">
          <h2
            style={{
              position:"relative",
              fontSize: "4.05vw",
              fontWeight: "800",
              lineHeight: "6.08vw",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Our <br />
            Vision...
          </h2>
        </div>
      </div>
      <br />
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
          NYC Values...
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
          <p>Noble and Authentic</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy2}
            alt="Image 2"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <p>Youth Development</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy3}
            alt="Image 3"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <p>Compassionate and Confident</p>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
};

export default About;
