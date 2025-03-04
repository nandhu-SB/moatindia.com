import React, { useEffect, useRef, useState } from "react";
import "./Body.css";
import bannervideo from "../assets/banner_1.mp4";
import bannervideo3 from "../assets/pyramid.mp4";
import bannervideo2 from "../assets/enam-india-desk-banner.webp";
import oceanVideo from "../assets/ocean.mp4";
import image1 from "../assets/Homepage_About_us.webp";
import image2 from "../assets/Homepage_Strategy-1.webp";
import image3 from "../assets/taj.png";

import image4 from "../assets/blog-celebrating-our-achievemens.jpg";
import image5 from "../assets/blog-rising-profits.jpg";
import image6 from "../assets/blog-crafting-wealth.jpg";

import biju from "../assets/team/biju-john.jpg";
import fazal from "../assets/team/Fazal-Hameed.jpg";
import Section from "./Section";
import handshake4 from "../assets/handshake4.jpg";
import { Roller } from "@fecapark/number-rolling";
import { Link, useNavigate } from "react-router-dom";

import leaderImage1 from "../assets/team/biju-john.jpg";
import leaderImage2 from "../assets/team/Fazal-Hameed.jpg";
import leaderImage3 from "../assets/team/sudheesh-m.jpg";

const Card = ({ image, name, title, onClick }) => (
  <div className="div-cards-image" data-aos="fade-right" onClick={onClick}>
    <img src={image} className="cards-image" alt={`Photo of ${name}`} />
    <p className="card-text">{name}</p>
    <p className="card-text">{title}</p>
  </div>
);

const Body = () => {
  const navigate = useNavigate();

  const leaders = [
    {
      id: 1,
      image: leaderImage1,
      name: "Biju John",
      title: "CEO & Founder",
      info: "Biju is a management professional with over two decades of experience in the capital markets and FMCG sector. With his extensive experience, he brings to the table his expertise in understanding the investor’s side of the story. Innovations and promotions, maintaining investor relations, management of accounts and taking a deep peek into the marketing aspects are his specialisations.",
    },
    {
      id: 2,
      image: leaderImage2,
      name: "Fazal Hameed",
      title: "Executive Director – Operations and Compliance",
      info: "A seasoned financial expert, Fazal has over 30 years of experience navigating the intricacies of India’s capital markets. Since 1997, he has been a member of the Cochin Stock Exchange (now known as CSBL), demonstrating his deep understanding of equity market operations and adherence to regulations. Currently, Fazal holds the position of Executive Director, overseeing the Operations and Compliance functions at Moat. Before joining Moat, he honed his skills within the finance departments of prominent multinational companies based in the Middle East. His expertise is further bolstered by his successful completion of the NISM Series XXI-B Portfolio Managers Certification Examination.",
    },
  ];
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
      <div className="background-video-container">
        <video autoPlay muted loop>
          <source src={oceanVideo} type="video/mp4" />
        </video>
        {/* <img src={bannervideo2} alt="banner" className="background-image" /> */}
        <div className="overlay-content">
          <h1>Founded On Values</h1>
          <h1>Driven By Trust</h1>
          <p>Your Wealth Our Priority</p>
        </div>
      </div>
      <div className="legacy-section" id="legacy">
        <div className="legacy-image">
          <div className="image-frame">
            <img src={image3} alt="Legacy" />
          </div>
        </div>
        <div className="legacy-content">
          <h2>A Legacy Based On Sustained Performance</h2>
          <p>
            Moat Financial Services is India’s growing portfolio management
            service provider. We are built on values that drive our core
            investment philosophy. Since 1997, we have nurtured long-standing
            relationships with domestic and global investors assisting them in
            managing their equity portfolios in the Indian market.
          </p>
          <Link to="/Aboutus">
            <button className="readmore-button">READ MORE</button>
          </Link>
        </div>
      </div>
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

      <div className="legacy-section" id="legacy">
        <div className="legacy-image">
          <div className="image-frame">
            {/* <img src={image2} alt="Legacy" /> */}
            <video loop muted autoPlay>
              <source src={bannervideo3} />
            </video>
          </div>
        </div>
        <div className="legacy-content">
          <h2>Strategy Designed to give more Alpha</h2>
          <p>
            Our focus is to create sustainable solutions to grow our client’s
            wealth in the long-term
          </p>
          <Link to="/Aboutus">
            <button className="readmore-button">READ MORE</button>
          </Link>
        </div>
      </div>
      <div className="pioneer-section" id="pioneer">
        <div className="member-section">
          <h2>Our Founding Members who have set our core values</h2>
          <Link to="Fullteam">
            <button className="readmore-button" id="pioneer-section-button">
              READ MORE
            </button>
          </Link>
        </div>

        <div className="member-section" id="member-section-body">
          {leaders.map((leader) => (
            <div className="member" key={leader.id}>
              <Link to={`/member/${leader.key}`} state={leader}>
                <div className="member-pic" id="biju">
                  <img src={leader.image} alt={leader.name} />
                  <div className="member-about">
                    <h3>{leader.name}</h3>
                    <p>{leader.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <p className="quote">
          " Disciplined investment approach always returns superior performance
          "
        </p>
      </div>
      <div className="media-container">
        <div className="media-section">
          <Link to="/Communique1">
            <div className="media-section-image">
              <img src={image4} alt="blog pic" />
            </div>
            <div className="media-section-content">
              <p>June 14,2024</p>
              <h4>
                Celebrating Our Achievement: Top 10 Rankings for Our PMS
                Strategies
              </h4>
              <p>
                We are delighted to share some exciting news from Moat Financial
                Services and UpperCrust Wealth! Our three Portfolio Management
                Services (PMS) strategies have climbed into the top 10 rankings
                for May 2024 🚀
              </p>

              <button className="readmore-button">READ MORE</button>
            </div>
          </Link>
        </div>

        <div className="media-section">
          <Link to="./Communique2">
            <div className="media-section-image">
              <img src={image5} alt="blog pic" />
            </div>
            <div className="media-section-content">
              <p>December 03, 2023</p>
              <h4>
                Rising Profits on a Falling Rupee: IT and Pharma Sectors Set to
                Soar
              </h4>
              <p>
                IT SECTOR India’s technology industry revenue is estimated to be
                $245 Bn in FY 2023 Technology exports at $194 Bn (80%) and
                domestic revenue is $51 Bn (20%) TOP COMPANIES UNDER IT The
                total revenue of TCS is 2,25,458 Cr out of which 48% is...
              </p>
              <button className="readmore-button">READ MORE</button>
            </div>
          </Link>
        </div>

        <div className="media-section">
          <Link to="/Communique3">
            <div className="media-section-image">
              <img src={image6} alt="blog pic" />
            </div>
            <div className="media-section-content">
              <p>August 13, 2023</p>
              <h4>
                Crafting Wealth, Capturing the Remarkable: Your Portfolio, Our
                Passion!
              </h4>
              <p>
                Embrace the journey from the fear of missing out to the pinnacle
                of Financial Freedom by taking decisive action today with Moat
                Financial Services Private Ltd Our diligently made investment
                fund presents a thriving opportunity to assure your...
              </p>
              <button className="readmore-button">READ MORE</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
