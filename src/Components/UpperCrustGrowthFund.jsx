import React from "react";
import "./basic.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UpperCrustGrowthFund = () => {
  return (
    <div>
      <Navbar />{" "}
      <div className="moat-container">
        <h2 className="fund-title">UpperCrust Growth Fund</h2>
        <section className="fund-description">
          UpperCrust Growth Fund (UCGF) exclusively invests in a blend of Mutual
          Fund schemes & ETF portfolios. The investment objective of this Fund
          of Fund (FOF) scheme is to generate long-term capital appreciation by
          investing in open-ended diversified equity schemes which consist
          curated basket of 10-15 mutual funds & ETFs.
        </section>
        <section>
          <h2>Why UpperCrust Growth Fund?</h2>
          <div className="pillars">
            <div className="pillar">
              <h3>Active Management</h3>
              <p>
                To beat the benchmark and deliver decent double digits
                risk-adjusted returns through "Active Management"
              </p>
            </div>
            <div className="pillar">
              <h3>Cost Effective</h3>
              <p>
                The MF portfolio aims to provide an Alpha at reasonable cost
                while ETFs provide performance at low cost.
              </p>
            </div>
            <div className="pillar">
              <h3>Alpha Generation</h3>
              <p>
                A cherry picked portfolio with better scheme selection and
                rebalancing provides an average 4% Alpha to the portfolio.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Portfolio Key Terms</h2>
          <table>
            <tbody>
              <tr>
                <td>Equity oriented Mutual Funds (Direct Plans)</td>
                <td>75% (Core Portfolio)</td>
              </tr>
              <tr>
                <td>ETFs, Liquid plans, Commodities</td>
                <td>25% (Satellite Portfolio)</td>
              </tr>
              <tr>
                <td>Min to Max number of schemes</td>
                <td>8 to 15</td>
              </tr>
              <tr>
                <td>Maximum Exposure in Single AMC</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Maximum Exposure in Single Fund/Scheme</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Minimum Ticket Size</td>
                <td>INR 50 Lacs</td>
              </tr>
              <tr>
                <td>Minimum for Top-Up</td>
                <td>INR 1 Lac</td>
              </tr>
              <tr>
                <td>Fund Benchmark</td>
                <td>NIFTY 500 TRI</td>
              </tr>
              <tr>
                <td>Exit Load</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Date of Allotment</td>
                <td>January 31, 2022</td>
              </tr>
            </tbody>
          </table>
        </section>

        <h3>Key Highlights</h3>
        <ul className="squares">
          <li>Long-term capital growth</li>
          <li>Active management with a focus on cost-effectiveness</li>
          <li>Minimum ticket size: INR 50 lakhs</li>
          <li>Return: 16.75% over the last 10 years</li>
        </ul>

        <div className="pillars">
          <div className="pillar">
            <h3>Back Tested</h3>
            <p>Last 10 years return (2012-2022): 16.75%</p>
          </div>
          <div className="pillar">
            <h3>Suitable Investor</h3>
            <p>Moderate Plus</p>
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

export default UpperCrustGrowthFund;
