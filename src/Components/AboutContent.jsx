import React, { useEffect } from 'react';
import screen1 from "../assets/screen.png";
import image2 from "../assets/image.png";

export default function AboutContent() {
  useEffect(() => {
    const head = document.head;

    const style = document.createElement("style");
    style.innerHTML = `
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
            <a className="navbar-brand" href="/">
              <img
                src={screen1}
                alt="Logo"
                style={{
                  width: "220px",
                  marginTop: "-15px",
                  display: "inline-block",
                }}
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/course">Courses</a></li>
              <li><a href="/partners">Partnerships</a></li>
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

      {/* About Content */}
      <div className="container" style={{ padding: "40px 15px" }}>
        <h1 className="text-center" style={{ color: "#a94442" }}>
          About Spark IAS Academy
        </h1>
        <hr />

        <div className="row">
          <div className="col-md-6 text-justify">
            <h2 className="lead">
              Spark IAS Academy is a premier coaching institute in Tiruttani
              dedicated to helping students crack competitive exams like UPSC,
              TNPSC, SSC, RRB, Banking, and more. Founded on the belief that every
              aspirant deserves access to quality education, our academy combines
              structured guidance with personal mentorship.
              Our collaboration with <strong>Adda247</strong>, India’s top EdTech
              platform, ensures our students gain access to the best-in-class study
              materials, expert-led live classes, and mock tests. We focus not just
              on teaching, but on building a mindset of discipline, clarity, and
              confidence.
            </h2>
          </div>

          <div className="col-md-6">
            <img
              src={image2}
              alt="Spark IAS Classroom"
              className="img-responsive img-rounded center-block"
              style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-12">
            <h3>Why Choose Spark IAS Academy?</h3>
            <ul className="list-group">
              <li className="list-group-item">✔ Backed by Adda247’s Legacy of 1 Lakh+ Selections</li>
              <li className="list-group-item">✔ Interactive Live Sessions with Doubt Clearing</li>
              <li className="list-group-item">✔ Top-Notch Faculty & Updated Content</li>
              <li className="list-group-item">✔ Real Exam Simulations through Mock Tests & Test Series</li>
              <li className="list-group-item">✔ Result-Oriented Training</li>
            </ul>

            <div className="text-center" style={{ marginTop: "30px" }}>
              <a href="/contact" className="btn btn-danger btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
