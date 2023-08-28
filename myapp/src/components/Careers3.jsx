import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
const Careers3 = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ marginRight: "auto", marginLeft: "40px" }}>
            Operational Manager
          </h1>
          <div
            className="custom-box "
            style={{
              marginRight: "10px",
              backgroundColor: "white",
              padding: "10px",
              marginRight: "40px",
            }}
          >
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              View other opportunities
            </Link>
          </div>
        </div>
        <p style={{ marginLeft: "40px" }}>Job Description</p>
      </div>
      <div>
        <div
          className="row justify-content-start"
          style={{ background: "white", width: "988px" , marginLeft:"40px"}}
        >
          <div className="row justify-content-start" style={{marginTop:"50px"}}>
            <h3>Key responsibilities</h3>
            <list>
                <li>Lorem ipsum dolor sit amet, adipiscing elit.</li>
                <li>Maecenas vel dictum risus. Consectetur adipiscing elit.</li>
                <li>Consectetur adipiscing elit.</li>
                <li>Maecenas dictum risus. Adipiscing elit. adipiscing elit. </li>
                <li>Adipiscing elit. adipiscing elit. Lorem ipsum dolor sit amet</li>
            </list>
          </div>
          <div className="row justify-content-start" style={{marginTop:"50px"}}>
            <h3>Job requirements</h3>
            <list>
                <li>Lorem ipsum dolor sit amet, adipiscing elit.</li>
                <li>Maecenas vel dictum risus. Consectetur adipiscing elit.</li>
                <li>Consectetur adipiscing elit.</li>
                <li>Maecenas dictum risus. Adipiscing elit. adipiscing elit. </li>
                <li>Adipiscing elit. adipiscing elit. Lorem ipsum dolor sit amet</li>
            </list>
          </div>
          <div
            className="custom-box "
            style={{
              backgroundColor: "white",
              padding: "10px",
              marginTop:"50px",
              marginBottom:"60px"
            }}
          >
            <Link to="/" style={{ color: "black", textDecoration: "none" ,  marginTop:"10px"}}>
              Apply now
            </Link>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
export default Careers3;
