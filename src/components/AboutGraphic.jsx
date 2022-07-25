import React from "react";
import AboutImg from "../assets/about.png";
import AboutTxt from "../assets/abouttxt.svg";
const AboutGraphic = () => {
  return (
    <div className="this-isgraphic-section-wrap">
      <div className="this-isgraphic-section">
        <img src={AboutTxt} alt="" />
        <div className="this-istest-part">
          <div className="this-istest-part1">
            <p>
            Every student who comes to Graphic Era Deemed to be University benefits from top-notch facilities on its  stunning 40-acre campus, nestled in the midst of Doon Valley, at the foothills of the Lesser Himalayas, against the  backdrop of the serene Rajaji National Park. The beauty that one experiences at Graphic Era is unparalleled, it  provides the ideal ambience for academic and innovative pursuits!
            </p>
          </div>
          <div className="this-istest-part2">
            <p>
            The Graphic Era Educational Society (GEES), established in 1993, is a non-profit organization that aims to mobilize world-class education and generate resources for providing and supporting quality education for all. The society recognizes the right of every individual to lead a life of dignity and self-respect in a just and equitable manner. 
            </p>
          </div>
        </div>
        {/* <div className="this-isgraphic-section-text">
        <div className="this-isgraphic-section-text1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat quo voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat quo voluptatum asperiores explicabo quam nihil illum! Ut, quis ipsam? Ad, modi, soluta totam animi error laudantium dolores nemo <br /> <br />  molestiae dicta dolorem earum nesciunt facilis, odio officiis. Ipsa neque sed autem incidunt, iste maiores commodi voluptas nesciunt mollitia placeat voluptate.</p>
        </div>
        <div className="this-isgraphic-section-text2">
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat quo voluptatum consectetur adipisicing elit. Aliquid repellat quo voluptatum asperiores explicabo quam nihil illum! Ut, quis ipsam? Ad, modi, soluta totam animi error laudantium dolores nemo  <br /> <br /> molestiae dicta dolorem earum nesciunt facilis, odio officiis. Ipsa neque sed autem incidunt, iste maiores commodi voluptas nesciunt mollitia placeat voluptate.</p>
        </div>
        
    </div> */}
      </div>
      <div className="about-grpahic-section1">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutGraphic;
