import React, { useState } from "react";
import whatsappIcon from "../assets/icons/whatsapp-brands-solid.svg";
import "./Whatsapp.css";
const Whatsapp = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div>
      {" "}
      {/* Floating WhatsApp Button */}
      <div
        className="whatsapp-icon"
        onClick={() => setIsContactOpen(!isContactOpen)}
      >
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-svg" />
      </div>
      {/* Contact Us Popup */}
      {isContactOpen && (
        <div className="contact-menu">
          <div className="contact-content">
            <h3>Contact Us</h3>
            <p>
              Need assistance? <br />
              Chat with us on WhatsApp!
            </p>
            <a
              href="https://wa.me/919961729290"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-chat-btn"
            >
              Chat Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Whatsapp;
