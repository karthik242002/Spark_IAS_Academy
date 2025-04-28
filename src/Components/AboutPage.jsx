import React, { useEffect ,useRef} from "react";
import image2 from "../assets/image.png"
import Footer from "./Footer";
export default function AboutPage() {
  useEffect(() => {
    const head = document.head;

    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
    head.appendChild(bootstrapCSS);
  }, []);

  return (
    <div>
      <div className="container" style={{ padding: "40px 15px" }}>
        <h1 className="text-center"style={{color:" #a94442"}}>About Spark IAS Academy</h1>
        <hr />

        <div className="row">
          <div className="col-md-6 text-justify">
            <h2 className="lead">
              Spark IAS Academy is a premier coaching institute in Tiruttani dedicated to helping students crack competitive exams like UPSC, TNPSC, SSC, RRB, Banking, and more. Founded on the belief that every aspirant deserves access to quality education, our academy combines structured guidance
               with personal mentorship.
               Our collaboration with <strong>Adda247</strong>, India’s top EdTech platform, ensures our students gain access to the best-in-class study materials, expert-led live classes, and mock tests. We focus not just on teaching, but on building a mindset of discipline, clarity, and confidence.
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
              <li className="list-group-item">✔  Interactive Live Sessions with Doubt Clearin</li>
              <li className="list-group-item">✔ Top-Notch Faculty & Updated Content</li>
              <li className="list-group-item">✔  Real Exam Simulations through Mock Tests & Test Serie</li>
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