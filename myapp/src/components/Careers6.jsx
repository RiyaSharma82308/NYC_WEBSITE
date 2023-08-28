import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import homewhy1 from "../images/about_img1.png";
import homewhy2 from "../images/about_img2.png";
import homewhy3 from "../images/about_img3.png";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
const Careers6 = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ marginRight: "auto", marginLeft: "2.53vw" }}>
          Opportunities at NYC
          </h1>
          <div
            className="custom-box "
            style={{
              marginRight: "0.63vw",
              backgroundColor: "white",
              padding: "0.63vw",
              marginRight: "2.53vw",
            }}
          >
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Select what best describes you
            </Link>
          </div>
        </div>
        <p style={{ marginLeft: "2.53vw" }}>Job Description</p>
      </div>
      <div>
        <div
          className="row justify-content-start"
          style={{ background: "transparent" , marginLeft:"2.53vw", marginTop:"2.53vw"}}
        >
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
          <div className="ml-auto" >
          <div className="custom-box" style={{ backgroundColor:"white", marginTop:'1.27vw'}} >
          <Link to="/" style={{ color: 'black', textDecoration: 'none' ,fontSize:'1.14vw'}}>Students / Internships</Link>
          </div>
        </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy2}
            alt="Image 2"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
         <div className="ml-auto" >
          <div className="custom-box" style={{ backgroundColor:"white", marginTop:'1.27vw'}} >
          <Link to="/" style={{ color: 'black', textDecoration: 'none' ,fontSize:'1.14vw'}}>Graduates</Link>
          </div>
        </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={homewhy3}
            alt="Image 3"
            style={{ width: "17.39vw", height: "17.39vw" }}
          />
          <div className="ml-auto" >
          <div className="custom-box" style={{  backgroundColor:"white", marginTop:'1.27vw'}} >
          <Link to="/" style={{ color: 'black', textDecoration: 'none' ,fontSize:'1.14vw'}}>Experienced professionals</Link>
          </div>
        </div>
        </div>
      </div>
          
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
export default Careers6;
