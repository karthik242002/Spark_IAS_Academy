import React from "react";
import { FaSearch, FaUserGraduate, FaFileAlt, FaChartLine } from "react-icons/fa";

export default function GettingStarted() {
  return (
    <div className="container" style={{ padding: "50px 15px" }}>
      <h2 className="text-center" style={{ fontWeight: "600", marginBottom: "40px" }}>
        How to Get Started with Our Coaching <br />
        <small style={{ color: "#d9534f" }}>(Powered by Adda247)</small>
      </h2>

      <div className="text-center lead" style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
        Start Your Government Exam Journey Today and access top-tier courses from Adda247—trusted by lakhs of aspirants.
      </div>

      <div className="row">
        {/* Step 1 */}
        <div className="col-sm-6 col-md-3 text-center" style={{ marginBottom: "30px" }}>
          <FaSearch size={50} style={{ color: "#d9534f", marginBottom: "15px" }} />
          <h4 style={{ fontWeight: "600" }}>Register & Explore</h4>
          <p>
            Sign up for free and discover Adda247's expert-designed courses for SSC, Banking, Railways, and more.
          </p>
        </div>

        {/* Step 2 */}
        <div className="col-sm-6 col-md-3 text-center" style={{ marginBottom: "30px" }}>
          <FaUserGraduate size={50} style={{ color: "#d9534f", marginBottom: "15px" }} />
          <h4 style={{ fontWeight: "600" }}>Choose the Right Path</h4>
          <p>
            Pick a course that fits your target exam, and get structured study plans, mock tests, and live classes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="col-sm-6 col-md-3 text-center" style={{ marginBottom: "30px" }}>
          <FaFileAlt size={50} style={{ color: "#d9534f", marginBottom: "15px" }} />
          <h4 style={{ fontWeight: "600" }}>Talk to Experts & Enroll</h4>
          <p>
            Clear your doubts with our team, understand your learning plan, and begin your preparation journey.
          </p>
        </div>

        {/* Step 4 */}
        <div className="col-sm-6 col-md-3 text-center" style={{ marginBottom: "30px" }}>
          <FaChartLine size={50} style={{ color: "#d9534f", marginBottom: "15px" }} />
          <h4 style={{ fontWeight: "600" }}>Learn, Practice & Succeed</h4>
          <p>
            Attend live classes, solve mock tests, track your progress, and move one step closer to your government job dream!
          </p>
        </div>
      </div>
    </div>
  );
}