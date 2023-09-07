import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ContactForm from './ContactForm';


export default class Careers2 extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.32vw", marginLeft:"3vw",display:"block",marginTop:"3vw"}}>Opportunities at NYC</span>
        <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", marginLeft:"3vw",display:"block",marginTop:"1vw"}}>Select the kind of opportunities you are looking for</span>


        <div style={{ display: "flex", alignItems:"center", justifyContent:"center", gap:"4.3vw", marginTop:"3vw" }}>
          <div style={{ width: "42.39vw", height: "28.99vw",border: "0.14vw solid rgba(73, 80, 162, 1)",  borderRadius: "1.52vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column" }}>
            <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.9vw"}}>Operational Manager</span>
            
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1.8vw", width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(73, 80, 162, 1)", color:"white",fontSize:"0.87vw",fontFamily:"Zabal DEMO",display:"flex", justifyContent:"center"}}>NYC Innovate Industries</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1vw"}}>Mumbai • 0-5 years experience</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", lineHeight:"2.11vw", textAlign: "center",marginTop:"2.3vw",marginLeft:"1.3vw",marginRight:"1.3vw" }}>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas vel dictum risus. consectetur adipiscing elit. Maecenas dictum risus. adipiscing elit. </span>
            <Link style={{height:"2.9vw",width:"21.74vw",border: "0.07vw solid rgba(35, 31, 32, 1)", display:"flex", justifyContent:"center", fontSize:"1.3vw", fontFamily:"Zabal DEMO",textDecoration:"none", color:"black",marginTop:"2vw",alignItems:"center"}}>
                View job description
            </Link>
          </div>
          <div style={{ width: "42.39vw", height: "28.99vw",border: "0.14vw solid rgba(218, 193, 38, 1)",  borderRadius: "1.52vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column" }}>
            <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.9vw"}}>Business Consultant</span>
            
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1.8vw", width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(218, 193, 38, 1)", color:"white",fontSize:"0.87vw",fontFamily:"Zabal DEMO",display:"flex", justifyContent:"center"}}>NYC Tea</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1vw"}}>Mumbai • 3-7 years experience</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", lineHeight:"2.11vw", textAlign: "center",marginTop:"2.3vw",marginLeft:"1.3vw",marginRight:"1.3vw" }}>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas vel dictum risus. consectetur adipiscing elit. Maecenas dictum risus. adipiscing elit. </span>
            <Link style={{height:"2.9vw",width:"21.74vw",border: "0.07vw solid rgba(35, 31, 32, 1)", display:"flex", justifyContent:"center", fontSize:"1.3vw", fontFamily:"Zabal DEMO",textDecoration:"none", color:"black",marginTop:"2vw", alignItems:"center"}}>
                View job description
            </Link>
            
          </div>
</div>


        <div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start", gap:"4.3vw", marginTop:"3vw",marginLeft:"5vw" }}>
          <div style={{ width: "42.39vw", height: "28.99vw",border: "0.14vw solid rgba(3, 140, 109, 1)",  borderRadius: "1.52vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column" }}>
            <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.9vw"}}>Marketing Head</span>
            
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1.8vw", width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(3, 140, 109, 1)", color:"white",fontSize:"0.87vw",fontFamily:"Zabal DEMO",display:"flex", justifyContent:"center"}}>NYC Innovate Industries</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1vw"}}>Mumbai • 0-5 years experience</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw", lineHeight:"2.11vw", textAlign: "center",marginTop:"2.3vw",marginLeft:"1.3vw",marginRight:"1.3vw" }}>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas vel dictum risus. consectetur adipiscing elit. Maecenas dictum risus. adipiscing elit. </span>
            <Link style={{height:"2.9vw",width:"21.74vw",border: "0.07vw solid rgba(35, 31, 32, 1)", display:"flex", justifyContent:"center", fontSize:"1.3vw", fontFamily:"Zabal DEMO",textDecoration:"none", color:"black",marginTop:"2vw", alignItems:"center"}}>
                View job description
            </Link>
          </div> 

</div>
<div style={{marginTop:"3vw"}}>
        <ContactForm/>
        </div>
      </div>
    )
  }
}
