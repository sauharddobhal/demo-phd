import React, { useState } from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Recon1 from "../assets/recon1.svg";
import Recon2 from "../assets/recon2.svg";
import Recon3 from "../assets/recon3.svg";
import Recon4 from "../assets/recon4.svg";
import Recon5 from "../assets/recon5.svg";
import Recon6 from "../assets/recon6.svg";
import Recon7 from "../assets/recon7.svg";
import Recon8 from "../assets/recon8.svg";
import Recon9 from "../assets/recon9.svg";
import Recon10 from "../assets/recon10.svg";
import Underline from "../assets/underline.svg";
import Stats from "../components/Stats";
import Slider from "../components/SliderComponent";
import AboutGraphic from "../components/AboutGraphic";
import Selection from "../components/Selection";
import FirstSection from "../components/FirstSection";
import FirstSection2 from "../components/FirstSection2";
const Home = () => {
  const [view, setView] = useState(false);
  const viewFunction = () => {
    setView(!view);
  };
  return (
    <>
      <div className="wrapper">
        <FirstSection2 />
      </div>
      <Stats />
      <Slider />
      <Selection />
      <AboutGraphic />
      <div className="recognized-grid-mobile">
        <h1>
          Recognised & <span>accredited</span>
        </h1>
        <p>
        At Graphic Era University, we place a strong emphasis on quality.That is why all our study programs are state-approved, bear the seal of renowned Accreditation Council’s and therefore are globally recognised. And that is why we have won many awards for our program selection, high level of educational materials and outstanding service and support.
        </p>
        <div className="recognized-wrap-grid">
          <div className="test-card">
            <h1>Ranked amongst Top 75 Universities in India</h1>
              <p>
              #64 Engineering Category
#65 Management Category
#74 University Category</p>

            <div className="name-details">
              <img src={Recon1} alt="" />
            </div>
          </div>
          <div className="test-card">
            <h1>QS I •GAUGE E-LEAD</h1>
              <p>
              Learning Excellence For Academic Digitisation Certification</p>

            <div className="name-details">
              <img src={Recon3} alt="" />
            </div>
          </div>
          <div className="test-card">
            <h1>AICTE Approved
</h1>
            <p>
            Coursed approved by All India Council for Technical Education (AICTE), Govt. of India


            </p>

            <div className="name-details">
              <img src={Recon6} alt="" />
            </div>
          </div>
          <div className="test-card">
            <h1>QS-IGauge Ranking</h1>
            <p>QS-IGauge Diamond Category Overall Award</p>

            <div className="name-details">
              <img src={Recon5} alt="" />
            </div>
          </div>

          {view ? (
            <>
              <div className="test-card">
                <h1>Band-Excellent - ARIIA'2022</h1>
                <p>
                Band-Excellent under the category "University & Deemed to be"(Private/Self Financed) (Technical) in ARIIA-2022
                </p>

                <div className="name-details">
                  <img src={Recon9} alt="" />
                </div>
              </div>
              <div className="test-card">
                <h1>UGC Accredited</h1>
                <p>
                Approved under section 3 UGC Act 1956
                </p>

                <div className="name-details">
                  <img src={Recon7} alt="" />
                </div>
              </div>
              <div className="test-card">
                <h1>NAAC "A' Grade University</h1>
                <p>
                Accredited Grade A by NAAC since 2015
                </p>

                <div className="name-details">
                  <img src={Recon4} alt="" />
                </div>
              </div>
              <div className="test-card">
                <h1>NBA Accreditation</h1>
                <p>
                NBA Accredited Programmes in CSE, ECE & ME


                </p>

                <div className="name-details">
                  <img src={Recon2} alt="" />
                </div>
              </div>
              {/* <div className="test-card">
                <div className="test-card-grid">
                  <div className="test-card-text">
                    <h1>Ranked 1st in Enginnerring Cater</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere porro quam dolorum architecto molestiae saepe
                      reiciendis esse est?
                    </p>
                  </div>

                  <div className="name-details">
                    <img src={Recon1} alt="" />
                  </div>
                </div>
              </div> */}
            </>
          ) : null}

          <div className="view-more">
            <p onClick={viewFunction}> {!view ? "View More" : "View Less"} </p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h1>
          Recognised & <br />
          <span>Accreditation</span>
          <img src={Underline} alt="" />
        </h1>
        <p>
        At Graphic Era University, we place a strong emphasis on quality.That is why all our study programs are state-approved, bear the seal of renowned Accreditation Council’s and therefore are globally recognised. And that is why we have won many awards for our program selection, high level of educational materials and outstanding service and support.

        </p>
        <div className="test-cards">
          <div className="test-column first-testi">
            <div className="test-card">
              <h1>QS I •GAUGE E-LEAD</h1>
              <p>
              Learning Excellence For Academic Digitisation Certification</p>

              <div className="name-details">
                <img src={Recon3} alt="" />
              </div>
            </div>
            <div className="test-card">
              <div className="test-card-grid">
                <div className="test-card-text">
                  <h1>NBA Accreditation</h1>
                  <p>
                  NBA Accredited Programmes
in CSE, ECE & ME
                  </p>
                </div>

                <div className="name-details">
                  <img src={Recon2} alt="" />
                </div>
              </div>
            </div>
            {/* <div className="test-card">
              <div className="test-card-grid">
                <div className="test-card-text">
               <h1>Ranked 1st in Enginnerring Cater</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                porro quam dolorum architecto molestiae saepe reiciendis esse
                est?
              </p>
              </div>

              <div className="name-details">
                <img src={Recon1} alt="" />
                 
              </div>
              </div>
            </div> */}
          </div>
          <div className="test-column second-testi">
            <div className="test-card">
              <h1>Ranked amongst Top 75 Universities in India</h1>
              <p>
            
              #64 Engineering Category <br />
#65 Management Category<br />
#74 University Category
              </p>
              <div className="name-details">
                <img src={Recon1} alt="" />
              </div>
            </div>
            <div className="test-card">
              <h1>NAAC "A' Grade University</h1>
              <p>
              Accredited Grade A by NAAC
since 2015
              </p>
              <div className="name-details">
                <img src={Recon4} alt="" />
              </div>
            </div>
          </div>
          <div className="test-column column-wrap third-testi">
            <div className="test-card">
              <h1>QS-IGauge Ranking</h1>
              <p>
              QS-IGauge Diamond Category Overall Award 
              </p>
              <div className="name-details">
                <img src={Recon5} alt="" />
              </div>
            </div>
            <div className="test-card">
              <h1>AICTE Approved</h1>
              <p>
              Coursed approved by All India Council for Technical Education (AICTE), Govt. of India
              </p>
              <div className="name-details">
                <img src={Recon6} alt="" />
              </div>
            </div>
            <div className="test-card">
              <h1>UGC Accredited</h1>
              <p>
              Approved under
section 3 UGC Act 1956
              </p>
              <div className="name-details">
                <img src={Recon7} alt="" />
              </div>
            </div>
          </div>
          <div className="test-column column-wrap">
            {/* <div className="test-card">
              <h1>Ranked 1st in Enginnerring Cater</h1>
              <p>
              Only University in Uttrakhand with Diamond Subject Rating in Management Courses
              </p>
              <div className="name-details">
                <img src={Recon8} alt="" />
              </div>
            </div> */}
            <div className="test-card">
              <h1>Band-Excellent - ARIIA'2022 </h1>
              <p>
              Band-Excellent under the category 
"University & Deemed to be"(Private/Self Financed) (Technical) in ARIIA-2022
              </p>
              <div className="name-details">
                <img src={Recon9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
