import React, { useEffect } from "react";
import screen1 from "../assets/spark-logo.png"; // Logo image
import Footer from "./Footer"; // (If you need it at the bottom, you can add later)

export default function Partnership() {
  useEffect(() => {
    const head = document.head;

    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
    head.appendChild(bootstrapCSS);
  }, []);

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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/course">Courses</a></li>
              <li className="active"><a href="/partnership">Partnerships</a></li>
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

      {/* Partnerships Section */}
      <div className="container" style={{ padding: "40px 15px" }}>
        <h1 className="text-center" style={{ color: "#a94442" }}>Our Content Partners</h1>
        <hr />

        {/* BankersAdda Section */}
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-md-12">
            <h2 style={{ color: "#a94442" }}><strong>BankersAdda</strong></h2>
            <p style={{ fontSize: "16px" }}>
              <strong>BankersAdda</strong> is India's leading and most trusted website for Banking Jobs.
              The portal provides complete information about Banking and Insurance Jobs, including the latest notifications
              from all state and national-level exams. Updates are provided regularly based on official announcements to keep aspirants
              well-informed and exam-ready.
            </p>
            <ul className="list-group">
              <li className="list-group-item">✔ Comprehensive Information on Banking & Insurance Jobs</li>
              <li className="list-group-item">✔ Latest State & National Level Notifications</li>
              <li className="list-group-item">✔ Regular Updates from Official Sources</li>
            </ul>
          </div>
        </div>

        {/* SSCAdda Section */}
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-md-12">
            <h2 style={{ color: "#a94442" }}><strong>SSCAdda</strong></h2>
            <p style={{ fontSize: "16px" }}>
              <strong>SSCAdda</strong> is a trusted platform offering high-quality study materials and resources
              for various government exams, especially those conducted by the Staff Selection Commission (SSC),
              Railway Recruitment Board (RRB), and various State Government exams. SSCAdda ensures students have the
              right resources and support to excel in their government exam journey.
            </p>
            <ul className="list-group">
              <li className="list-group-item">✔ Staff Selection Commission (SSC) Exam Preparation</li>
              <li className="list-group-item">✔ Railway Recruitment Board (RRB) Exam Materials</li>
              <li className="list-group-item">✔ Comprehensive Coverage of State Government Exams</li>
            </ul>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: "30px" }}>
          <a href="/contact" className="btn btn-danger btn-lg">
            Contact Us
          </a>
        </div>
      </div>

      {/* You can add Footer here if needed */}
      <Footer /> 
    </div>
  );
}