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
import leaderImage4 from "../assets/team/vinayachandran.jpg";

import research1 from "../assets/team/Jyothish.jpg";
import research2 from "../assets/team/ben.jpg";
import research3 from "../assets/team/nandhu-sb.jpg";
import research4 from "../assets/team/Midhun Profile Pic 2.jpg";
import research7 from "../assets/team/reshma.jpg";
import research5 from "../assets/team/DHRUV PAWASHE.jpg";


import marketing1 from "../assets/team/Twinkle-P-T.jpg";
import marketing2 from "../assets/team/muhad.jpg";
import marketing3 from "../assets/team/aiswarya.jpeg";

import operations1 from "../assets/team/sebastian-shiroj.jpg";
import operations2 from "../assets/team/rahul.jpg";
import operations3 from "../assets/team/manju-biju.jpg";

const Card = ({ image, name, title, onClick }) => (
  <div className="div-cards-image"  onClick={onClick}>
    <img src={image} className="cards-image" alt={`Photo of ${name}`} />
    <h3 className="card-name">{name}</h3>
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
      info: "Biju is a management \n professional with over two decades of experience in the capital markets and FMCG sector. With his extensive experience, he brings to the table his expertise in understanding the investor’s side of the story. Innovations and promotions, maintaining investor relations, management of accounts and taking a deep peek into the marketing aspects are his specialisations.",
    },
        {
      id: 4,
      image: leaderImage4,
      name: "Dr. T. Vinay Kumar",
      title: "Chairman",
      info: "Dr. T. Vinay Kumar is a visionary leader with over 40 years of distinguished experience in public relations, advertising, branding, and marketing. A scholar and strategist, he holds an MBA in Marketing, an MPhil, and a PhD in Entrepreneurship, along with a Postgraduate Diploma in Marketing & Sales Management. His academic and professional journey reflects a deep commitment to excellence, innovation, and community impact.As the Founder and Senior Partner of Guide Advertising & Marketing Associates and Chairman of Kome Vertika, Dr. Kumar has been instrumental in shaping integrated marketing communications in India. He currently serves as the National President of the Public Relations Council of India (PRCI), the country’s largest network of communication professionals. He also holds leadership roles in the World Communicators Council (WCC), Young Communicators Club (YCC), and several other national and international organizations.He also serves on the boards of several private companies and a publicly listed company.Dr. Kumar is a published author, having written “The Prize – Dive into the possibilities & Impact on Public Relations,” and has presented research at prestigious conferences across India. His accolades include the PRCI Chanakya Award, Rotary International Vocational Excellence Award, and multiple recognitions for his contributions to entrepreneurship, education, and social service. A passionate advocate for youth development, cultural preservation, and entrepreneurship, Dr. Kumar continues to inspire through his leadership, scholarship, and service. He is based in Kochi, Kerala, and remains actively engaged in mentoring, community initiatives, and global communication forums.",
    },
    {
      id: 2,
      image: leaderImage2,
      name: "Fazal Hameed",
      title: "Executive Director ",
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
      image: research4,
      name: "Midhun Joe James",
      title: "Head of strategy and investment",
      info: "Midhun Joe James is a seasoned expert with over 23 years of corporate experience in leading companies in India and Europe, including the Tata group, Bharti Airtel, etc. Educationally, Midhun holds an MBA in Finance and Marketing and a B.Tech in Electronics and Communication Engineering. Further enhancing his credentials, he is a NET-certified management professional and has successfully cleared the NISM Series XXI-B: Portfolio Managers Certification Examination and the NISM Series XV: Research Analyst Certification Examination, underscoring his profound expertise in financial markets and investment strategies. Midhun’s deep passion lies in finance, particularly Behavioural Finance, Capital Markets, and Value Investing. He is a voracious reader who meticulously follows Fundamental Research, Annual Reports, and Credit Rating Reports, continuously enriching his analytical acumen and strategic insights. As Head of Strategy and Investments, Midhun’s vision and analytical prowess position him uniquely to guide investment decisions, shape strategic direction, and deliver sustainable growth for our clients and stakeholders alike.",
    },
    {
      id: 2,
      image: research3,
      name: "Nandhu SB",
      title: "AI and Data Analyst",
      info: "Nandhu leverages advanced expertise in Data Science and Artificial Intelligence to enhance the performance of equity portfolios. With a strong foundation in predictive analytics and financial modeling, he leads data-driven investment strategies at Moat Financial Services, delivering impactful solutions for portfolio optimization and strategic asset allocation.Previously, he has contributed to several high-impact initiatives, including the Kerala Knowledge Economy Mission (KKEM), Vijnjana Pathanamthitta, and the Young Innovation Program, under the direct leadership of Dr. P.V. Unnikrishnan, Member Secretary of the Kerala Development and Innovation Strategic Council (K-DISC).Nandhu is currently pursuing a Bachelor of Science in Data Science and Applications at IIT Madras, further strengthening his academic foundation to support his work at the intersection of technology and finance.",
    },
    {
      id: 3,
      image: research2,
      name: "Ben Benny",
      title: "Equity Research Analyst",
      info: "Ben is an Equity Research Analyst with a strong foundation in financial analysis and valuation. He holds a Bachelor’s degree in Commerce and has successfully cleared CFA Level I. In addition, he has cleared the NISM Series XXI-B: Portfolio Managers Certification Examination and the NISM Series XV: Research Analyst Certification Examination. Currently preparing for CFA Level II, Ben is dedicated to deepening his expertise in investment research and equity valuation.",
    },
    {
      id: 4,
      image: research1,
      name: "Jyothish Vijayan",
      title: "Equity Research Analyst",
      info: "Jyothish Vijayan is an equity market professional with a focus on long-term, fundamentals-driven investing. Prior to joining Moat India Ltd, he gained hands-on experience in capital markets through roles at Axis Securities and Motilal Oswal. He has also cleared the NISM Series XV: Research Analyst Certification Examination. Jyothish represents the new generation of investors shaped by the growth and evolution of the Indian equity markets.",
    },
        {
      id: 6,
      image: research7,
      name: "Reshma Gopika",
      title: "Equity Research Analyst",
      info: "Reshma Gopika is an Equity Research Analyst with a strong foundation in financial analysis, valuation, and capital markets. She holds an MBA (Finance) and cleared CFA Level I. She is certified in Financial Modelling by NSE and holds the NISM Series XV – Research Analyst certification, demonstrating her technical expertise and regulatory knowledge.",
    },
        {
      id: 5,
      image: research5,
      name: "Dhruv Pawashe",
      title: "Equity Research Analyst",
      info: "Dhruv sees research as more than crunching numbers he sees it as storytelling with substance. He dives deep into businesses, connects macro shifts with micro details, and helps craft bespoke portfolios that stand the test of time.Backed by strong valuation skills and a sharp eye for patterns, Dhruv brings clarity and conviction to every investment idea he works on.",
    },
  ];

  const operations = [
    {
      id: 1,
      image: operations1,
      name: "Shiroj Sebastian",
      title: "Operations Manager",
      info: "He has over 22+ years experience of working with leading National level Stockbrokers in various roles. Prior to joining MOAT, he had worked in a senior position for RELIGARE Broking from 2008-2019. Shiroj is currently handling Operations.",
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
    {
      id: 3,
      image: marketing3,
      name: "Aiswarya Radhakrishnan",
      title: "Palakkad Cluster Head",
      info: "With over 17 years in banking and financial services associating with lead banking institutions as such Axis Banks,HDFC Banks, Aiswarya Radhakrishnan is a dynamic leader known for driving business growth, optimizing operations, and managing high-value portfolios. She has held key leadership roles, overseeing teams, expanding markets, and enhancing financial services. Her expertise in wealth management, risk assessment, and strategic planning has consistently delivered exceptional results, making her a trusted name in the industry.",
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
  

      <Footer />
    </div>
  );
};

export default Fullteam;
