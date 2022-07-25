import React, { useState } from "react";
import GEU from "../assets/geu.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Axios from "axios";

const FirstSection2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("select");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      mobile,
      areaOfInterest,
    };
    // const notify = () => toast("Please Enter your name");
    //Validation
    if (name === "" || email === "" || mobile === "" || areaOfInterest === "select") {
      // notify();
      toast.error("Please Fill all the feilds", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
       
    }
    else if(mobile.length !== 10){
      toast.error("Please Enter a valid mobile number", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
 

    Axios.post("https://geuformbackend.herokuapp.com/form/createForm", formData)
      .then((res) => {
        if(res.data.success){
          toast.success(" Form Submitted Successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        console.log(res)
      })

      .catch((err) => console.log(err));
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1300,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="new-first-section-wrap">
        <ToastContainer
          position="bottom-right"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="new-first-section-wrap-1">
          <div className="new-first-section-wrap-1-cont">
            <div className="new-first-section-wrap-1-logo">
              <img src={GEU} alt="" />
            </div>
            <div className="new-first-section-wrap-1-text">
              <div className="new-first-section-wrap-1-text-flex">
                <h1>Ph.d</h1>
                <h2>
                  Admission <br />
                  Open{" "}
                </h2>
              </div>
              <p>
                Enroll for your Ph.D program at one of the Top Research
                Facilities in India, getting mentored by some of the Top
                Researchers of the country.
              </p>
            </div>
          </div>
          <div className="new-first-section-wrap-1-cont2">
            <Slider {...settings}>
              <div>
                <p>Institutional Fellowship of</p>
                <h1>₹36000/month</h1>
                <p>
                  for NET/GATE/JRF
                  <br />
                  Qualified Candidates*
                </p>
                <span>
                  Continuation of Scholarship dependent on performance
                  parametters*
                </span>
              </div>

              <div>
                <p>Aditional fund of upto</p>
                <h1>₹2/LPA</h1>
                <p>
                  for merit position holders in
                  <br />
                  |the entrance examination*
                </p>
                <span>
                  Continuation of Scholarship dependent on performance
                  parametters*
                </span>
              </div>
              <div>
                <p>Institutional Fellowship of</p>
                <h1>₹32000/month</h1>
                <p>
                  to be provided to NET/GATE/JRF
                  <br />
                  Qualified Candidates*
                </p>
                <span>
                  Continuation of Scholarship dependent on performance
                  parametters*
                </span>
              </div>
            </Slider>
          </div>
        </div>
        <div className="new-first-section-wrap-2">
          <div className="contact-form-apply-page">
            <h1>Apply Now</h1>
            <div className="apply-page-container-contact">
              <form>
                <label>Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="contact-input"
                />
                <label>Email</label>
                <input
                  // name="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@gmail.com"
                  className="contact-input"
                />
                <label>Mobile</label>
                <input
                  placeholder="Your Phone no."
                  type="number"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="contact-input"
                />
                <label>Area of Interest</label>
                <select
                  name="areaOfInterest"
                  type="text"
                  className="contact-select"
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                >
                  <option value="select">Select</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Geusciences">Geusciences</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Computer">Computer Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Management">Management</option>
                  <option value="Law">Law</option>
                  <option value="Design">Design</option>
                  <option value="Pharmaceutical">Pharmaceutical</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Microbiology">Microbiology</option>
                  <option value="Modern">Modern Science</option>
                  <option value="Liberal">Liberal Studies</option>
                  <option value="Food">Food and Nutrition</option>
                </select>
                <div className="checkbox-container">
                  <input type="checkbox" className="contact-checkbox" />I
                  authorise Graphic Era Online and its{" "}
                  <br className="remove-r-contact" /> associates to contact me
                  with updates <br className="remove-r-contact" /> &
                  notifications via email, SMS, WhatsApp,{" "}
                  <br className="remove-r-contact" />
                  and voice call
                </div>
                <button onClick={handleSubmit} className="enroll-button">
                  <span className="button-text">Enroll Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection2;
