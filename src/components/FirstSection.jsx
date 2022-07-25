import React from "react";
import Contact from "./Contact";
import GEU from "../assets/geu.svg";

const FirstSection = () => {
  return (
    <>
      <div className="first-section">
        <div className="phd-section">
          <div className="phd-section-text">
          <img src={GEU} />

            <div className="section-phd">
              <div className="phd-heading-container">
                <h1 className="phd-heading">Ph.d</h1>
                <h3 className="ad-open">
                  Admissions <br /> Open
                </h3>
              </div>
              <p > 
                Enroll for your Ph.D program at one of the Top Research
                Facilities in India, getting mentored by some of the Top
                Researchers of the country.
              </p>
            </div>
            <div className="blur-bg">
              <div className="details-holder">
                <div className="details">
                  <p>Additional Fund of</p>
                  <h4 className="august">INR 1.5 LAC</h4>
                  <p>
                    to be provided to NET/GATE/JRF <br />
                    Qualified Candidates*
                  </p>
                </div>
                <div className="details">
                  <p>Additional Fund of</p>
                  <h4 className="august">INR 1.5 LAC</h4>
                  <p>
                    to be provided to NET/GATE/JRF <br />
                    Qualified Candidates*
                  </p>
                </div>
              </div>
              <div className="-paragraph">
                <p>
                  Continuation of Scholarship dependent on performance
                  parametters*
                </p>
              </div>
            </div>
          </div>
          <div className="phd-section-contact">
            <div className="form">
              <h3 className="apply-now august">Apply Now</h3>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
