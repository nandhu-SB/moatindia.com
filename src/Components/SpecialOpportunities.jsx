import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./basic.css";

import { useNavigate } from "react-router-dom";

const schemes = [
  { name: "Emerging India", path: "/files/MOAT- Emerging India Portfolio.pdf",isExternal: true },
  { name: "Shariah Complaint Portfolio", path: "/newsletter/MOAT_-_Shariah_Complaint_Portfolio .pdf", isExternal: true},

  // { name: "UpperCrust Growth Fund", path: "/UpperCrustGrowthFund" },
  // { name: "UpperCrust Prosperity Fund", path: "/UpperCrustProsperityFund" },
];



const SpecialOpportunities = () => {
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
        <h1>Special Opportunities</h1>

        <section>
          <p>
Our investment strategy focuses on identifying growth opportunities across industries,
regardless of size or sector. We seek businesses with significant potential for future growth,
including smaller players and large-cap companies. We aim to achieve capital appreciation
through a blend of value and growth investing. Our approach focuses on identifying superior
compounding growth stories that can deliver long-term results. We seek high-quality,
resilient, and relatively smaller players in their respective industries who can grow even
bigger in the future.
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
          

        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SpecialOpportunities;
