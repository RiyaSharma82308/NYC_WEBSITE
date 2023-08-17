import React, { Component } from 'react';
import homewhy1 from '../images/homewhy1.png';
import homewhy2 from '../images/homewhy2.png';
import homewhy3 from '../images/homewhy3.png';
import homescaling from '../images/homescaling.png';
import homeestate from '../images/homeestate.png';
import hometea from '../images/hometea.png';
import homerunway from '../images/homerunway.png';
import homestrips from '../images/homestrips.png';


export default class Home extends Component {
  render() {
    return (
      <div>
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
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /><br />{" "}
            <span style={{ fontWeight: "900" }}>Dolor sit amet.</span>
          </span>
        </div>

        <div style={{ marginBottom: "4vw",marginTop:"4vw", marginLeft:"3vw" }}> {/* Add margin at the bottom to move the next section down */}
          <span style={{ fontFamily: "Hiragino Sans", fontSize: "2.32vw", fontWeight: "800" }}>Why we exist?</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft:"6vw", paddingRight:"6vw",fontSize:"1.3vw", fontFamily:"Zabal DEMO", fontWeight:"500" }}>
          <div style={{ textAlign: "center"}}>
            <img src={homewhy1} alt="Image 1" style={{ width: "17.39vw", height: "17.39vw" }} />
            <p>To revolutionise the way <br/> businesses operate</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={homewhy2} alt="Image 2" style={{ width: "17.39vw", height: "17.39vw" }} />
            <p>To enable seamless growth<br/> and optimisation of resources</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={homewhy3} alt="Image 3" style={{ width: "17.39vw", height: "17.39vw" }} />
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
          </div>
          </div>
          <div style={{  display: "flex", justifyContent: "center", marginTop:"6vw" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "0.72vw 1.45vw",
              backgroundColor: "white",
              border: "0.07vw solid black",
              color: "black",
              textDecoration: "none",
              fontSize: "1.3vw",
              marginBottom:"7vw"
            }}
          >
            Discover our subsidiaries
          </a>
        </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <img style={{width:"97.3vw", height:"50.72vw"}} src={homescaling} alt="Image 2" />
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop:"3.3vw"}}>
      <img style={{width:"97.3vw", height:"50.72vw"}} src={homeestate} alt="Image 2" />
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop:"3.3vw"}}>
      <img style={{width:"97.3vw", height:"50.72vw"}} src={hometea} alt="Image 2" />
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop:"3.3vw"}}>
      <img style={{width:"97.3vw", height:"50.72vw"}} src={homerunway} alt="Image 2" />
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop:"3.3vw"}}>
      <img style={{width:"97.3vw", height:"50.72vw"}} src={homestrips} alt="Image 2" />
      </div>
      <div style={{marginTop:"4vw", marginLeft:"3vw"}}>
        <span style={{fontFamily:"Hiragino Sans", fontSize:"2.32vw", fontWeight:"800"}}>Our Services...</span>

      </div>
      </div>
    );
  }
}
