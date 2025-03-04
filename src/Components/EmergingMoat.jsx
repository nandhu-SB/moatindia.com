import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./basic.css";
const EmergingMoat = () => {
  return (
    <div>
      <Navbar />
      <div className="moat-container">
        <h1>Emerging Moat</h1>
        <section id="mission">
          <h2>Our Mission</h2>
          <p>
            We aim to create 500 Rupee Billionaires in 20 years or less by
            investing in emerging moat businesses, compounding wealth
            consistently by more than 25% CAGR.
          </p>
        </section>
        <section>
          <div className="table-container">
            <h2>EMERGING MOAT</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Struggling small caps/ start ups</th>
                  <th>Proven mettle companies small and mid Young companies</th>
                  <th>Mature companies</th>
                  <th>Waiting for disruption</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="category">Revenue</td>
                  <td>Fluctuating</td>
                  <td>Steadily and rapidly growing</td>
                  <td>Stable – small or no growth</td>
                  <td>Stable or declining</td>
                </tr>
                <tr>
                  <td className="category">Operations history</td>
                  <td>No or bad</td>
                  <td>Consistent for at least 2–3 years</td>
                  <td>Long</td>
                  <td>Very long</td>
                </tr>
                <tr>
                  <td className="category">Source of growth</td>
                  <td>Entirely future hope</td>
                  <td>Catalyst in place and very next few quarters growth</td>
                  <td>Been growing for long and slowly growing</td>
                  <td>No growth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>
            Five characteristics to look for while chosing potenial business to
            invest in
          </h2>
          <ul className="squares">
            <li>A strong leadership team</li>
            <li>An industry poised for growth</li>
            <li>Commanding market share</li>
            <li>Strong sales growth</li>
            <li>A Large target market</li>
          </ul>
        </section>

        <section>
          <h2>Qualitative Framework</h2>
          <p>We evaluate potential investments based on:</p>
          <ul className="squares">
            <li>Management integrity and shareholding patterns</li>
            <li>
              Consistency in revenue, EBITDA, profit growth, ROE, ROCE, and
              margins
            </li>
            <li>Business scalability and market share</li>
            <li>Corporate governance standards</li>
            <li>Interest from major investors (FII, DII)</li>
            <li>
              Attractive valuations with potential for significant returns
            </li>
          </ul>
        </section>

        <section>
          <h2>Stock Selection Framework</h2>
          <p>
            Our goal is to create substantial wealth for our clients with
            consistent high CAGR over the next 2-3 years using our proprietary
            5GCPM framework, focusing on:
          </p>
          <ul className="squares">
            <li>
              Growth Factors: Sales, Profits, Volumes, Margins, Market Share
            </li>
            <li>
              Corporate Governance: Tax compliance, dividends, promoter
              holdings, related party transactions, management reputation, free
              cash flows
            </li>
            <li>
              Practicability: Feasibility analysis considering assets, cash
              flow, team capability, market demand, and potential hurdles
            </li>
            <li>
              Magic Formula: A composite signal derived from seven parameters
              guiding entry and exit strategies
            </li>
          </ul>
        </section>

        <section>
          <h2>Stock Criteria</h2>
          <ul className="squares">
            <li>
              Portfolio of 12-14 stocks with higher allocation to
              high-conviction picks
            </li>
            <li>
              Focus on mid-cap stocks with market capitalization between ₹2,000
              crore to ₹70,000 crore
            </li>
            <li>Selective inclusion of high-quality small-cap stocks</li>
            <li>
              Companies with ongoing or about to do for next several quarters
              10% plus sales growth & 25% plus profit growth.
            </li>
            <li>
              Return on equity/Capital of 18% plus ,Companies with higher
              Operating cash flows to Profit ratios, Lower cash conversion
              cycles , Less requirement of working capital.
            </li>
            <li>
              X factor: The business growth catalyst factor that makes company
              to shift its trajectory path upwards in terms of its sales,
              profits , margins, size and market capitalization. This factor
              makes a regular good company or decent size company to become
              significant bigger company.
            </li>
            <li>
              Only when your midcap becomes large cap, large returns are
              possible.
            </li>
            <li>
              Preference for companies likely to enter Nifty or Nifty Next 50
              indices in the future
            </li>
          </ul>
        </section>

        <section>
          <h2>Allocation Strategy</h2>
          <ul className="squares">
            <li>Sector allocation limit: 15%</li>
            <li>Stock allocation limit: 12%</li>
            <li>Avoid stocks trading below their 200-day moving average</li>
          </ul>
        </section>

        <section>
          <h2>The Larger Universe</h2>
          <ul className="squares">
            <li>Food companies</li>
            <li>Specialty chemicals</li>
            <li>Niche pharmaceuticals with competitive advantages</li>
            <li>Proprietary software technology firms</li>
            <li>High-growth consumer brands</li>
            <li>Profitable platform companies</li>
            <li>Auto ancillary businesses</li>
          </ul>
        </section>

        <section>
          <h2>Most important decision is when to exit : MAGIC formula</h2>
          <p>We consider exiting an investment based on:</p>
          <ul className="squares">
            <li>Deviations in management behavior</li>
            <li>Lack of future growth drivers</li>
            <li>Adverse changes in industry dynamics</li>
            <li>
              Signs of company decline (e.g., loss of market share, negative
              public perception, increased competition)
            </li>
            <li>Partial profit booking when appropriate</li>
            <li>Availability of better investment opportunities</li>
            <li>Regular performance reviews every two quarters</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EmergingMoat;
