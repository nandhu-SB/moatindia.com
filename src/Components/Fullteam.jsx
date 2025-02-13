import React, { useEffect, useState } from "react";
import "./Fullteam.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

import leaderImage1 from "../assets/team/biju-john.jpg";
import leaderImage2 from "../assets/team/Fazal-Hameed.jpg";
import leaderImage3 from "../assets/team/sudheesh-m.jpg";

import research1 from "../assets/team/Sujith-S.jpg";
import research2 from "../assets/team/ravi-kumar.jpg";
import research3 from "../assets/team/nandhu-sb.jpg";

import marketing1 from "../assets/team/Twinkle-P-T.jpg";
import marketing2 from "../assets/team/muhad.jpg";

import operations1 from "../assets/team/sebastian-shiroj.jpg";
import operations2 from "../assets/team/rahul.jpg";
import operations3 from "../assets/team/manju-biju.jpg";

const Card = ({ image, name, title, onClick }) => (
  <div className="div-cards-image" data-aos="fade-right" onClick={onClick}>
    <img src={image} className="cards-image" alt={`Photo of ${name}`} />
    <p className="card-text">{name}</p>
    <p className="card-text">{title}</p>
  </div>
);

const Fullteam = () => {
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

  const research = [
    {
      id: 1,
      image: research1,
      name: "Sujith S",
      title: "Research Analyst",
      info: "Mr. Sujith S has more than nine years of extensive experience in finance and the capital market. His professional journey commenced as an Accounts Executive within the Government sector, subsequently transitioning into the realm of the capital market. Before his tenure at Moat, he held the position of Research Analyst at AAA Profit Analytics Pvt. Ltd.",
    },
    {
      id: 2,
      image: research2,
      name: "Ravi Kumar",
      title: "Research Analyst",
      info: "Ravi leverages advanced data analysis techniques to extract valuable insights that drive strategic decision-making. With expertise in business analysis, forecasting, and financial modelling, he specializes in managing complex research projects, performing in-depth data analysis, and delivering actionable recommendations. He is a CFA aspirant and is an integral member of the research team at Moat.",
    },
    {
      id: 3,
      image: research3,
      name: "Nandhu SB",
      title: "AI and Data Analyst",
      info: "Nandhu applies advanced expertise in Data Science and Artificial Intelligence to enhance the performance of equity portfolios. With a strong proficiency in predictive analytics and financial modeling, Nandhu spearheads data-driven investment strategies at Moat Financial Services, delivering impactful solutions for portfolio optimization.",
    },
  ];

  const operations = [
    {
      id: 1,
      image: operations1,
      name: "Shiroj Sebastian",
      title: "Operations Manager",
      info: "He has over 22+ years experience of working with leading National level Stockbrokers in various roles. Prior to joining MOAT, he had worked in a senior position for RELIGARE Broking from 2008-2019. He is a Commerce Graduate and is currently pursuing his Masters’s in Finance (MBA). Shiroj is currently handling Operations.",
    },
    {
      id: 2,
      image: operations2,
      name: "Rahul",
      title: "Operations",
      info: "He has over 8+ years of experience working in IT and Capital Market. Before joining Moat, he worked as an Equity Dealer with Geojit Financial Services Ltd. He is a BSc electronics Graduate Rahul is currently handling Dealing Operations",
    },
    {
      id: 3,
      image: operations3,
      name: "Manju Biju",
      title: "Administrator",
      info: "She has over 25+ years of experience working with various companies in different positions like systems analysts, back-office operations, Data Analyst, etc. Before joining MOAT, she had worked in Cochin Stock Exchange/Cochin Stock Brokers Ltd as Programmer cum Development Officer (1994-2017). She is a Physics graduate with a PG Diploma in Computer Application. Manju is currently handling Admin-related work.",
    },
  ];

  const marketing = [
    {
      id: 1,
      image: marketing1,
      name: "Twinkle P.T",
      title: "GM - Marketing",
      info: "Mr. Twinkle possesses over 17 years of extensive experience in the banking sector, having worked at both Axis Bank and HDFC Bank. His journey began as a Business Development Executive and ascended to the role of Senior Manager. With a strong focus on team building, customer relationship management, retail branch banking sales, service quality, cross-selling, customer base expansion, and retention, he has honed exceptional skills over the years. Thriving in fast-paced environments, he excels at handling challenging clients and swiftly problem-solving. His keen analytical abilities have been instrumental in enhancing customer service processes. Currently, he spearheads marketing and business development initiatives at Moat, alongside having successfully completed the NISM XXI-A PMS Distributors Certification Examination.",
    },
    {
      id: 2,
      image: marketing2,
      name: "Muhad C. M.",
      title: "Territory Head Middle East",
      info: "Mr. Muhad is a seasoned professional with over 10 years of comprehensive experience in the banking industry, most notably as a Senior Manager at Axis Bank. His expertise spans team leadership, customer relationship management, retail branch banking sales, service quality enhancement, cross-selling, and customer base expansion and retention. He serves as the Territory Head for the Middle East at Moat, leading overseas marketing and business development initiatives. In addition, he has completed the NISM XXI-A PMS Distributors Certification Examination.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 180,
    });
  }, []);

  return (
    <div className="about-us-page-full-team">
      <Navbar />

      <div className="team-section" id="team">
        <div className="cards">
          <div className="image-container">
            <h2>Leadership</h2>
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

            <h2>Marketing</h2>
            <div className="image-container-sub">
              {marketing.map((leader) => (
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

            <h2>Research</h2>
            <div className="image-container-sub">
              {research.map((leader) => (
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

            <h2>Operations</h2>
            <div className="image-container-sub">
              {operations.map((leader) => (
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
          <Link to="/AboutUs">
            <button className="readmore-button">Go Back</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fullteam;
