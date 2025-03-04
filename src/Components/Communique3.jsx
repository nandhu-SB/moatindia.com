import React from "react";
import image5 from "../assets/blog-crafting-wealth.jpg";
import progress from "../assets/yop-10-performers.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Communique.css";
import { useNavigate } from "react-router-dom";
const Communique3 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="communique-container">
        <div className="communique-image-container">
          <img src={image5} />
        </div>

        <p>13 August 2023</p>
        <h3>
          Crafting Wealth, Capturing the Remarkable: Your Portfolio, Our
          Passion!
        </h3>
        <p>
          Embrace the journey from the fear of missing out to the pinnacle of
          Financial Freedom by taking decisive action today with Moat Financial
          Services Private Ltd. Our diligently made investment fund presents a
          thriving opportunity to assure your financial future. As markets
          evolve and opportunities arise, delaying your investment can lose out
          on the potential gains that pave the way for lifelong prosperity. We
          are always ahead of the market, and here, we give an instance of the
          stock of Jupiter Wagons Ltd. Based on our anticipation, we bought the
          stocks on 7th October 2022 and are still holding to get better returns
          on these stocks. The following section highlights the significant
          decisions the JWL took in this time frame to give us an exceptional
          return of 185%.
        </p>
        <ul start="disc">
          <li>
            18th October 2022: acquisition of Stone India Ltd adds a new
            strategic element and helps in both backward and forward
            integration.
          </li>
          <li>
            12th January 2023: JWL launches two e-LCV to the market and plans to
            undertake end-to-end production in India and establish service
            facilities in key markets, in order to expand into the aftersales
            requirements for a seamless customer experience.
          </li>
          <li>
            14th February 2023: JWL launches the Q3FY23, where the revenues are
            higher by 116% at Rs. 64443 lacks, and PAT increased by 407% to Rs.
            4638 lakhs.
          </li>
          <li>
            15th May 2023: JWL successfully raised Rs. 125 crores via Qualified
            Institutional Placement, which will be used for the company’s growth
            and to enhance its manufacturing facilities.
          </li>
        </ul>
        <p>
          Our right action at the right time has increased the returns of our
          portfolio. Why overthink? invest in Moat Financial Services Ltd and
          stay ahead in the market.
        </p>
        <button className="readmore-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Communique3;
