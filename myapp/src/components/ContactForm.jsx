import React, { useState } from "react";
import { Link } from "react-router-dom";
import homewhy1 from "../images/contactform_1.png";
import "./ContactForm.css";
import axios from "axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/ContactForm",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      // console.log(formData);
      console.log(response.data); // Server response number

      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error scenarios, such as displaying an error message to the user.
    }
  };

  return (
    <div
      className="contact-form"
      style={{
        backgroundColor: "rgba(235, 230, 204, 0.8)",
        height: "49.37vw",
        marginTop: "2.53vw",
      }}
    >
      <div style={{ marginLeft: "1.27vw", marginTop: "1.27vw" }}>
        <h2
          style={{
            position:"absolute",
            fontSize: "2.53vw",
            fontWeight: "800",
            lineHeight: "3.8vw",
            letterSpacing: "0em",
            textAlign: "left",
            left:"8.35vw",
            font:'Hiragino Sans Bold'
            // backgroundColor:"brown"
          }}
        >
          Connect with us
        </h2>
        <div style={{ marginTop: "5.06vw", marginLeft: "5.06vw" }}>
          <img
            src={homewhy1}
            alt="Image 1"
            style={{
              width: "27.39vw",
              height: "32.39vw",
              marginLeft: "1.27vw",
            }}
          />
        </div>
      </div>

      <div
        className="ml-auto"
        style={{ marginTop: "3vw", merginLeft: "12.66vw" }}
      >
        <Link
          to="/"
          style={{
            position: "absolute",
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
            left:"76.57vw",
            alignItems:"center"
          }}
        >
          Have a project in mind?
        </Link>
        <div
          className="form-container"
          style={{ marginTop: "5.7vw", marginLeft: "0vw" }}
        >
          <div
            className="form-container"
            style={{ marginTop: "5.7vw", marginLeft: "13.16vw" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{
                    fontSize: "1.14vw",
                    fontWeight: "500",
                    lineHeight: "1.39vw",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "37.03vw",
                    height: "2.53vw",
                    top: "429.75vw",
                    left: "53.92vw",
                    border: "0.06vw solid black",
                  }}
                />
              </div>
              <div className="form-row" >
                <span className="form-group">
                  <label
                    htmlFor="email"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "16.1vw",
                      height: "2.53vw",
                      top: "429.75vw",
                      left: "53.92vw",
                      border: "0.06vw solid black",
                    }}
                  />
                </span>
                <span className="form-group">
                  <label
                    htmlFor="contactNumber"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Contact Number:
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    style={{
                      width: "16.1vw",
                      height: "2.53vw",
                      top: "429.75vw",
                      left: "53.92vw",
                      border: "0.06vw solid black",
                    }}
                  />
                </span>
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  style={{
                    fontSize: "1.14vw",
                    fontWeight: "500",
                    lineHeight: "1.39vw",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "37.03vw",
                    height: "12.03vw",
                    top: "43.71vw",
                    left: "34.75vw",
                    border: "0.06vw solid black",
                  }}
                />
              </div>
              <div className="form-group">
                <button
                  id="projectsubmit"
                  style={{ marginTop: "0.32vw", fontWeight: "31.65vw" }}
                  variant="outline-warning"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
