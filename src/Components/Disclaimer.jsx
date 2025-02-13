import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Disclaimer.css";
import Whatsapp from "./Whatsapp";
const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <div className="disclaimer-body">
        <h1>Disclaimer</h1>
        <p>
          We do not guarantee the capital that you invest with us. The value of
          your investment may fall as well as rise and you may not get back
          original amount invested. Past performance is only an indication, not
          necessarily repeated in the future. Equity investments are subjected
          to market risks and request everyone to kindly read the PMS disclosure
          document carefully before investing.
        </p>
        <p>
          All opinions contained herein constitute our personal views. Many
          forward looking statements have been included in this section. We
          shall not be in any way responsible for any loss or damage that may
          arise to any person from any inadvertent error in the information
          contained in the contents of website.
        </p>
        <p>
          Information’s provided in this website is solely for informational
          purposes only and should not be construed as a solicitation or offer
          to buy or sell any securities or related financial instruments. We,
          the company MOAT financial Services Pvt Ltd may have
          interests/positions, financial or otherwise in the securities
          mentioned in this website contents. Equity investing or Stock market
          Investing may result in losses as well as profits. Equity investing or
          Stock Investing is not suitable for many members of the public and
          only risk capital should be applied. Moat Financial Services does not
          take into account special investment goals, the financial situation or
          specific requirements of individual users. One should carefully
          consider their own financial situation and consult a financial advisor
          as to the suitability to their own situation prior to making any
          investment or entering into any transactions. If you may require
          personal advice, then one should seek a registered or certified
          investment advisor or professional.
        </p>
      </div>
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Disclaimer;
