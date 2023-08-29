import React from "react";
import Navbar from "./Navbar";
import homewhy1 from "../images/about_N.png";
import homewhy2 from "../images/about_Y.png";
import homewhy3 from "../images/about_C.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import InfiniteScrollingCarousel from "./InfiniteScrollingCarousel";
import ContactForm from "./ContactForm";
import Homecarousel from "./Homecarousel";
import ServicesCarousel from "./servicescarousel";

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
              fontFamily:"Hiragino Sans Bold"
            }}
          >
            We bring growth in
            <h3    style={{
              fontSize: "2.53vw",
              fontWeight: "800",
              lineHeight: "3.8vw",
              letterSpacing: "0em",
              textAlign: "left",
              fontFamily:"Hiragino Sans Bold"
            }}>
            businesses across the world
            </h3>
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
              alignItems:"center",
              fontFamily:"Zabal DEMO"
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
              alignItems:"center",
              fontFamily:"Zabal DEMO",
              whiteSpace: "nowrap"
            }}
          >
            Discover our subsidiaries
          </Link>
        </div>
      </div>
      <div style={{marginTop:"4vw", marginLeft:"3vw", marginBottom:"7vw"}}>
        <span style={{fontSize:"2.32vw", fontFamily:"Hiragino Sans Bold"}}>Our Awards...</span>
        <div style={{marginTop:"1vw"}}>
      <InfiniteScrollingCarousel images={carouselImages} />
        </div>
      </div>
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
          <p style={{marginTop:"1vw"}}>Noble and Authentic</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy2}
            alt="Image 2"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <p style={{marginTop:"1vw"}}>Youth Development</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy3}
            alt="Image 3"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <p style={{marginTop:"1vw"}}>Compassionate and Confident</p>
        </div>
      
      </div>

      <div style={{marginLeft:"3vw", marginTop:"5vw"}}>
        <span style={{fontSize:"2.32vw", fontFamily:"Hiragino Sans Bold"}}>Our People...</span>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "2vw",marginTop:"2vw" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width:"15.94vw",height:"21.01vw"}} src={require('../images/people.png')}/>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"0.87vw",width:"10.87vw",height:"1.45vw",backgroundColor:"rgba(73, 80, 162, 1)", display:"flex", justifyContent:"center", alignItems:"center", color:"white", marginTop:"0.5vw"}}>
              Founder & CEO
            </span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", border: "0.07vw solid rgba(35, 31, 32, 1)", width:"21.74vw", height:"2.9vw", display:"flex", justifyContent:"center", alignItems:"center",marginTop:"0.5vw"}}>Karan Shah</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width:"15.94vw",height:"21.01vw"}} src={require('../images/people.png')}/>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"0.87vw",width:"10.87vw",height:"1.45vw",backgroundColor:"rgba(73, 80, 162, 1)", display:"flex", justifyContent:"center", alignItems:"center", color:"white", marginTop:"0.5vw"}}>
              Founder & CEO
            </span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", border: "0.07vw solid rgba(35, 31, 32, 1)", width:"21.74vw", height:"2.9vw", display:"flex", justifyContent:"center", alignItems:"center",marginTop:"0.5vw"}}>Karan Shah</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width:"15.94vw",height:"21.01vw"}} src={require('../images/people.png')}/>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"0.87vw",width:"10.87vw",height:"1.45vw",backgroundColor:"rgba(73, 80, 162, 1)", display:"flex", justifyContent:"center", alignItems:"center", color:"white", marginTop:"0.5vw"}}>
              Founder & CEO
            </span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", border: "0.07vw solid rgba(35, 31, 32, 1)", width:"21.74vw", height:"2.9vw", display:"flex", justifyContent:"center", alignItems:"center",marginTop:"0.5vw"}}>Karan Shah</span>
          </div>
        </div>
        

        <div style={{ display: "flex", justifyContent: "flex-start", gap: "15.5vw",marginTop:"2vw" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width:"15.94vw",height:"21.01vw"}} src={require('../images/people.png')}/>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"0.87vw",width:"10.87vw",height:"1.45vw",backgroundColor:"rgba(73, 80, 162, 1)", display:"flex", justifyContent:"center", alignItems:"center", color:"white", marginTop:"0.5vw"}}>
              Founder & CEO
            </span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", border: "0.07vw solid rgba(35, 31, 32, 1)", width:"21.74vw", height:"2.9vw", display:"flex", justifyContent:"center", alignItems:"center",marginTop:"0.5vw"}}>Karan Shah</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ width:"15.94vw",height:"21.01vw"}} src={require('../images/people.png')}/>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"0.87vw",width:"10.87vw",height:"1.45vw",backgroundColor:"rgba(73, 80, 162, 1)", display:"flex", justifyContent:"center", alignItems:"center", color:"white", marginTop:"0.5vw"}}>
              Founder & CEO
            </span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", border: "0.07vw solid rgba(35, 31, 32, 1)", width:"21.74vw", height:"2.9vw", display:"flex", justifyContent:"center", alignItems:"center",marginTop:"0.5vw"}}>Karan Shah</span>
          </div>
        </div>
      </div>


      <div style={{marginLeft:"3vw", marginTop:"5vw", display: "flex", alignItems: "center"}}>
        <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.32vw"}}>We are hiring...</span>
        <Link
          to="#"
          style={{
            display: "inline-block",
            marginLeft: "auto",
            marginRight:"0.5vw",
            backgroundColor: "white",
            border: "0.07vw solid black",
            color: "black",
            textDecoration: "none",
            fontSize: "1.3vw",
            alignItems:"center",
            justifyContent:"center",
            paddingTop:"0.5vw",
            paddingBottom:"0.5vw",
            width:"21.74vw",
            display:"flex",
            whiteSpace: "nowrap"

          }}
        >
          View all opportunities
        </Link>
      </div>
        <div>
          <ServicesCarousel/>
        </div>

      <ContactForm/>
    </div>
  );
};

export default About;
