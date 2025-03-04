import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./basic.css";
const UpperCrustProsperityFund = () => {
  return (
    <div>
      <Navbar />
      <div className="moat-container">
        <section>
          <h1>UpperCrust Prosperity Fund</h1>
          <p>
            UpperCrust Prosperity Fund aims to benefit from investing into
            concentrated high conviction equity shares and equity-linked
            instruments of MOAT / emerging MOAT companies having superior
            corporate governance and capital allocation track record and which
            have potential to dominate specific niches of the Indian economy
            through sustainable competitive advantages built around brands,
            business processes, and strategic assets. It aims to deliver
            superior returns by investing in stocks from Sectors that can
            benefit from the Next trillion-dollar GDP growth.
          </p>
        </section>
        <section>
          <h2>Our Four Pillars</h2>
          <div className="pillars">
            <div className="pillar">Concentrated High Conviction Stocks</div>
            <div className="pillar">
              Sustainable strong MOATs & Excellent Capital Allocators
            </div>
            <div className="pillar">Investing through Cycles</div>
            <div className="pillar">
              Portfolio Construction & Risk Management
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UpperCrustProsperityFund;
