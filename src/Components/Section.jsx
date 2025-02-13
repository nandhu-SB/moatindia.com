import React, { useEffect } from "react";
// import './Body.css'
import "./Section.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Section = ({
  title,
  description,
  image,
  buttonText,
  buttonURL,
  backgroundVideo,
  element_id,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 180, // Trigger offset
      // once: true
    });
  }, []);
  return (
    <div className="content-section">
      <div className="background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <div className="section-image">
        <img src={image} className="legacy-image" />
      </div>

      <div className="section-body">
        <h2>{title}</h2>
        <p data-aos="fade-right">{description}</p>
        <Link
          to={buttonURL}
          onClick={() =>
            document
              .getElementById({ element_id })
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <button className="readmore-button" type="button">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section;
