import React from "react";
import "./basic.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UpperCrustWealthFund = () => {
  return (
    <div>
      <Navbar />
      <div className="moat-container">
        <h1>UpperCrust Wealth Fund</h1>

        <section>
          <p>
            UpperCrust Wealth Fund is a multi-cap core and Satellite themed
            Portfolio Management Service (PMS). Our strategy follows a set of
            guidelines that help us cherry-pick quality businesses run by
            premium management, all while bearing in mind our client's
            investment objectives.
          </p>
        </section>

        <section>
          <h2>Our Three Pillars</h2>
          <div className="pillars">
            <div className="pillar">
              <h3>Excellent Capital Allocators</h3>
            </div>
            <div className="pillar">
              <h3>Sustainable Strong MOATs</h3>
            </div>
            <div className="pillar">
              <h3>Portfolio Construction <br/>& Risk Management</h3>
            </div>
          </div>
        </section>

        <section>
          <h2>Portfolio Key Terms</h2>
          <table>
            <tbody>
              <tr>
                <td>Moat Companies (Stocks)</td>
                <td>80% (Core Portfolio)</td>
              </tr>
              <tr>
                <td>Stocks, ETFs, Liquid plans, and Commodities</td>
                <td>20% (Satellite Portfolio)</td>
              </tr>
              <tr>
                <td>Maximum Per Stock Allocation</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Maximum Per Sector Allocation</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Number of Stocks in Portfolio</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Minimum Ticket Size</td>
                <td>INR 50 Lacs</td>
              </tr>
              <tr>
                <td>Minimum for Top-Up</td>
                <td>INR 10 - 30 Lacs</td>
              </tr>
              <tr>
                <td>Fund Benchmark</td>
                <td>Nifty 500 Multicap- 50:25:25</td>
              </tr>
              <tr>
                <td>Exit Load</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Date of Allotment</td>
                <td>January 1, 2022</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="pillars">
          <div className="pillar">
            <h3>Performance</h3>
            <p>10 Yr (2012 - 2022): 20.75%</p>
          </div>
          <div className="pillar">
            <h3>Suitable Investor</h3>
            <p>Aggressive</p>
          </div>
          <div className="pillar">
            <h3>Investment Horizon</h3>
            <p>3 - 5 Years</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpperCrustWealthFund;
