import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./basic.css";

const schemes = [
  { name: "Emerging Moat", path: "/EmergingMoat" },
  { name: "Moderate Compounders", path: "/ModerateCompounders" },
  { name: "Special Opportunities", path: "/SpecialOpportunities" },
  { name: "UpperCrust Wealth Fund", path: "/UpperCrustWealthFund" },
  { name: "UpperCrust Growth Fund", path: "/UpperCrustGrowthFund" },
  { name: "UpperCrust Prosperity Fund", path: "/UpperCrustProsperityFund" },
];

const SchemesNavigator = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div>
      <Navbar />
      <div className="moat-container">
        <section>
          <h3>Our Schemes</h3>
          <p>
            Each scheme consists of a versatile and tailored approach to fulfill
            different and unique perspectives.
          </p>
          <div className="pillars">
            {schemes.map(({ name, path }, index) => (
              <button
                key={index}
                className="pillar"
                onClick={() => navigate(path)}
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
