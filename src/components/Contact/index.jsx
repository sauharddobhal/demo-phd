import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <label>Full Name</label>
        <input placeholder="Dhairya" type="text" className="contact-input" />
        <label>Email</label>
        <input
          placeholder="dhairyamarwah01@gmail.com"
          type="text"
          className="contact-input"
        />
        <label>Mobile</label>
        <input placeholder="7037484499" type="text" className="contact-input" />
        <label>Area of Interest</label>
        <select type="text" className="contact-select">
          <option value="">Select</option>
        </select>
        <div className="checkbox-container">
          <input type="checkbox" className="contact-checkbox" />I authorise
          Graphic Era Online and its associates to contact me with updates &
          notifications via email, SMS, WhatsApp, and voice call
        </div>
        <button className="enroll-button">
          <span className="button-text">Enroll Now</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
