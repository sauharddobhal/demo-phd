// import React from "react";
import GEU from "../../assets/geu.svg";
import GIRL from "../../assets/girl.svg";

const index = () => {
  return (
    <div className="get-in-and-footer">
      <div className="get-in-touch">
        <div className="git-left">
          <div className="text-holder">
            <h1>Get In Touch</h1>
            <p>
              Are you ready to take the next step toward your future career?
            </p>
            <a  style={{textDecoration:"underline"}} href="mailto:admissions@geu.ac.in">Contact Us</a>
          </div>
          <br />
          <img src={GIRL} className="mobile-girl" />
        </div>
        <div className="girl-img">
          <img src={GIRL} className="desktop-girl" />
        </div>
        <div className="git-right">
          <p>
          Call (Operational 9AM-6PM): 18008906027, 1800 18000 14/15, 1800 2701280
<br /><br />
WhatsApp: +917617770113
<br />
For Alumni related queries/ document requests, please write to alumni@geu.ac.in
<br /> <br />
For Educational Verification of Alumni (through Third Party Agencies), please write to alumni@geu.ac.in
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="f-left">
          <img src={GEU} />
          <p>
          The Graphic Era pioneers in education ever since its establishment in 1997, with accreditations and recognitions from world-renowned organizations namely QS I Gauge, Institute of Engineers, Computer Society of India, Indian Society of Technical Education, and many more. With a commitment of continual improvement and holistic development for every individual, Graphic Era (Deemed to be University), the highest-ranked university in the region, promises to ultimately transform dreams into reality
          </p>
          <p>© 2022 Graphic Era University. All rights reserved</p>
        </div>
        <div className="f-right">
          <div className="follow-links">
            <h3>Follow Links</h3>
            <ul> 
              <li><a style={{color:"#fff"}} target="_blank" href="https://www.facebook.com/GEUOfficial/">
                    Facebook
                </a> 
                    </li>
              <li><a style={{color:"#fff"}} target="_blank" href="https://www.instagram.com/geuofficial/">
                    Instagram
                </a> 
                    </li>
              <li><a style={{color:"#fff"}} target="_blank" href="https://linkedin.com/school/graphic-era-official">
                    Linkedin
                </a> 
                    </li> 
              <li><a style={{color:"#fff"}} target="_blank" href="https://twitter.com/GEU_Official">
                    Twitter
                </a> 
                    </li>
              <li><a style={{color:"#fff"}} target="_blank" href="https://www.youtube.com/GraphicEraOfficial">
                    Youtube
                </a> 
                    </li>
            </ul>
          </div>
          {/* <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Enroll Now</li>
              <li>About</li>
              <li>Courses</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default index;
