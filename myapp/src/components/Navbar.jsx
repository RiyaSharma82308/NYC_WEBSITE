import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
import "./CustomNavbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [open, setOpen] = useState(false);
  const Menus= ['About us', 'Services', 'Industries', 'NYC Subsidiaries', 'Careers', 'Connect with us', 'nycinnovateindustries@gmail.com  ','+91 9429323599' ];
  const menuRef = useRef();
  const imgRef = useRef();
  window.addEventListener('click', (e)=>{
    if(e.target !== menuRef.current && e.target !== imgRef.current){
      setOpen(false);
    }
  })

  return (
    <div className=" h-screen bg-gray-200 flex justify-center pt-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand" to="#">
          <img
            src={logo}
            alt="Logo"
            width="150px"
            height="50px"
            className="d-inline-block align-top "
            style={{ marginLeft: "40px" }}
          />
        </Link>
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          {/* Centering the hamburger image */}
          <img
            ref={imgRef}
            onClick={() =>  setOpen(!open)}
            src={hamburger}
            alt="hamburger"
            style={{ width: '50px', height: '50px' }}
            className="h-6 w-6 object-cover border-4 rounded-full cursor-pointer"
          />
        </div>
        {
          open &&
          <div ref={menuRef} className="position-absolute dropdown-menu show p-4" style={{ backgroundColor: "#EBE6CC",top:76, left: 0, width: "100%" , zIndex: 1000}}>
          <ul className="text-center list-unstyled">
            {Menus.slice(0, Menus.length - 2).map((menu) => (
              <li
                onClick={() => setOpen(false)}
                className="p-2 text-lg cursor-pointer"
                key={menu}
              >
                {menu}
              </li>
            ))}
            <li className="p-2 text-lg cursor-pointer" style={{ margin: "20px 50px", display: "inline-block" }}>
            <img src={require("../images/mail.png")} alt="Image" className="mr-2 image-icon " />
              {Menus[Menus.length - 2]}
            </li>
            <li className="p-2 text-lg cursor-pointer" style={{ margin: "20px 50px", display: "inline-block" }}>
            <img src={require("../images/call.png")} className="mr-2 image-icon" />
              {Menus[Menus.length - 1]}
            </li>
          </ul>
        </div>
        }
        <div className="ml-auto">
          <div className="custom-box" style={{ marginRight: "40px" }}>
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Have a project in mind?</Link>
          </div>
        </div>
        
      </nav>
    </div>
  );
}
export default Navbar;