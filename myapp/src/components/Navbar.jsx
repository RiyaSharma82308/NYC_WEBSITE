import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
import "./CustomNavbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Get the current location
  const [open, setOpen] = useState(false);
  const Menus = [
    { text: "About us", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Industries", link: "/industries" },
    { text: "NYC Subsidiaries", link: "/subsidiaries" },
    { text: "Careers", link: "/careers2" },
    "Connect with us",
    "nycinnovateindustries@gmail.com",
    "+91 9429323599",
  ];
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  return (
    <div className="h-screen bg-gray-200 flex justify-center pt-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand" to="#">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top "
            style={{ marginLeft: "2.9vw", width: "9.81vw", height: "2.72vw" }}
          />
        </Link>
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          {/* Centering the hamburger image */}
          <img
            ref={imgRef}
            onClick={() => setOpen(!open)}
            src={hamburger}
            alt="hamburger"
            style={{ width: "3.16vw", height: "3.16vw" }}
            className="h-6 w-6 object-cover border-4 rounded-full cursor-pointer"
          />
        </div>
        {open && (
          <div
            ref={menuRef}
            className="position-absolute dropdown-menu show p-4"
            style={{
              backgroundColor: "#EBE6CC",
              top: "4.3vw",
              left: 0,
              width: "100%",
              height: "43.04vw",
              zIndex: 1000,
            }}
          >
            <ul className="text-center list-unstyled">
              {Menus.slice(0, Menus.length - 2).map((menu, index) => (
                <li
                  onClick={() => setOpen(false)}
                  className="p-2 text-lg cursor-pointer"
                  key={index}
                  style={{
                    fontFamily: "Hiragino Sans Bold",
                  }}
                >
                  <Link
                    to={menu.link}
                    className={`custom-link ${
                      location.pathname === menu.link ? "active" : ""
                    }`}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
              <li
                className="p-2 text-lg cursor-pointer"
                style={{
                  margin: "1.27vw 3.16vw",
                  display: "inline-block",
                  fontFamily: "Zabal DEMO",
                }}
              >
                <img
                  src={require("../images/mail.png")}
                  alt="Image"
                  className="mr-2 image-icon "
                />
                {Menus[Menus.length - 2]}
              </li>
              <li
                className="p-2 text-lg cursor-pointer"
                style={{
                  margin: "1.27vw 3.16vw",
                  display: "inline-block",
                  fontFamily: "Zabal DEMO",
                }}
              >
                <img
                  src={require("../images/call.png")}
                  className="mr-2 image-icon"
                />
                {Menus[Menus.length - 1]}
              </li>
            </ul>
          </div>
        )}
        <Link
          to="/"
          style={{
            paddingTop: "0.5vw",
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
            fontFamily: "Zabal DEMO",
          }}
        >
          Have a project in mind?
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
