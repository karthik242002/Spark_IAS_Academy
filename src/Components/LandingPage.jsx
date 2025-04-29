import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Use Link for navigation
import image1 from "../assets/image1.jpg";
import screen1 from "../assets/screen.png";
import AboutPage from "./AboutPage";
import GettingStarted from "./GettingStarted";
import Footer from "./Footer";
import CourseContent from "./CourseContent";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const head = document.head;

    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
    head.appendChild(bootstrapCSS);

    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
    jqueryScript.async = true;
    head.appendChild(jqueryScript);

    const bootstrapJS = document.createElement("script");
    bootstrapJS.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
    bootstrapJS.async = true;
    head.appendChild(bootstrapJS);

    const style = document.createElement("style");
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }

      .navbar-nav > li > a {
        background-color: transparent !important;
        transition: all 0.3s ease;
        position: relative;
      }

      .navbar-nav > li > a:hover::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #d9534f;
        bottom: 5px;
        left: 0;
      }

      .navbar-nav > li.active > a {
        font-weight: bold;
        color: #d9534f !important;
        background-color: transparent !important;
      }

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
            <Link className="navbar-brand" to="/">
              <img
                src={screen1}
                alt="Logo"
                style={{
                  width: "220px",
                  marginTop: "-15px",
                  display: "inline-block",
                }}
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <Link to="/about">About</Link>
              </li>
              <li className={location.pathname === "/course" ? "active" : ""}>
                <Link to="/course">Courses</Link>
              </li>
              <li className={location.pathname === "/partners" ? "active" : ""}>
                <Link to="/partners">Partnerships</Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="btn btn-danger navbar-btn"
                  style={{
                    padding: "8px 20px",
                    marginLeft: "15px",
                    borderRadius: "30px",
                    fontSize: "16px",
                    
                    backgroundColor: "#d9534f",
                    border: "none",
                    display: "inline-block",
                    textAlign: "center",
                    textDecoration: "none",
                    
                  }}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="container" style={{ padding: "60px 15px" }}>
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-6 text-left">
            <h1 style={{ fontSize: "38px", fontWeight: "bold" }}>
              Empowering Aspirants in Tiruttani with{" "}
              <span style={{ color: "#d9534f" }}>adda247</span>
            </h1>
            <p className="lead" style={{ color: "#d9534f", margin: "20px 0" }}>
              IN TNPSC, BANKING, SSC, RAILWAYS, POLICE, NEET!
            </p>
            <h3 style={{ fontWeight: "400" }}>
              Your Neighborhood Coaching backed by India's No.1 edTech platform
            </h3>

            <a
              href="#get-started"
              className="btn btn-danger btn-lg"
              style={{
                margin: "25px",
                marginTop: "30px",
                padding: "12px 30px",
                borderRadius: "30px",
              }}
            >
              GET STARTED
            </a>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={image1}
              className="img-responsive img-rounded center-block"
              alt="Instructor"
              style={{
                maxWidth: "75%",
                height: "auto",
                boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <GettingStarted />

      {/* About Section */}
      <div id="about" style={{ padding: "50px 0" }}>
        <AboutPage />
      </div>

      {/* Course Content Section */}
      <CourseContent />

      {/* Partners Section */}
      <div
        id="content-partners"
        className="container text-center"
        style={{ padding: "50px 0", marginTop: "-10px" }}
      >
        {/* Future partners content */}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/122"
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
        <i className="glyphicon glyphicon-comment"></i>
      </a>

      {/* Footer */}
      <Footer />
    </div>
  );
}
