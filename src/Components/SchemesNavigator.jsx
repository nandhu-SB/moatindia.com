import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./basic.css";

const schemes = [
  {
    name: "Emerging Moat",
    path: "/newsletter/Emerging Moat - Factor Based Portfolio.pdf",
    isExternal: true,
  },
  {
    name: "Moderate Compounders",
    path: "/newsletter/Moderate Compounders.pdf",
    isExternal: true,
  },
  
];

const schemes2 = [
  
  { name: "Special Opportunities", path: "/SpecialOpportunities" },
  { name: "UpperCrust Wealth Fund", path: "/UpperCrustWealthFund" },
  // { name: "UpperCrust Growth Fund", path: "/UpperCrustGrowthFund" },
  // { name: "UpperCrust Prosperity Fund", path: "/UpperCrustProsperityFund" },
];

const SchemesNavigator = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, isExternal = false) => {
    if (isExternal) {
      // Open PDFs or external links in new tab
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      // Navigate internally using React Router
      navigate(path);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="moat-container">
        <section>
          <h2>Our Investment Philosophy</h2>
          <p>
            Our investment philosophy keeps us fixated on our goal of picking
            premium quality businesses while safeguarding the client's capital.
            We focus on high potential emerging businesses that have strong
            fundamentals and scalable models, capable of becoming tomorrow's
            leaders.
          </p>
          <p>
            We follow a structured, rule-based approach built on three pillars:
          </p>
          <ul>
            <li>Fundamental Research</li>
            <li>Risk Management</li>
            <li>Long-Term Discipline</li>
          </ul>
        </section>

        <section>
          <h3>Our Schemes</h3>
          <p>
            Each scheme offers a versatile and tailored approach to fulfill
            unique investment perspectives.
          </p>

          <div className="pillars">
            {schemes.map(({ name, path, isExternal }, index) => (
              <button
                key={index}
                className="pillar"
                onClick={() => handleNavigation(path, isExternal)}
              >
                <h4>{name}</h4>
              </button>
            ))}
          </div>

          <div className="pillars">
            {schemes2.map(({ name, path }, index) => (
              <button
                key={index}
                className="pillar"
                onClick={() => handleNavigation(path)}
              >
                <h4>{name}</h4>
              </button>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SchemesNavigator;
