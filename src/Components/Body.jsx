import { useEffect, useRef, useState } from "react";
import "./Body.css";
import chess from "../assets/chess.png";
import pooram from "../assets/main_image.png";

import baniyan_tree from "../assets/baniyan_tree.png";

import { Roller } from "@fecapark/number-rolling";
import { Link } from "react-router-dom";

import biju from "../assets/team/biju-john.jpg";
import fazal from "../assets/team/Fazal-Hameed.jpg";
import Section from "./Section";

import leaderImage1 from "../assets/team/biju-john.jpg";
import leaderImage2 from "../assets/team/Fazal-Hameed.jpg";
import leaderImage3 from "../assets/team/sudheesh-m.jpg";

import research1 from "../assets/team/Jyothish.jpg";
import research2 from "../assets/team/ben.jpg";
import research3 from "../assets/team/nandhu-sb.jpg";
import research4 from "../assets/team/Midhun Profile Pic 2.jpg";
import research7 from "../assets/team/reshma.jpg";
const Body = () => {
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
}
  ];
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
        {/* <video autoPlay muted loop>
          <source src={oceanVideo} type="video/mp4" />
        </video> */}
        {/* <img src={hand} alt="hand" className="background-image" /> */}
        <img
          src={pooram}
          alt="Traditional Kerala Pooram festival illustration used as homepage banner"
          className="background-image"
        />
        <div className="overlay-content"></div>
      </div>

      <div
        className="legacy-section"
        id="legacy"
        role="region"
        aria-label="Company Legacy"
        tabIndex="0"
      >
        <div className="legacy-image">
          <div className="image-frame">
            <img
              src={baniyan_tree}
              alt="Banyan tree image representing Moat’s long-term investment legacy"
            />
          </div>
        </div>
        <div className="legacy-content">
          <h2>A Legacy Based On Sustained Performance</h2>
          <p className="sr-only">
            The following paragraph describes Moat's legacy and investment
            principles.
          </p>

          <p>
            At Moat Financial Services, we are more than just asset managers—we
            are long-term wealth partners. Since 2013, we have nurtured
            long-standing relationships with domestic and global investors
            assisting them in managing their equity portfolios in the Indian
            market. Our core philosophy is rooted in time-tested investment
            principles, enriched by the power of data analytics, research-driven
            insights, and a deep understanding of market dynamics. As we
            continue to grow, our mission remains steadfast—to empower our
            clients through smart, strategic, and personalized portfolio
            management in the vibrant landscape of Indian equities. We believe
            in protecting the client’s hard-earned money and creating
            generational wealth is a noble pursuit.
          </p>
          <Link to="/Aboutus">
            <button className="readmore-button" aria-label="Read more about Moat's legacy and investment principles.">Read More</button>
          </Link>
        </div>
      </div>
      <p className="quote"  aria-label="Inspirational quote by MS Dhoni">
        <i>
          “Success is not always about greatness. It’s about consistency.
          Consistent hard work leads to success. Greatness will come.”
        </i>
      </p>
      <p className="dhoni">- MS Dhoni</p>
      <div
        className="numbers"
        role="region"
        aria-label="Company Achievements Statistics"
      >
        <div className="numbers-sub" ref={yearsRef} data-id="years">
          <div aria-live="polite">
            {isVisible.years && (
              <Roller
                value={12}
                suffix="+"
                staggering
                align="center"
                rollDuration={3}
              />
            )}
          </div>

          <p>Years</p>
        </div>

        <div className="numbers-sub" ref={millionRef} data-id="million">
          <div aria-live="polite">
            {isVisible.million && (
              <Roller
                value={300}
                suffix="Cr+"
                align="center"
                staggering
                rollDuration={3}
              />
            )}
          </div>

          <p>Total AUM</p>
        </div>

        <div className="numbers-sub" ref={customersRef} data-id="customers">
          <div aria-live="polite">
            {isVisible.customers && (
              <Roller
                value={250}
                suffix="+"
                staggering
                align="center"
                rollDuration={3}
              />
            )}
          </div>

          <p>Happy Customers</p>
        </div>
      </div>

      <div className="legacy-section" id="legacy">
        <div className="legacy-image">
          <div className="image-frame">
            <img
              src={chess}
              alt="Chessboard representing strategic investment planning"
            />
            {/* <video loop muted autoPlay>
              <source src={bannervideo3} />
            </video> */}
          </div>
        </div>
        <div className="legacy-content">
          <h2>Strategy Designed to deliver Alpha</h2>
                    <p className="sr-only">
            The following paragraph describes Moat's investment strategy.
          </p>
          <p>
            Our investment strategy is meticulously engineered to generate
            consistent alpha by combining the power of research with deep
            financial insights. Through a systematic approach that blends value
            stability with growth potential, we identify high-conviction
            opportunities backed by robust fundamentals and market validation.
            Each portfolio is built using disciplined stock selection, optimized
            diversification, and real-time risk management. By removing
            emotional bias and focusing on quality, momentum, and intelligent
            allocation, the strategy aims to outperform benchmarks and deliver
            superior risk-adjusted returns over the long term.
          </p>
          <Link to="/Schemes">
            <button className="readmore-button" aria-label="Read more about our investment strategy">Read More</button>
          </Link>
        </div>
      </div>
      <div className="pioneer-section" id="pioneer">
        <div className="member-section">
          <h2>Core Investment Committee</h2>
        </div>

        <div
          className="member-section"
          id="member-section-body"
          role="region"
          aria-label="Investment Committee Members"
        >
          {leaders.map((leader) => (
            <div className="member" key={leader.id}>
              <Link
                to={`/member/${leader.key}`}
                state={leader}
                aria-label={`View full profile of ${leader.name}, ${leader.title}`}
              >
                <div className="member-pic" id="biju">
                  <img
                    src={leader.image}
                    alt={`Picture of ${leader.name} designation ${leader.title}`}
                  />
                  <div className="member-about">
                    <h3>{leader.name}</h3>
                    <p>{leader.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="member-section" id="member-section-body">
          {research.map((leader) => (
            <div className="member" key={leader.id}>
              <Link
                to={`/member/${leader.key}`}
                state={leader}
                aria-label={`View full profile of ${leader.name}, ${leader.title}`}
              >
                <div className="member-pic" id="biju">
                  <img
                    src={leader.image}
                    alt={`Picture of ${leader.name} designation ${leader.title}`}
                  />
                  <div className="member-about">
                    <h3>{leader.name}</h3>
                    <p>{leader.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Link to="Fullteam">
          <button className="readmore-button" id="pioneer-section-button" aria-label="View our full team of investment committee members">
            See Our Full Team
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
