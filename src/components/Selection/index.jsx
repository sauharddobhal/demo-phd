import React from "react";
import "../../styles/Selection.css";
import waves from "../../assets/waves.svg";
import line1 from "../../assets/selection-line1.svg";
import line2 from "../../assets/selection-line2.svg";
import line3 from "../../assets/selection-line3.svg";
import line4 from "../../assets/selection-line4.svg";
import line5 from "../../assets/selection-line5.svg";
import line6 from "../../assets/6.svg";
import fr from "../../assets/Rectangle 372.svg";
import sl1 from "../../assets/sl1.svg";
import sl2 from "../../assets/sl2.svg";
import sl3 from "../../assets/sl3.svg";
import sl4 from "../../assets/sl4.svg";
import sl5 from "../../assets/sl5.svg";
import sl6 from "../../assets/6-phone.svg";
import arc from "../../assets/underline.svg";
const Selection = () => {
  return (
    <div className="selection_process">
      <div className="map1">
        <div className="one">
          <div></div>
          <div>
            <h1>
              <span>Selection </span> Process
            </h1>
            <img src={arc} alt="" />
          </div>
          <div>
            <h3>Appear for GEU  Exempted for UGC NET, GATE Qualified</h3>
          </div>
          <div></div>
          <div>
            <h3>Issuance of Offer letters to selected candidates.</h3>
          </div>
          <div></div>
          <div>
            <h3>Payment of enrolment fee as per date specified in the admission offer letter.</h3>
          </div>
          <div className=""></div>
        </div>
        <div className="two">
          <div>
            {" "}
            <img src={fr} alt="" />
          </div>
          <div>
            <img src={line1} alt="" />
          </div>
          <div>
            <img src={line2} alt="" />
          </div>
          <div>
            <img src={line3} alt="" />
          </div>
          <div>
            <img src={line4} alt="" />
          </div>
          <div>
            <img src={line5} alt="" />
          </div>
          <div>
            <img src={line6} alt="" />
          </div>
          <div className=""> <img src={fr} alt="" /></div>
        </div>
        <div className="three">
          <div></div>
          <div>
            <h3>Fill the application form in chosen domain.</h3>
          </div>
          <div></div>
          <div>
            <h3> Selected candidates to appear for Interview</h3>
          </div>
          <div></div>
          <div>
            <h3>

            Registration and commencement of course work
            </h3>
          </div>
          <div></div>
          <div className=""></div>
        </div>
      </div>
      <div className="map2">
        <div className="head">
          <h1>
            <span>Selection </span> Process
          </h1>
          <span>
            <img src={arc} alt="" />
          </span>
        </div>
        <div>
          <div>
            <img src={sl1} alt="" />
          </div>
          <div className="sec">
            <h3>Fill the application form in chosen domain.</h3>
          </div>
        </div>
        <div>
          <div>
            <img src={sl2} alt="" />
          </div>
          <div className="sec">
            <h3>
              Appear for Entrance Examination are exempted from UGC NET, GATE
              Qualified
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src={sl3} alt="" />
          </div>
          <div className="sec">
            <h3> Selected candidates to appear for Interview</h3>
          </div>
        </div>
        <div>
          <div>
            <img src={sl4} alt="" />
          </div>
          <div className="sec">
            <h3>Issuance of Offer letters to selected candidates.</h3>
          </div>
        </div>
        <div>
          <div>
            <img src={sl5} alt="" />
          </div>
          <div className="sec">
            <h3>
              Payment of enrolment fee as per date specified in the admission
              offer letter.
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src={sl6} alt="" />
          </div>
          <div className="sec">
            <h3>
              Registration and commencement of course work</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
