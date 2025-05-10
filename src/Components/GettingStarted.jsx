import React from "react";
import { FaSearch, FaUserGraduate, FaFileAlt, FaChartLine } from "react-icons/fa";

export default function GettingStarted() {
  return (
    <div className="container" style={{ padding: "80px 20px" }}>
      {/* Inline Styles for Component */}
      <style>{`
        .step-icon {
          font-size: 4rem;
          color: #d9534f;
          margin-bottom: 25px;
        }
        .step-heading {
          font-weight: 800;
          font-size: 2rem;
          margin-bottom: 15px;
          color: #222;
        }
        .step-desc {
          font-size: 1.35rem;
          color: #444;
          line-height: 1.8;
        }
        @media (max-width: 768px) {
          .step-heading {
            font-size: 1.6rem;
          }
          .step-desc {
            font-size: 1.15rem;
          }
        }
        @media (max-width: 576px) {
          .step-heading {
            font-size: 1.4rem;
          }
          .step-desc {
            font-size: 1.05rem;
          }
        }
      `}</style>

      {/* Section Heading */}
      <h2
        className="text-center"
        style={{
          fontWeight: "900",
          fontSize: "3rem",
          marginBottom: "40px",
          lineHeight: "1.4",
          color: "#111",
        }}
      >
        How to Get Started with Our Coaching <br />
        <small
          style={{
            color: "#d9534f",
            fontWeight: "700",
            fontSize: "2rem",
          }}
        >
          (Powered by Adda247)
        </small>
      </h2>

      {/* Subheading */}
      <div
        className="text-center"
        style={{
          maxWidth: "900px",
          margin: "0 auto 70px",
          fontSize: "1.5rem",
          color: "#555",
          lineHeight: "1.9",
        }}
      >
        Start Your Government Exam Journey Today and access top-tier courses
        from Adda247—trusted by lakhs of aspirants.
      </div>

      {/* Steps Grid */}
      <div className="row">
        {/* Step 1 */}
        <div className="col-12 col-sm-6 col-md-3 text-center mb-5">
          <FaSearch className="step-icon" />
          <div className="step-heading">Register & Explore</div>
          <p className="step-desc">
            Sign up for free and discover Adda247's expert-designed courses for
            SSC, Banking, Railways, and more.
          </p>
        </div>

        {/* Step 2 */}
        <div className="col-12 col-sm-6 col-md-3 text-center mb-5">
          <FaUserGraduate className="step-icon" />
          <div className="step-heading">Choose the Right Path</div>
          <p className="step-desc">
            Pick a course that fits your target exam, and get structured study
            plans, mock tests, and live classes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="col-12 col-sm-6 col-md-3 text-center mb-5">
          <FaFileAlt className="step-icon" />
          <div className="step-heading">Talk to Experts&Enroll</div>
          <p className="step-desc">
            Clear your doubts with our team, understand your learning plan, and
            begin your preparation journey.
          </p>
        </div>

        {/* Step 4 */}
        <div className="col-12 col-sm-6 col-md-3 text-center mb-5">
          <FaChartLine className="step-icon" />
          <div className="step-heading">Learn,Practice&Succeed</div>
          <p className="step-desc">
            Attend live classes, solve mock tests, track your progress, and
            move one step closer to your government job dream!
          </p>
        </div>
      </div>
    </div>
  );
}