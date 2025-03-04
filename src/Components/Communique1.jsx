import React from "react";
import image4 from "../assets/blog-celebrating-our-achievemens.jpg";
import progress from "../assets/yop-10-performers.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Communique.css";
import { useNavigate } from "react-router-dom";
const Communique1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="communique-container">
        <div className="communique-image-container">
          <img src={image4} />
        </div>

        <p>14 June 2024</p>
        <h3>
          Celebrating Our Achievement: Top 10 Rankings for Our PMS Strategies
        </h3>
        <p>
          We are delighted to share some exciting news from Moat Financial
          Services and UpperCrust Wealth! Our three Portfolio Management
          Services (PMS) strategies have climbed into the top 10 rankings for
          May 2024. 🚀 This remarkable achievement is a testament to the trust
          and support of our incredible clients, and we couldn’t be more proud.
        </p>
        <p>
          When we started this journey, our goal was to provide unparalleled
          financial services, combining expertise with a deep commitment to our
          clients’ success. Achieving top 10 rankings is not just a milestone;
          it’s a reflection of our continuous pursuit of excellence and
          innovation. Our clients’ confidence in us has been the driving force
          behind this success. Your unwavering trust has allowed us to implement
          bold strategies and navigate the complexities of the financial markets
          with agility and foresight.
        </p>
        <p>
          This accomplishment is a shared victory. We are deeply grateful for
          your partnership and the belief you have shown in our team. It
          inspires us to work even harder, ensuring that we continue to deliver
          top-tier performance and exceed your expectations.
        </p>
        <p>
          Looking ahead, we are excited about the future. We remain committed to
          pushing boundaries, setting new benchmarks, and exploring new
          opportunities to grow and succeed together. Here’s to reaching new
          heights and achieving even greater successes in the future!
        </p>
        <p>Thank you for being an essential part of our journey.</p>
        <div className="progress-image">
          <img src={progress} alt="report" />
        </div>
        <button className="readmore-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Communique1;
