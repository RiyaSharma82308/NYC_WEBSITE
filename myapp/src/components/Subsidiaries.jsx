import React, { Component } from 'react'
import homewhy1 from '../images/homewhy1.png';
import homewhy2 from '../images/homewhy2.png';
import homewhy3 from '../images/homewhy3.png';
import { Link } from 'react-router-dom';
import Testimonialscarousel from './Testimonialscarousel';
import Navbar from './Navbar';
import Industriescarousel from './Industriescarousel';
import ContactForm from './ContactForm';

export default class Subsidiaries extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{height:"34.78vw",backgroundColor:"rgba(235, 230, 204, 0.8)"}}>
        <Industriescarousel/>
        </div>
         <div style={{ marginBottom: "4vw",marginTop:"3vw", marginLeft:"3vw" }}> {/* Add margin at the bottom to move the next section down */}
          <span style={{ fontFamily: "Hiragino Sans Bold", fontSize: "2.32vw", fontWeight: "800" }}>Our Work</span>
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
          <div style={{marginLeft:"3vw", marginTop:"7.4vw"}}>
            <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.32vw"}}>Insights</span>
          </div>
          <div style={{ display: "flex", alignItems:"center", justifyContent:"center", gap:"4.3vw", marginTop:"3vw" }}>
          <div style={{ width: "43.39vw", height: "47.1vw", border: "0.14vw solid rgba(73, 80, 162, 1)", borderRadius: "1.52vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column" }}>
            <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.9vw"}}>[Blog Name]</span>
            
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1vw"}}>Published on 16 August, 01:14 PM</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"0.4vw"}}>Author: Dimple Motwani</span>
            <img style={{height:"9.57vw",marginTop:"2vw"}} src={require('../images/blog1.png')}/>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.74vw", lineHeight:"2.11vw", textAlign: "center",marginTop:"4vw" }}>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas vel dictum risus. consectetur adipiscing elit. Maecenas dictum risus. adipiscing elit. </span>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center",gap:"2vw",marginTop:"2.3vw"}}>
                <div style={{width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(73, 80, 162, 1)",display:"flex",justifyContent:"center"}}>
                    <span style={{color:"white", fontSize:"0.87vw", fontFamily:"Zabal DEMO",paddingBottom:"0.6vw",paddingTop:"0.1vw"}}>Keyword</span>
                </div>
                <div style={{width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(73, 80, 162, 1)",display:"flex",justifyContent:"center"}}>
                    <span style={{color:"white", fontSize:"0.87vw", fontFamily:"Zabal DEMO",paddingBottom:"0.6vw",paddingTop:"0.1vw"}}>Keyword</span>
                </div>
                <div style={{width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(73, 80, 162, 1)",display:"flex",justifyContent:"center"}}>
                    <span style={{color:"white", fontSize:"0.87vw", fontFamily:"Zabal DEMO",paddingBottom:"0.6vw",paddingTop:"0.1vw"}}>Keyword</span>
                </div>
            </div>
            <Link style={{height:"2.9vw",width:"21.74vw",border: "0.07vw solid rgba(35, 31, 32, 1)", display:"flex", justifyContent:"center", fontSize:"1.3vw", fontFamily:"Zabal DEMO",textDecoration:"none", color:"black",paddingTop:"0.4vw",marginTop:"2vw"}}>
                Read article
            </Link>
          </div>

          
          <div style={{ width: "43.39vw", height: "47.1vw", border: "0.14vw solid rgba(218, 193, 38, 1)", borderRadius: "1.52vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column" }}>
            <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.9vw"}}>[Blog Name]</span>
            
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"1vw"}}>Published on 16 August, 01:14 PM</span>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.3vw",marginTop:"0.4vw"}}>Author: Dimple Motwani</span>
            <img style={{height:"9.57vw",marginTop:"2vw"}} src={require('../images/blog1.png')}/>
            <span style={{fontFamily:"Zabal DEMO", fontSize:"1.74vw", lineHeight:"2.11vw", textAlign: "center",marginTop:"4vw" }}>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas vel dictum risus. consectetur adipiscing elit. Maecenas dictum risus. adipiscing elit. </span>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center",gap:"2vw",marginTop:"2.3vw"}}>
                <div style={{width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(218, 193, 38, 1)",display:"flex",justifyContent:"center"}}>
                    <span style={{color:"white", fontSize:"0.87vw", fontFamily:"Zabal DEMO",paddingBottom:"0.6vw",paddingTop:"0.1vw"}}>Keyword</span>
                </div>
                <div style={{width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(218, 193, 38, 1)",display:"flex",justifyContent:"center"}}>
                    <span style={{color:"white", fontSize:"0.87vw", fontFamily:"Zabal DEMO",paddingBottom:"0.6vw",paddingTop:"0.1vw"}}>Keyword</span>
                </div>
                <div style={{width:"10.87vw",height:"1.45vw", backgroundColor:"rgba(218, 193, 38, 1)",display:"flex",justifyContent:"center"}}>
                    <span style={{color:"white", fontSize:"0.87vw", fontFamily:"Zabal DEMO",paddingBottom:"0.6vw",paddingTop:"0.1vw"}}>Keyword</span>
                </div>
            </div>
            <Link style={{height:"2.9vw",width:"21.74vw",border: "0.07vw solid rgba(35, 31, 32, 1)", display:"flex", justifyContent:"center", fontSize:"1.3vw", fontFamily:"Zabal DEMO",textDecoration:"none", color:"black",paddingTop:"0.4vw",marginTop:"2vw"}}>
                Read article
            </Link>
          </div>
          
</div>

          <div style={{marginTop:"5.9vw"}}>
            <span style={{fontFamily:"Hiragino Sans Bold", fontSize:"2.32vw", marginLeft:"3vw"}}>Testimonials</span>
            <div id='tc' >

            <Testimonialscarousel/>
            </div>
          </div>
          <div style={{marginTop:"3vw"}}>
        <ContactForm/>
        </div>
      </div>
    )
  } 
}
