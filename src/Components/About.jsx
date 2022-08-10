import React from "react";
import "./AboutCss.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>It'z Shah</h1>
        <p>This is a simple React website....</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://picsum.photos/id/3/200/200"
              alt="Jane"
              style={{ width: "250px" }}
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </>
  );
};

export default About;
