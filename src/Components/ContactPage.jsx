import React, { useState } from "react";
import screen1 from "../assets/spark_logo_1.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    phone: '',
    email: '',
    demo: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          course: '',
          phone: '',
          email: '',
          demo: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-default" style={{ marginBottom: "0px" }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#home" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={screen1}
                alt="Logo"
                style={{ width: "200px", marginTop: "10px", marginRight: "10px" }}
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
                <a
                  href="/contact"
                  className="btn btn-danger btn-lg navbar-btn contact"
                  style={{ padding: "8px 20px", marginLeft: "15px", borderRadius: "30px" }}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Form Section */}
      <div className="container mt-5">
        <style>{`
          .custom-select-course {
            font-size: 1.2rem;
            padding: 5px 15px;
            border-radius: 8px;
            border: 2px solid #ced4da;
            background-color: #f9f9f9;
            color: #333;
          }

          .custom-select-course:focus {
            border-color: #dc3545;
            box-shadow: 0 0 0 0.2rem rgba(220,53,69,.25);
            outline: none;
          }
        `}</style>

        <h2 className="text-center mb-4 fs-1 fw-bold">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            {submitted && (
              <div className="alert alert-success text-center fs-5" role="alert">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
            <form onSubmit={handleSubmit} className="fs-5">
              <div className="form-group mb-3">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control fs-5" placeholder="NAME" required />
              </div>

              <div className="form-group mb-3">
                <select name="course" value={formData.course} onChange={handleChange} className="form-control custom-select-course" required>
                  <option value="">SELECT YOUR COURSE</option>
                  <option value="TNPSC">TNPSC</option>
                  <option value="SSC">SSC</option>
                  <option value="BANKING">BANKING</option>
                  <option value="RAILWAYS">RAILWAYS</option>
                  <option value="POLICE">POLICE</option>
                  <option value="NEET">NEET</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control fs-5" placeholder="PHONE NO" required />
              </div>

              <div className="form-group mb-3">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control fs-5" placeholder="EMAIL" required />
              </div>

              <div className="form-group mb-3">
                <label className="fw-semibold fs-5">Do you want a demo class?</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="demo" value="Yes" checked={formData.demo === 'Yes'} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="demo" value="No" checked={formData.demo === 'No'} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>

              <div className="form-group mb-3">
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-control fs-5" rows="4" placeholder="Your message" required></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100 fs-5" style={{ borderRadius: '30px' }}>
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details and Map */}
          <div className="col-md-6 fs-5">
            <h5 className="fw-bold">Contact Details</h5>
            <p>📍 Tiruttani, Tamil Nadu, India</p>
            <p>📧 sparkiastrt@gmail.com</p>
            <p>📞 7845239889 / 9150509889</p>
            <iframe
              title="Spark Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d79.60007965!3d13.16711995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52ee612bf2e5c9%3A0x94f121a4e1791d92!2sTiruttani%2C%20Tamil%20Nadu%20631009!5e0!3m2!1sen!2sin!4v1681037694895!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
