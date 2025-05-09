import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Needed for active links
import image1 from "../assets/image1.jpg";
import screen1 from "../assets/spark-logo.png";
import AboutPage from "./AboutPage";
import GettingStarted from "./GettingStarted";
import Footer from "./Footer";
import CourseContent from "./CourseContent";
import "./Landingpage.css";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const head = document.head;

    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
    head.appendChild(bootstrapCSS);

    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
    jqueryScript.async = true;
    head.appendChild(jqueryScript);

    const bootstrapJS = document.createElement("script");
    bootstrapJS.src =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
    bootstrapJS.async = true;
    head.appendChild(bootstrapJS);

    // Scroll smooth + Navbar hover styles
    const style = document.createElement("style");
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }

      .navbar-nav > li > a {
        background-color: transparent !important; /* remove gray */
        transition: all 0.3s ease;
        position: relative;
      }

      .navbar-nav > li > a:hover::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #d9534f; /* underline color (same as 'Contact us' button) */
        bottom: 5px;
        left: 0;
      }
      .navbar-nav > li.active > a {
        font-weight: bold;
        color: #d9534f !important; /* active link color */
        background-color: transparent !important;
      }

      /* Optional: on hover also change link color */
      .navbar-nav > li > a:hover {
        color: #d9534f;
      }
    `;
    head.appendChild(style);
  }, []);

  return (
    <div>
      {/* Contact Bar */}
      <div
        className="text-right"
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "12px 25px",
          fontSize: "14px",
        }}
      >
        <span style={{ marginRight: "20px" }}>
          <i className="glyphicon glyphicon-envelope"></i> sparkiastrt@gmail.com
        </span>
        <span>
          <i className="glyphicon glyphicon-earphone"></i> 7845239889 / 9150509889
        </span>
      </div>

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
              <li className={location.pathname === "/" ? "active" : ""}>
                <a href="/">Home</a>
              </li>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <a href="/about">About</a>
              </li>
              <li className={location.pathname === "/course" ? "active" : ""}>
                <a href="/course">Courses</a>
              </li>
              <li className={location.pathname === "/partners" ? "active" : ""}>
                <a href="/partners">Partnerships</a>
              </li>
              <li>
                <button
                  href="/contact"
                  className="btn btn-danger btn-lg navbar-btn contact"
                  style={{
                    padding: "8px 20px",
                    marginLeft: "15px",
                    borderRadius: "30px",
                  }}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div id="home" className="container" style={{ padding: "60px 15px" }}>
       
      {/* Hero Section */}
      <div id="home" className="container" style={{ padding: "60px 15px" }}>
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-6 text-left">
            <h1 style={{ fontSize: "38px", fontWeight: "bold" }}>
              Empowering Aspirants in Tiruttani with <span style={{ color: "#d9534f" }}>adda247</span>
            </h1>
            <p className="lead" style={{ color: "#d9534f", margin: "20px 0" }}>
              IN TNPSC, BANKING, SSC, RAILWAYS, POLICE, NEET!
            </p>
            <h3 style={{ fontWeight: "400" }}>
              Your Neighborhood Coaching backed by India's No.1 edTech platform
            </h3>
            <a
              href="#get-started"
              className="btn btn-danger btn-lg text-center"
              style={{
                margin: "25px",
                padding: "12px 30px",
                borderRadius: "30px",
                textAlign:"center"
              }}
            >
              GET STARTED
            </a>
          </div>

          <div className="col-md-6 text-center get-image text-center">
            <img 
              src={image1}
              className="img-responsive img-rounded center-block text-center"
              alt="Instructor"
              style={{
                maxWidth: "75%",
                height: "auto",
                boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                borderRadius: "15px"
              }}
            />
          </div>
        </div>
      </div>
      </div>

      <GettingStarted />

      <div id="about" style={{ padding: "50px 0" }}>
        <AboutPage />
      </div>

      <CourseContent />

      {/* Partners Section */}
      <div
        id="content-partners"
        className="container text-center"
        style={{ padding: "50px 0", marginTop: "-10px" }}
      >
        {/* Content */}
      </div>

      {/* WhatsApp Floating Button */}
     <a
  href="https://wa.me/917845239889"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    left: "20px",
    backgroundColor: "#25D366",
    color: "white",
    padding: "16px",
    borderRadius: "50%",
    fontSize: "24px",
    zIndex: 1000,
    boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#20b358")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
>
  <i className="fa-brands fa-whatsapp"></i>
</a>
      <Footer />
    </div>
  );
}