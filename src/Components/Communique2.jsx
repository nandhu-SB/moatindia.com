import React from "react";
import image4 from "../assets/blog-celebrating-our-achievemens.jpg";
import image5 from "../assets/blog-rising-profits.jpg";
import image6 from "../assets/blog-crafting-wealth.jpg";
import progress from "../assets/yop-10-performers.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Communique.css";
import { useNavigate } from "react-router-dom";
const Communique2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="communique-container">
        <div className="communique-image-container">
          <img src={image5} />
        </div>

        <p>14 June 2024</p>
        <h3>
          Rising Profits on a Falling Rupee: IT and Pharma Sectors Set to Soar
        </h3>
        <h4>IT SECTOR</h4>
        <p>
          India’s technology industry revenue is estimated to be $245 Bn in FY
          2023. Technology exports at $194 Bn (80%) and domestic revenue is $51
          Bn (20%).
        </p>
        <h4>TOP COMPANIES UNDER IT</h4>
        <ul type="disc">
          <li>
            The total revenue of TCS is 2,25,458 Cr out of which 4.8% is from
            the domestic market and 94.8% from the international market.
          </li>
          <li>
            The total revenue of Infosys is 1,46,767 Cr out of which 2.6% is
            from the domestic market and 97.4% from the international market.
          </li>
          <li>
            The total revenue of HCL Technologies is 1,01,456Cr out of which
            3.9% is from the domestic market and 96.1% from the international
            market.
          </li>
          <li>
            The total revenue of Wipro is 90,488 Cr out of which 2% is from the
            domestic market and 98% from the international market.
          </li>
          <li>
            The total revenue of Tech Mahindra is 53,290 Cr out of which 2.5% is
            from the domestic market and 97.5% from the international market.
          </li>
        </ul>
        <h4>PHARMA SECTOR</h4>
        <p>
          The annual turnover is 41billion out of which 61.6% is exported
          (25.3bn) and the domestic share is 74.7%.
        </p>
        <h4>TOP COMPANIES UNDER PHARMA</h4>
        <ul type="disc">
          <li>
            The total revenue of Sun Pharma is 43,886 Cr out of which 32% is
            from the domestic market and 68% from the international market.
          </li>
          <li>
            The total revenue of Cipla is 22,753 Cr out of which 43.4% is from
            the domestic market and 56.6% from the international market.
          </li>
          <li>
            The total revenue of Dr. Reddy’s Laboratories 24,670 is Cr out of
            which 20% is from the domestic market and 80% from the international
            market.
          </li>
          <li>
            The total revenue of Divi’s Laboratories is 7,768 is Cr out of which
            12.5% is from the domestic market and 87.5% from the international
            market.
          </li>
          <li>
            The total revenue of Apollo Hospital is 37,495 Cr out of which 77.9%
            is from the domestic market and 22.1% from the international market.
          </li>
        </ul>
        <h4>
          Depreciation (-)/Appreciation (+) of Indian Rupee against US Dollar:
          (last 5 years)
        </h4>
        <p>2018-19: 4.2%</p>

        <p>2019-20: -8.46%</p>
        <p>2020-2: 3.32%</p>
        <p>2021-22: -3.53%</p>
        <p>FY 23 till July: -4.60%</p>
        <p>
          With the depreciation of the Rupee, exports become cheaper and more
          profitable for the domestic exporter. Therefore, companies relying
          majorly on exports (IT, pharma) will benefit from rupee depreciation.
          This may convert into a rise in their share prices in the stock
          market. Therefore, we remain bullish on the IT and Pharma sector.
        </p>
        <button className="readmore-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Communique2;
