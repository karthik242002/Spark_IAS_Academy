import React, { useState } from "react";
import bankersAddaLogo from "../assets/bankersadda.png";
import sscAddaLogo from "../assets/sscadda.png";
import Tnpsc from "../assets/tnpsc course.jpg";
import Railway from "../assets/Railway-Exams.jpg";
import tnusrb from "../assets/TNUSRB.webp";
import neet from "../assets/neet.avif";
import Footer from "./Footer";
import screen1 from "../assets/screen.png";


const courses = [
  {
    title: "TNPSC Coaching",
    description:
      "Bilingual classes, expert mentorship, Adda247 material, and full coverage of Group I, II, IV exams.",
    image: Tnpsc,
  },
  {
    title: "Banking Exams",
    description:
      "SBI, IBPS, RBI coaching with daily practice, Adda247 test series, and hybrid learning options.",
    image: bankersAddaLogo,
  },
  {
    title: "SSC Coaching",
    description:
      "CGL, CHSL, MTS, and more. Learn with PYQs, printed notes, and bilingual teaching support.",
    image: sscAddaLogo,
  },
  {
    title: "Railway Exams (RRB)",
    description:
      "Prepare for NTPC, Group D, ALP with in-depth syllabus coverage and flexible batches.",
    image: Railway,
  },
  {
    title: "TNUSRB Police Exams",
    description:
      "SI, Constable, Jail Warder preparation with physical test training and interview guidance.",
    image: tnusrb,
  },
  {
    title: "NEET Foundation",
    description:
      "Coaching for medical aspirants with Adda247’s subject experts and daily assessments.",
    image: neet,
  },
];

export default function CourseContent() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const categories = [ "All Courses","TNPSC", "Banking", "SSC", "Railways", "Police", "NEET"];

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) =>
          course.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
   <div>
     <div className="container" style={{ padding: "5px 5px" }}>
      <h2 className="text-center" style={{ marginBottom: "40px", fontWeight: "bold" }}>
        Our Courses – Powered by Adda247
      </h2>

     {/* Category Filter Dropdown */}
<div className="text-center" style={{ marginBottom: "40px" }}>
  <div className="dropdown" style={{ display: "inline-block", position: "relative" }}>
    <button
      className="btn btn-danger dropdown-toggle"
      type="button"
      id="categoryDropdown"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      style={{
        padding: "10px 25px",
        fontSize: "16px",
        borderRadius: "30px",
        minWidth: "200px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {selectedCategory} <span className="caret"></span>
    </button>
    <ul
      className="dropdown-menu"
      aria-labelledby="categoryDropdown"
      style={{
        marginTop: "10px",
        minWidth: "200px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        padding: "10px 0",
      }}
    >
      {categories.map((cat) => (
        <li key={cat} className={selectedCategory === cat ? "active" : ""}>
          <a
            href="#!"
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              display: "block",
              backgroundColor: selectedCategory === cat ? "#d9534f" : "transparent",
              color: selectedCategory === cat ? "#fff" : "#333",
              borderRadius: "5px",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>


      {/* Courses */}
      <div className="row">
  {filteredCourses.length === 1 ? (
    <div className="col-sm-6 col-md-4 col-md-offset-4">
      <div
        className="thumbnail"
        style={{
          minHeight: "420px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={filteredCourses[0].image}
          alt={filteredCourses[0].title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            padding: "10px",
          }}
        />
        <div className="caption text-center">
          <h4 style={{ fontWeight: "bold" }}>{filteredCourses[0].title}</h4>
          <p style={{ fontSize: "15px" }}>{filteredCourses[0].description}</p>
          <a href="/details" className="btn btn-danger" role="button">
            Course Details
          </a>
        </div>
      </div>
    </div>
  ) : (
    filteredCourses.map((course, index) => (
      <div className="col-sm-6 col-md-4" key={index}>
        <div
          className="thumbnail"
          style={{
            minHeight: "420px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={course.image}
            alt={course.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              padding: "10px",
            }}
          />
          <div className="caption text-center">
            <h4 style={{ fontWeight: "bold" }}>{course.title}</h4>
            <p style={{ fontSize: "15px" }}>{course.description}</p>
            <a href="/details" className="btn btn-danger" role="button">
            Course Details
            </a>
           
          </div>
        </div>
      </div>
    ))
  )}
</div>
    </div>
   </div>
    
  );
}
