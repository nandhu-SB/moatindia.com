import React, { useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import "./AboutUs.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import leaderImage1 from "../assets/team/biju-john.jpg";
import leaderImage2 from "../assets/team/Fazal-Hameed.jpg";
import leaderImage3 from "../assets/team/sudheesh-m.jpg";

import banner4 from "../assets/banner4.png";
import banner3 from "../assets/banner3.png";

import banner5 from "../assets/BANNER5.png";

import banner6 from "../assets/20250207_130121_0002.mp4";
import banner7 from "../assets/banner7.mp4";

import Credentials from "./Credentials";
import { Link } from "react-router-dom";
import Whatsapp from "./Whatsapp";

const Card = ({ image, name, title, onClick }) => (
  <div className="div-cards-image" onClick={onClick}>
    <img src={image} className="cards-image" alt={`Photo of ${name}`} />
    <p className="card-text">{name}</p>
    <p className="card-text">{title}</p>
  </div>
);
const AboutUs = () => {
  const location = useLocation();
  useEffect(() => {
    // Get the hash from the URL (e.g., '#who-we-are')
    const hash = location.hash;

    // If there's a hash, scroll to the element with that ID
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove '#' from hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          window.scrollBy(0, -150);
        }, 500);
      }
    }
  }, [location]);

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
    {
      id: 3,
      image: leaderImage3,
      name: "Sudheesh M",
      title: "Finance & Principal Officer",
      info: "Mr. Sudheesh boasts 17 years of extensive expertise in corporate finance, accounts, and audit, with a notable focus on portfolio management services spanning a decade. Commencing his professional journey with a renowned Chartered Accountant firm in Cochin in 2006, he has cultivated specializations in taxation, corporate audit, and accounting. Since 2013, he has contributed significantly to Moat Financial Services, currently assuming the roles of Head of Finance and Principal Officer. He holds a Chartered Accountancy Professional Education II certification from the Institute of Chartered Accountants of India and pursued his undergraduate studies at the University of Kerala. Furthermore, he has demonstrated proficiency by clearing the NISM Series XXI-B: Portfolio Managers Certification Examination and the NISM Series XV: Research Analyst Certification Examination.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 180, // Trigger offset
      // once: true
    });
  }, []);

  return (
    <div className="about-us-page">
      <Navbar />

      <div className="about-section" id="who-we-are" data-aos="flip-left">
        <div className="about-image">
          <img src={banner4} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>Who we are</h2>
          <p>
            Founded in 2013, we are experts in professional investment
            management, dedicated to identifying early-stage multi-bagger
            opportunities and maximizing value for our clients. <br />
            We strongly believe that protecting and prospering our clients hard
            earned money is a noble business.This is what drives us to always be
            sincere and honest
            <br />
            Our Portfolio Management Service (PMS) provides high-net-worth
            individuals with personalized investment strategies, tailored to
            meet their specific financial objectives, risk tolerance, and
            preferences.
          </p>
        </div>
      </div>
      <div className="moat-section" id="moat" data-aos="flip-left">
        <div className="moat-content">
          <h2>What is a Moat</h2>
          <p>
            Moat is a term that refers to a business’s ability to maintain a
            competitive advantage over its competitors. Competitive advantage is
            what makes an entity’s goods or services superior to all of a
            customer’s other choices.
            <br />
            Back in the days, moats were depressions around a castle, usually
            filled with water, serving as a preliminary line of defence. We
            believe that it really is the same with businesses as well! All
            businesses attract competition and `moats’ protect them from the
            competition that wants to move into their profit pool!
          </p>
        </div>
        <div className="moat-image">
          <video autoPlay loop muted>
            <source src={banner7} type="video/mp4" />
            your browser doesnot support this video
          </video>
        </div>
      </div>

      <div className="mission-section" id="mission" data-aos="flip-left">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            We want to create 500 Rupee Billionaires in 20 years or less using
            emerging moat businesses by compounding money consistently by more
            than 25% CAGR. To provide innovative, transparent, and sustainable
            financial solutions that help our clients create long-term wealth.
            We strive to deliver personalized services with integrity and
            excellence.
          </p>
        </div>
        <div className="mission-image">
          <img src={banner5} />
        </div>
      </div>

      <div className="vision-section" id="vision" data-aos="flip-left">
        <div className="vision-image">
          <img src={banner3} />
        </div>
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            To sustain happiness in families by safeguarding and generating
            wealth. We believe that protecting our clients' hard-earned money is
            a noble pursuit, and we are committed to ensuring financial security
            and prosperity for generations to come.
          </p>
        </div>
      </div>

      <div
        className="achievements-section"
        id="achivements"
        data-aos="flip-left"
      >
        <div className="achievements-content">
          <h2>Our PMS strategies are in the top 10</h2>
          <p>
            Moat Financial Services and UpperCrust Wealth! Our three Portfolio
            Management Services (PMS) strategies have climbed into the top 10
            rankings for May 2024.This remarkable achievement is a testament to
            the trust and support of our incredible clients, and we couldn’t be
            more proud. Over the years, we have achieved numerous milestones,
            from managing multi-million-dollar portfolios to earning the trust
            of countless satisfied clients across the globe.
          </p>
        </div>
        <div className="achievement-image">
          <video autoPlay loop muted>
            <source src={banner6} type="video/mp4" />
            your browser doesnot support this video
          </video>
          {/* <img src={banner5} /> */}
        </div>
      </div>

      <div className="team-section" id="team" data-aos="flip-left">
        <div className="team-content">
          <h2>Meet our team</h2>
          <p>
            Moat is owned and controlled by its skilled and seasoned management
            team, who have worked together closely over decades and continue to
            do so even today with the same investment philosophy and a clear
            alignment of interest! We follow the true spirit of equity investing
            and so naturally, Moat is born from our passion for providing
            professional and prudent investment management services. Our SEBI
            registered Portfolio Management Service (PMS) has a rich history of
            identifying several multi-bagger investment ideas early on over the
            last several years.
          </p>
        </div>
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>Our Visionaries</h2>

          <div className="image-container">
            <div className="image-container-sub">
              {leaders.map((leader) => (
                <Card
                  key={leader.id}
                  image={leader.image}
                  name={leader.name}
                  title={leader.title}
                  onClick={() =>
                    navigate(`/member/${leader.id}`, { state: leader })
                  }
                />
              ))}
            </div>
          </div>
          <Link to={"/Fullteam"}>
            <button className="readmore-button" type="button">
              View All
            </button>
          </Link>
        </div>
      </div>
      <Credentials />

      <Footer />
      <Whatsapp />
    </div>
  );
};

export default AboutUs;
