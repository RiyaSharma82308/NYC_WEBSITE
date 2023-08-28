import React, { useState } from "react";
import axios from "axios";
import "./ProjectForm.css";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar.jsx";
import img1 from "../images/ProjectForm_1.png";
import img2 from "../images/ProjectForm_2.png";
const ProjectForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const [formData, setFormData] = useState({
        name: "",
        contact: "",
        designaiton: "",
        service: "",
        additionalInfo: "",
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
      // Send the form data to the backend server
      const response = await axios.post(
        "http://127.0.0.1:8000/api/ProjectForm",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

    //   console.log(formData);
      console.log(response.data); // Server response number

      setFormData({
        name: "",
        contact: "",
        designaiton: "",
        service: "",
        additionalInfo: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="container1 ">
        <h2 style={{ marginLeft: "40px", fontWeight: "bold" }}>
          Have a project in mind?
        </h2>
        <p style={{ marginLeft: "40px", marginTop: "20px" }}>
          Fill the form below to help us understand your requirements for the
          project and <br />
          we will get back to you in 2-4 business days.
        </p>
        <p style={{ marginLeft: "40px", marginTop: "15px" }}>
          Required fields are marked with *
        </p>
      </div>
      <div
        className="container"
        style={{ background: " #EBE6CC", width: "988px", height: "530px" }}
      >
        <div className="row justify-content-center">
        <form onSubmit={handleSubmit} className="row justify-content-center">
          {currentPage === 1 && (
            <div className="col-md-8 mt-5 ">
              <img
                src={img1}
                alt="..."
                style={{ width: "30px", height: "10px", marginLeft: "300px" }}
                className="h-6 w-6 object-cover border-4 rounded-full mb-4"
              />
                <div className="form-group" style={{ width: "635px" }}>
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    style={{ borderRadius: "0", width: "100%" }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "635px" }}>
                  <label htmlFor="contact">Where can we contact you?*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    style={{ borderRadius: "0", width: "100%" }}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "635px" }}>
                  <label htmlFor="designation">Your Designation*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    name="designation"
                    style={{ borderRadius: "0", width: "100%" }}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-5">
                  <div className="d-flex justify-content-end ">
                    <button
                      type="button"
                      className="  custom-button"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
            </div>
          )}
          {currentPage === 2 && (
            <div className="col-md-8 mt-5">
              <img
                src={img2}
                alt="..."
                style={{ width: "30px", height: "10px", marginLeft: "300px" }}
                className="h-6 w-6 object-cover border-4 rounded-full mb-4"
              />

                <div className="form-group">
                  <label htmlFor="service">
                    What service are you looking for?*
                  </label>
                  <select
                    className="form-control"
                    id="service"
                    name="service"
                    onChange={handleChange}
                    style={{
                      borderRadius: "0",
                      background: " #EBE6CC",
                      border: " 1px solid black",
                      width: "635px",
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                  </select>
                </div>
                <div
                  className="form-group"
                  style={{ borderRadius: "0", width: "635px" }}
                >
                  <label
                    htmlFor="additionalInfo"
                    style={{ borderRadius: "0", width: "635px" }}
                  >
                    What is your project about?*
                  </label>
                  <textarea
                    className="form-control"
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="5" /* Specify the number of rows */
                    onChange={handleChange}
                    style={{
                      background: " #EBE6CC",
                      borderRadius: "0",
                      border: " 1px solid black",
                      width: "100%",
                    }}
                  ></textarea>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className=" custom-button"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="custom-button"
                    //   onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
            </div>
          )}
          </form>
        </div>
      </div>
      <div className="container1 ">
        <p style={{ marginLeft: "40px", marginTop: "15px" }}>
          You can also choose to drop your contact details and we will get
          <br /> back to you shortly.
        </p>
      </div>
        <ContactForm />
        <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              className="btn custom-connect-button w-100"
              style={{ borderRadius: "0px", border: "1px solid black" }}
            >
              Connect with Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
