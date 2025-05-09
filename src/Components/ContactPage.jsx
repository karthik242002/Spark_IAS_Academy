import React, { useState } from "react";
import screen1 from "../assets/spark-logo.png";
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optionally reset the form after submission
    e.target.reset();

    // You can clear the message after a delay if needed
    setTimeout(() => setSubmitted(false), 3000); // message disappears after 3 seconds
  };

  return (
     <div>
       {/* Navbar */}
            <nav className="navbar navbar-default" style={{ marginBottom: "0px" }}>
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#myNavbar"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                     <a className="navbar-brand" href="#home" style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={screen1}
                    alt="Logo"
                    style={{
                      width: "60px",
                      marginTop: "10px",
                      display: "inline-block",
                      marginRight: "10px", // space between image and text
                    }}
                  />
                  <h4 style={{ margin: 0, fontWeight: "bold",color:"red"}}>Spark Academy</h4>
                </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/course">Courses</a></li>
                    <li><a href="/partners">Partnerships</a></li>
                    <li>
                    <a
                  href="/contact"
                  className="btn btn-danger btn-lg navbar-btn contact"
                  style={{
                    padding: "8px 20px",
                    marginLeft: "15px",
                    borderRadius: "30px",
                    
                  
                  }}
                >
                  Contact us
                </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
      <div id="contact" className="container" style={{ padding: "60px 15px" }}>
      <h2 className="text-center" style={{ fontWeight: "bold", marginBottom: "40px" }}>
        Contact Us
      </h2>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger btn-block" style={{ borderRadius: "30px" }}>
              Send Message
            </button>
            {submitted && (
              <div className="alert alert-success mt-3" role="alert">
                Thank you for submitting!
              </div>
            )}
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              marginBottom: "20px",
            }}
          >
            <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>Contact Details</h4>
            <p>
              <i className="glyphicon glyphicon-map-marker"></i> Tiruttani, Tamil Nadu, India
            </p>
            <p>
              <i className="glyphicon glyphicon-envelope"></i> sparkiastrt@gmail.com
            </p>
            <p>
              <i className="glyphicon glyphicon-earphone"></i> 7845239889 / 9150509889
            </p>
          </div>

          {/* Embedded Map */}
          <div style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.185742318666!2d79.6125488!3d13.1813034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5a3f5e2de003%3A0x1e7f34a788ea64!2sTiruttani%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1617946163995!5m2!1sen!2sin"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}