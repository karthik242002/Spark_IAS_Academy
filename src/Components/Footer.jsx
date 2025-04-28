import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* Footer */}
{/* Footer */}
<footer style={{
  backgroundColor: "#1c1c1c",
  color: "#d3d3d3",
  padding: "60px 0 30px 0",
  marginTop: "80px",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "14px"
}}>
  <div className="container">
    <div className="row text-left" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      
      {/* About Section */}
      <div className="col-md-4" style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#ff4c4c", marginBottom: "20px", fontWeight: "600" }}>SparkIAS Tiruttani</h4>
        <p style={{ lineHeight: "24px" }}>
          Empowering Tiruttani aspirants for TNPSC, Banking, SSC, Railways, Police, and NEET, with India's No.1 EdTech platform Adda247.
        </p>
      </div>

      {/* Useful Links */}
      <div className="col-md-3" style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#ff4c4c", marginBottom: "20px", fontWeight: "600" }}>Quick Links</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
            { text: "Courses", link: "/course" },
            { text: "Contact", link: "/contact" },
          ].map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <a href={item.link} style={{
                color: "#d3d3d3",
                textDecoration: "none",
                transition: "color 0.3s"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#ff4c4c"}
              onMouseLeave={e => e.currentTarget.style.color = "#d3d3d3"}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div className="col-md-4" style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#ff4c4c", marginBottom: "20px", fontWeight: "600" }}>Contact Us</h4>
        <p style={{ marginBottom: "8px" }}>
          <i className="glyphicon glyphicon-envelope" style={{ marginRight: "8px" }}></i>
          sparkiastrt@gmail.com
        </p>
        <p style={{ marginBottom: "8px" }}>
          <i className="glyphicon glyphicon-earphone" style={{ marginRight: "8px" }}></i>
          7845239889 / 9150509889
        </p>
        <p style={{ marginBottom: "8px" }}>
          <i className="glyphicon glyphicon-map-marker" style={{ marginRight: "8px" }}></i>
          Tiruttani, Tamil Nadu, India
        </p>
      </div>

    </div>

    {/* Divider Line */}
    <hr style={{ borderTop: "1px solid #444", margin: "40px 0 20px 0" }} />

    {/* Copyright */}
    <div className="row">
      <div className="col-md-12 text-center">
        <p style={{ marginBottom: "0", fontSize: "13px", color: "#777" }}>
          &copy; {new Date().getFullYear()} SparkIAS Tiruttani. All rights reserved. | Designed with ❤️ by Team SparkIAS
        </p>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}
