import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./basic.css";
const ModerateCompounders = () => {
  return (
    <div>
      <Navbar />
      <div className="moat-container">
        <h1>Moderate Compounders</h1>

        <section>
          <h2>Investment Objective</h2>
          <p>
            To generate sustainable returns over the medium to long term by
            making investments which primarily comprise of equity
            securities.Under Moderate Compounders, clients' investable funds
            would primarilybe invested in equity shares and equity-linked
            instruments issued by companies which are listed in India. Some part
            of clients' investable funds might be invested in units of money
            market and liquid funds and some part might be retained as bank
            balance in a bank account.
          </p>
        </section>

        <section>
          <h2>What Are Moderate Compounders?</h2>
          <p>
            Moderate compounders, within the realm of investing, represent
            companies that exhibit a track record of steady and consistent
            growth over time. These firms are characterized by their ability to
            incrementally increase their revenue, earnings, and stock prices,
            often without the sharp spikes or dramatic fluctuations associated
            with high-growth companies. They typically operate within mature
            industries that are not subject to rapid technological disruptions
            and cater to sectors like consumer staples, utilities, healthcare,
            and established technology fields.
          </p>
          <p>
            One distinguishing feature of moderate compounders is their
            resilience during economic downturns and market volatility. These
            companies often provide products or services that are considered
            essential, ensuring a stable customer base even in challenging
            economic conditions. Many moderate compounders are also known for
            their commitment to paying dividends to shareholders, making them
            particularly attractive to income-focused investors.
          </p>
          <p>
            Moderate compounders tend to have lower price volatility compared to
            their high-growth counterparts. This lower risk profile can be
            appealing to investors looking for more stability and predictability
            in their portfolios. Moreover, their valuations are often based on
            traditional metrics like price-to-earnings (P/E) ratios or dividend
            yield, rather than speculative expectations of future growth.
          </p>
        </section>

        <section>
          <h2>Our Strategy</h2>
          <div className="pillars">
            <div className="pillar">
              <p>
                It's an equity investment strategy of investing 60% of the
                portfolio in large sector leaders and the remaining 40% in
                emerging companies in which the sectors would benefit in the
                journey to $5 trillion economy.
              </p>
            </div>
            <div className="pillar">
              <p>
                These may be new sectors that take off with rising disposable
                income, changing habits, etc. Moderate compounders are managed
                by a team with a proven track record of success. This means that
                the management team has a history of making sound business
                decisions and growing the company's profits.
              </p>
            </div>
          </div>
        </section>

        <div className="pillars">
          <div className="pillar">
            <h2>Market Focus</h2>
            <p>
              Investing requires precise timing and selection. Buying a stock
              too early and waiting for it to turn around can be as detrimental
              as purchasing a trending stock at its peak. Our approach
              emphasizes choosing the best opportunities from the good ones,
              ensuring informed and strategic investment decisions.
            </p>
          </div>
        </div>

        <section>
          <h2>Risk Profile</h2>
          <p>
            Investors in the Moderate Compounders Fund should be aware of
            potential risks, including:
          </p>
          <ul className="squares">
            <li>Economic slowdowns</li>
            <li>Stock volatility and illiquidity</li>
            <li>Poor corporate performance</li>
            <li>Changes in economic policies or government regulations</li>
            <li>
              Unforeseen events such as natural disasters, wars, or civil
              disturbances
            </li>
          </ul>
        </section>

        <section>
          <h2>Diversification Strategy</h2>
          <p>To mitigate risks, our diversification approach includes:</p>
          <ul className="squares">
            <li>
              Allocating at least 50% to equity and equity-linked instruments
            </li>
            <li>
              Investing up to 50% in money market funds, liquid funds, or
              maintaining bank balances
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ModerateCompounders;
