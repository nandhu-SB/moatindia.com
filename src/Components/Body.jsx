import React, { useEffect, useRef, useState } from "react";
import "./Body.css";
import bannervideo from "../assets/Banner_1.mp4";
import bannervideo2 from "../assets/Finance Business Video Background_20250207_130003_0001.mp4";

import Section from "./Section";
import handshake4 from "../assets/handshake4.jpg";
import { Roller } from "@fecapark/number-rolling";

const Body = () => {
  const [isVisible, setIsVisible] = useState({
    years: false,
    million: false,
    customers: false,
  });

  const yearsRef = useRef();
  const millionRef = useRef();
  const customersRef = useRef();

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setIsVisible((prevState) => ({
            ...prevState,
            [id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    [yearsRef, millionRef, customersRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [yearsRef, millionRef, customersRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="body_div">
      {/* Section with background video */}
      <Section
        title="Welcome to Moat"
        description="Moat Financial Services is India’s growing Sebi-Registered Portfolio Management Service provider. Established in 2013, we have nurtured long-standing relationships with domestic and global investors. Built on values of trust, transparency, and consistent growth, we assist clients in managing their equity portfolios to achieve sustainable financial success."
        image={handshake4}
        buttonText="Read More"
        buttonURL="/AboutUs"
        backgroundVideo={bannervideo2}
        element_id="mission"
      />

      <div className="numbers">
        <div className="numbers-sub" ref={yearsRef} data-id="years">
          {isVisible.years && (
            <Roller
              value={11}
              suffix="+"
              staggering
              align="center"
              rollDuration={3}
            />
          )}
          <p>Years</p>
        </div>

        <div className="numbers-sub" ref={millionRef} data-id="million">
          {isVisible.million && (
            <Roller
              value={2000}
              suffix="+"
              align="center"
              staggering
              rollDuration={3}
            />
          )}
          <p>Million Total AUM</p>
        </div>

        <div className="numbers-sub" ref={customersRef} data-id="customers">
          {isVisible.customers && (
            <Roller
              value={200}
              suffix="+"
              staggering
              align="center"
              rollDuration={3}
            />
          )}
          <p>Happy Customers</p>
        </div>
      </div>

      <Section
        title={"Our Core"}
        description={`At Moat Finances, we believe that protecting and prospering our client's hard-earned money is a noble business.
        We are committed to delivering exceptional value by identifying and investing in high-quality opportunities that have the potential to generate sustainable returns.
        Discipline lies at the heart of our investment approach, as we carefully and consistently evaluate businesses to ensure robust decision-making.
        We are deeply driven by a growth-oriented mindset, striving to expand our clients' wealth while adapting to evolving market dynamics.
        Above all, we seek opportunities in every market environment, leveraging insights and expertise to navigate challenges and unlock new avenues for success.`}
        buttonText="Read More"
        buttonURL="/AboutUs"
        element_id="mission"
      />

      <div className="video-banner-div">
        <video autoPlay loop muted className="banner-video">
          <source src={bannervideo} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="banner-overlay">
          <h1>OCEAN OF OPPORTUNITIES</h1>
          <p>Where trust, expertise, and innovation create success stories.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
