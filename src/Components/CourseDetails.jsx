import React from 'react';
import screen1 from "../assets/spark-logo.png";
 // Only for card top borders


export default function CourseDetails() {
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
      <div style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
  <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "36px", fontWeight: "700", color: "#333" }}>
    Our Courses
  </h2>

  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
    
    {/* Sample Course Card */}
    {[
      {
        title: "TNPSC Coaching",
        description: "Prepare for Group I, II, IV & VAO exams with bilingual classes and Adda247 study materials.",
        features: ["Daily mock tests & current affairs", "Regular & Weekend Batches", "Personal mentorship + app access"],
        color: "#7b2ff7",
      },
      {
        title: "Banking Exams",
        description: "Courses for IBPS, SBI, RBI, NABARD with expert faculty in Quant, Reasoning, English.",
        features: ["Live + Recorded sessions", "Mock tests + Interview prep", "Classroom + app learning"],
        color: "#2979ff",
      },
      {
        title: "SSC Coaching",
        description: "Crack CGL, CHSL, MTS with printed notes, bilingual support & Adda247 expertise.",
        features: ["Tier 1–3 covered", "Live classes, PYQs, test series", "Daily practice sessions"],
        color: "#f9a825",
      },
      {
        title: "Railway (RRB)",
        description: "NTPC, ALP, JE, Group D coaching with quizzes, bilingual classes, and time-management tips.",
        features: ["Mock tests, PYQs", "Weekend + Regular batches", "Online + Offline support"],
        color: "#00c853",
      },
      {
        title: "TNUSRB Police",
        description: "Constable, SI, Fireman exams with physical and written test training.",
        features: ["Prelims, Mains + Physical Test", "Tamil eligibility & interview prep", "Bilingual + flexible batches"],
        color: "#d50000",
      },
      {
        title: "NEET Coaching",
        description: "Crack NEET with expert guidance in Physics, Chemistry, and Biology with topic-wise practice.",
        features: ["PYQs, mock exams", "Bilingual coaching (Tamil + English)", "Online + Offline options"],
        color: "#7b2ff7",
      },
    ].map((course, index) => (
      <div key={index} style={{
        width: "320px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        padding: "25px",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
      }}
      >
        {/* Colored Bar */}
        <div style={{
          height: "4px",
          width: "60px",
          backgroundColor: course.color,
          marginBottom: "20px",
          borderRadius: "2px"
        }}></div>

        <h3 style={{ fontSize: "22px", color: "#333", marginBottom: "10px" }}>{course.title}</h3>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px", minHeight: "70px" }}>{course.description}</p>
        
        <ul style={{ listStyle: "none", padding: "0 0 10px 0", marginBottom: "20px" }}>
          {course.features.map((feature, i) => (
            <li key={i} style={{ marginBottom: "10px", fontSize: "14px", color: "#444" }}>
              ✓ {feature}
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center" }}>
          <button style={{
            backgroundColor: course.color,
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#333"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = course.color}
          >
            Enroll Now
          </button>
        </div>
      </div>
    ))}

  </div>
</div>

    </div>
  )
}