import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
const OperationalManagerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    designation: "",
    CTC: "",
    resumeFile: "",
    otherinfo: "",
    linkedin: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "resumeFile") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: e.target.files[0], // Capture the selected file
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Append all form data properties to FormData
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/OperationalManagerForm",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        contact: "",
        designation: "",
        CTC: "",
        resumeFile: "",
        otherinfo: "",
        linkedin: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1
            style={{
              marginRight: "auto",
              marginLeft: "2.53vw",
              fontSize: "2.03vw",
              fontWeight: "800",
              lineHeight: "3.04vw",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Operational Manager
          </h1>
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
            View other opportunities
          </Link>
        </div>
        <p
          style={{
            marginLeft: "2.53vw",
            fontSize: "1.14vw",
            fontWeight: "500",
            lineHeight: "1.39vw",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Application Form
        </p>
      </div>
      <div>
        <div
          className="row justify-content-start"
          style={{
            background: "white",
            width: "62.53vw",
            marginLeft: "2.53vw",
          }}
        >
          <div className="row justify-content-start">
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="row justify-content-start"
            >
              <div className="col-md-8 mt-5 ">
                <div className="form-group" style={{ width: "40.19vw" }}>
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
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    style={{
                      width: "43.42vw",
                      height: "2.53vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "40.19vw" }}>
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
                    E-mail*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "43.42vw",
                      height: "2.53vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "40.19vw" }}>
                  <label
                    htmlFor="contact"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Contact number*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    style={{
                      width: "43.42vw",
                      height: "2.53vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "40.19vw" }}>
                  <label
                    htmlFor="designation"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Current Designation*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    name="designation"
                    style={{
                      width: "43.42vw",
                      height: "2.53vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "40.19vw" }}>
                  <label
                    htmlFor="CTC"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Current CTC*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="CTC"
                    name="CTC"
                    style={{
                      width: "43.42vw",
                      height: "2.53vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="resumeFile"
                    className="form-group"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Upload CV*(size upto 10mb)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="resumeFile"
                    name="resumeFile"
                    accept=".pdf, .doc, .docx"
                    onChange={handleChange}
                    style={{
                      width: "18.99vw",
                      height: "2.53vw",
                      top: "55.06vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                    }}
                  />
                </div>
                <div className="form-group" style={{ width: "40.19vw" }}>
                  <label
                    htmlFor="otherinfo"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Website, blog, portfolio or certification link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otherinfo"
                    name="otherinfo"
                    style={{
                      width: "43.42vw",
                      height: "2.53vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "40.19vw" }}>
                  <label
                    htmlFor="linkedin"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Linkedin Profile
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="linkedin"
                    name="linkedin"
                    style={{
                      width: "43.42vw",
                      height: "2.53vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div
                  className="form-group"
                  style={{ borderRadius: "0", width: "40.19vw" }}
                >
                  <label
                    htmlFor="additionalInfo"
                    style={{
                      fontSize: "1.14vw",
                      fontWeight: "500",
                      lineHeight: "1.39vw",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Tell us a bit about yourself*
                  </label>
                  <textarea
                    className="form-control"
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="5" /* Specify the number of rows */
                    onChange={handleChange}
                    style={{
                      width: "43.42vw",
                      height: "12.03vw",
                      top: "20.25vw",
                      left: "2.85vw",
                      border: "0.06vw solid black",
                      borderRadius: "0vw",
                      backgroundColor: "transparent",
                    }}
                  ></textarea>
                </div>
                <div>
                  <div className="d-flex justify-content-between" style={{
                        width: "18.99vw",
                        height: "3.53vw",
                        top: "91.77vw",
                        left: "2.85vw",
                        border: "0.06vw",
                        // textAlign: "center",
                      }}>
                    <button
                      type="submit"
                      className="custom-button mt-4"
                      style={{
                        fontSize: "1.14vw",
                        fontWeight: "500",
                        lineHeight: "1.39vw",
                        letterSpacing: "0em",
                        // textAlign: "center",
                        }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
export default OperationalManagerForm;
