import Navbar from "./Navbar";
import Footer from "./Footer";
import "./InvestmentPhilosophy.css";
import banner6 from "../assets/20250207_150108_0002.mp4";
import banner7 from "../assets/20250207_150247_0003.mp4";
import Whatsapp from "./Whatsapp";
import piggybank from "../assets/icons/savings_80dp_1E124A_FILL0_wght500_GRAD0_opsz48.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
const InvestmentPhilosohpy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 180, // Trigger offset
      // once: true
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="investment-philosophy">
        <div className="sections">
          <div className="background-video-container2">
            <video autoPlay loop muted className="background-video2">
              <source src={banner6} type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>
          <h2 className="section-title">Investment Philosophy</h2>
          <p className="section-text">
            Our investment approach keeps us fixated on our goal of picking
            premium quality businesses while safeguarding the client’s capital.
            We spot the undiscovered, hidden gems which can sustain a
            significantly higher Return on the capital employed (RoCE) compared
            to the Cost of capital (CoC) in the long run, freeing up the excess
            cash flow for the business. This phenomenon not only makes these
            businesses resilient but also sets them a class apart.
          </p>
          <blockquote className="highlight-text">
            In our view, these companies deem worthy of the title{" "}
            <span className="highlight-quote">
              <b>“premium quality business.”</b>
            </span>
          </blockquote>
          <p className="section-text">
            We remain fixated on our aim of long-term wealth generation for all
            our clients. For this, we are on the constant hunt for companies
            that reinvest at least a portion of their excess cash flow back into
            the business to grow while increasing the returns for their
            shareholders. We stay committed to our investment picks for the long
            haul which gives the business time to create value and also allows
            us to reap the benefits of long-term compounding.
          </p>
          <p className="section-text">
            Our investment approach solely looks for growth opportunities of
            businesses in their industries, irrespective of the size of the
            company or sector. We look for relatively smaller players in the
            industry which have the ability to become even bigger in the future.
            Our definition of small players also includes large-cap companies,
            the market leader, or even near-market leaders if they are more than
            capable of further expansion and penetration in their respective
            industries.
          </p>
        </div>

        {/* <div>
          <video autoPlay loop muted>
            <source src={banner7} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div> */}

        <div className="sections" data-aos="fade-right">
          <div className="pillars">
            <h2>The Pillars of our Investment Philosophy</h2>
            <div className="value-cards">
              {[
                {
                  title: "Value",
                  description:
                    "We focus on investments that provide long-term value for our clients by selecting high-quality, resilient businesses.",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "48px",
                  viewBox: "0 -960 960 960",
                  width: "48px",
                  fill: "#1E124A",
                  path: "M524.54-261.2h90.5l.48-3.23L458.74-432.5l1.28-3.72h3.05q51.08-1.43 88.15-30.48 37.06-29.04 44.78-79.04h40v-49.03h-40.73q-2.71-14.88-9.25-28.76t-14.82-25.88H636v-48.92H324v52.26h128.17q32.33 0 51.47 13.81 19.14 13.8 26.38 37.61H324v48.91h205.78q-5.48 24.57-25.26 39.63-19.78 15.07-54.87 15.07H367v58.78L524.54-261.2ZM480.03-74.02q-83.46 0-157.54-31.88-74.07-31.88-129.39-87.2-55.32-55.32-87.2-129.36-31.88-74.04-31.88-157.51 0-84.46 31.88-158.54 31.88-74.07 87.16-128.9 55.28-54.84 129.34-86.82 74.06-31.99 157.55-31.99 84.48 0 158.59 31.97 74.1 31.97 128.91 86.77 54.82 54.8 86.79 128.88 31.98 74.08 31.98 158.6 0 83.5-31.99 157.57-31.98 74.07-86.82 129.36-54.83 55.29-128.87 87.17-74.04 31.88-158.51 31.88Zm-.03-68.13q141.04 0 239.45-98.75 98.4-98.76 98.4-239.1 0-141.04-98.4-239.45-98.41-98.4-239.57-98.4-140.16 0-238.95 98.4-98.78 98.41-98.78 239.57 0 140.16 98.75 238.95 98.76 98.78 239.1 98.78ZM480-480Z",
                },
                {
                  title: "Discipline",
                  description:
                    "Maintaining a structured and systematic approach to investing to safeguard and grow client capital.",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "48px",
                  viewBox: "0 -960 960 960",
                  width: "48px",
                  fill: "#1E124A",
                  path: "M206.5-239.09v-339H272v339h-65.5Zm244.87 0v-339h65.26v339h-65.26ZM74.02-632.59v-63.04L480-926.5l406.22 230.87v63.04H74.02Zm149.07-68.37h513.82L480-848.17 223.09-700.96ZM74.02-116.46v-68.13h503.59q2 14.96 3.86 32.21 1.86 17.25 8.81 35.92H74.02ZM688-414.63v-163.46h65.5v130.59L688-414.63ZM800 2.63q-69.96-17.24-116.05-80.58-46.1-63.33-46.1-140.53v-103.19L800-402.63l162.15 80.96v103.19q0 77.2-46.1 140.53Q869.96-14.61 800 2.63Zm-21.24-122.39 143.67-143.67-28.23-28.24L778.76-176l-61.15-61.15-28 28 89.15 89.39Zm-555.67-581.2h513.82-513.82Z",
                },
                {
                  title: "Growth",
                  description:
                    "Identifying businesses with strong growth potential that can create wealth over the long term.",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "48px",
                  viewBox: "0 -960 960 960",
                  width: "48px",
                  fill: "#1E124A",
                  path: "m122.76-234.74-48.74-48.74 298.94-297.69 167 167 231.91-232.4H647.02v-68.36h239.2v239.19h-67.37v-121.09L538.96-316.7l-167-167-249.2 248.96Z",
                },
                {
                  title: "Opportunity",
                  description:
                    "Leveraging market trends to identify hidden gems and untapped growth opportunities.",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "48px",
                  viewBox: "0 -960 960 960",
                  width: "48px",
                  fill: "#1E124A",
                  path: "M639.76-513.3q18.54 0 31.3-12.7 12.77-12.7 12.77-31.37t-12.79-31.37q-12.79-12.69-31.37-12.69-18.58 0-31.4 12.69-12.81 12.7-12.81 31.37T608.29-526q12.83 12.7 31.47 12.7Zm-327.65-97.85h207.65v-65.74H312.11v65.74ZM170.43-114.02q-34.47-115.44-67.95-230.38Q69-459.34 69-580q0-94.39 65.77-160.3 65.77-65.92 160.23-65.92h205.96q29.78-38 72.11-59t90.76-21q27.31 0 46.64 19.22 19.33 19.21 19.33 46.52 0 6.48-1.5 12.72t-3.5 11.72q-3.76 10.28-7.02 21.02t-5.26 22.11l86.7 86.69H891v289.76l-115.39 37.24-67.24 225.2H478.09v-80h-77.37v80H170.43Zm51.28-68.13h112.07v-80h211v80h112.13l62.91-209.73 102.81-34.55v-171.42h-52l-128-128q1-24.76 6.38-48.26 5.38-23.5 11.62-47.5-37.76 10.24-71.16 29.81t-51.88 53.95H294.98q-65.63 0-111.74 46.11T137.13-580q0 102.69 28.76 200.63t55.82 197.22ZM480-502Z",
                },
              ].map((value) => (
                <div
                  className="value-card"
                  key={value.title}
                  data-aos="flip-left"
                >
                  <div className="value-card-content">
                    <h3 className="value-card-title">{value.title}</h3>
                    <p className="value-card-text">{value.description}</p>
                  </div>
                  <div className="value-card-icon">
                    <svg
                      xmlns={value.xmlns}
                      height={value.height}
                      viewBox={value.viewBox}
                      width={value.width}
                      fill={value.fill}
                    >
                      <path d={value.path} />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sections">
          <h2>Porter model</h2>
          <div className="quote">
            <p className="context">
              The essence of strategy is choosing what not to do
            </p>
            <p className="authot">~ Michael Porter.</p>
          </div>

          <p>
            The five forces of the porter model help you to build a framework of
            the level of competition in any industry. This model is specially
            used when you are looking to enter into a new industry or start up a
            new business. This model shows you the 5 forces of competition in an
            industry and how intense it is. these 5 forces are as follows:
          </p>
          <div className="value-cards">
            {[
              {
                title: "The threat of new entrants",
                description:
                  "can be determined by how many barriers are there in the industry. Barriers are like customer loyalty (Pidilite ~ Fevicol), High capital requirement (Real estate), Experience, Government policies(Pharma ~ Licences, Regulation)",
                xmlns: "http://www.w3.org/2000/svg",
                height: "48px",
                viewBox: "0 -960 960 960",
                width: "48px",
                fill: "#1E124A",
                path: "M524.54-261.2h90.5l.48-3.23L458.74-432.5l1.28-3.72h3.05q51.08-1.43 88.15-30.48 37.06-29.04 44.78-79.04h40v-49.03h-40.73q-2.71-14.88-9.25-28.76t-14.82-25.88H636v-48.92H324v52.26h128.17q32.33 0 51.47 13.81 19.14 13.8 26.38 37.61H324v48.91h205.78q-5.48 24.57-25.26 39.63-19.78 15.07-54.87 15.07H367v58.78L524.54-261.2ZM480.03-74.02q-83.46 0-157.54-31.88-74.07-31.88-129.39-87.2-55.32-55.32-87.2-129.36-31.88-74.04-31.88-157.51 0-84.46 31.88-158.54 31.88-74.07 87.16-128.9 55.28-54.84 129.34-86.82 74.06-31.99 157.55-31.99 84.48 0 158.59 31.97 74.1 31.97 128.91 86.77 54.82 54.8 86.79 128.88 31.98 74.08 31.98 158.6 0 83.5-31.99 157.57-31.98 74.07-86.82 129.36-54.83 55.29-128.87 87.17-74.04 31.88-158.51 31.88Zm-.03-68.13q141.04 0 239.45-98.75 98.4-98.76 98.4-239.1 0-141.04-98.4-239.45-98.41-98.4-239.57-98.4-140.16 0-238.95 98.4-98.78 98.41-98.78 239.57 0 140.16 98.75 238.95 98.76 98.78 239.1 98.78ZM480-480Z",
              },
              {
                title: "Bargaining power of buyers",
                description:
                  "this is the extent to which customers can put the company under pressure. If there are very low customers in the industry, they have the bargaining power or if there are a lot of alternatives then there is the bargaining power.",
                xmlns: "http://www.w3.org/2000/svg",
                height: "48px",
                viewBox: "0 -960 960 960",
                width: "48px",
                fill: "#1E124A",
                path: "M206.5-239.09v-339H272v339h-65.5Zm244.87 0v-339h65.26v339h-65.26ZM74.02-632.59v-63.04L480-926.5l406.22 230.87v63.04H74.02Zm149.07-68.37h513.82L480-848.17 223.09-700.96ZM74.02-116.46v-68.13h503.59q2 14.96 3.86 32.21 1.86 17.25 8.81 35.92H74.02ZM688-414.63v-163.46h65.5v130.59L688-414.63ZM800 2.63q-69.96-17.24-116.05-80.58-46.1-63.33-46.1-140.53v-103.19L800-402.63l162.15 80.96v103.19q0 77.2-46.1 140.53Q869.96-14.61 800 2.63Zm-21.24-122.39 143.67-143.67-28.23-28.24L778.76-176l-61.15-61.15-28 28 89.15 89.39Zm-555.67-581.2h513.82-513.82Z",
              },
              {
                title: "The threat of substitute products",
                description:
                  "existing product outside the realm of the common product boundaries increases the propensity of the customers to switch to alternatives. For example- You drink coffee for refreshment and your doctor gives you medical advice not to consume caffeine so you opt for a substitute like tea.",
                xmlns: "http://www.w3.org/2000/svg",
                height: "48px",
                viewBox: "0 -960 960 960",
                width: "48px",
                fill: "#1E124A",
                path: "m122.76-234.74-48.74-48.74 298.94-297.69 167 167 231.91-232.4H647.02v-68.36h239.2v239.19h-67.37v-121.09L538.96-316.7l-167-167-249.2 248.96Z",
              },
              {
                title: "Bargaining power of supplier",
                description:
                  "this is usually high when there are low suppliers in the industry or there are very few alternatives for the product in the industry. For example – in the pharma industry the Active Pharmaceutical Ingredient (API) is majorly produced by China and in this industry, the bargaining power of suppliers is higher as there are no alternatives and the suppliers are very low.",
                xmlns: "http://www.w3.org/2000/svg",
                height: "48px",
                viewBox: "0 -960 960 960",
                width: "48px",
                fill: "#1E124A",
                path: "M639.76-513.3q18.54 0 31.3-12.7 12.77-12.7 12.77-31.37t-12.79-31.37q-12.79-12.69-31.37-12.69-18.58 0-31.4 12.69-12.81 12.7-12.81 31.37T608.29-526q12.83 12.7 31.47 12.7Zm-327.65-97.85h207.65v-65.74H312.11v65.74ZM170.43-114.02q-34.47-115.44-67.95-230.38Q69-459.34 69-580q0-94.39 65.77-160.3 65.77-65.92 160.23-65.92h205.96q29.78-38 72.11-59t90.76-21q27.31 0 46.64 19.22 19.33 19.21 19.33 46.52 0 6.48-1.5 12.72t-3.5 11.72q-3.76 10.28-7.02 21.02t-5.26 22.11l86.7 86.69H891v289.76l-115.39 37.24-67.24 225.2H478.09v-80h-77.37v80H170.43Zm51.28-68.13h112.07v-80h211v80h112.13l62.91-209.73 102.81-34.55v-171.42h-52l-128-128q1-24.76 6.38-48.26 5.38-23.5 11.62-47.5-37.76 10.24-71.16 29.81t-51.88 53.95H294.98q-65.63 0-111.74 46.11T137.13-580q0 102.69 28.76 200.63t55.82 197.22ZM480-502Z",
              },
              {
                title: "Industry rivalry",
                description:
                  "this is the last checkpoint that shows how many competitors are there in the industry. More the competitors less the returns. If competition is very high you will lose the pricing power because of customer switching and your returns will be low.",
                xmlns: "http://www.w3.org/2000/svg",
                height: "48px",
                viewBox: "0 -960 960 960",
                width: "48px",
                fill: "#1E124A",
                path: "M639.76-513.3q18.54 0 31.3-12.7 12.77-12.7 12.77-31.37t-12.79-31.37q-12.79-12.69-31.37-12.69-18.58 0-31.4 12.69-12.81 12.7-12.81 31.37T608.29-526q12.83 12.7 31.47 12.7Zm-327.65-97.85h207.65v-65.74H312.11v65.74ZM170.43-114.02q-34.47-115.44-67.95-230.38Q69-459.34 69-580q0-94.39 65.77-160.3 65.77-65.92 160.23-65.92h205.96q29.78-38 72.11-59t90.76-21q27.31 0 46.64 19.22 19.33 19.21 19.33 46.52 0 6.48-1.5 12.72t-3.5 11.72q-3.76 10.28-7.02 21.02t-5.26 22.11l86.7 86.69H891v289.76l-115.39 37.24-67.24 225.2H478.09v-80h-77.37v80H170.43Zm51.28-68.13h112.07v-80h211v80h112.13l62.91-209.73 102.81-34.55v-171.42h-52l-128-128q1-24.76 6.38-48.26 5.38-23.5 11.62-47.5-37.76 10.24-71.16 29.81t-51.88 53.95H294.98q-65.63 0-111.74 46.11T137.13-580q0 102.69 28.76 200.63t55.82 197.22ZM480-502Z",
              },
            ].map((value) => (
              <div
                className="value-card"
                key={value.title}
                data-aos="flip-left"
              >
                <div className="value-card-content">
                  <h3 className="value-card-title">{value.title}</h3>
                  <p className="value-card-text">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            If the 5 forces in an industry are very high then the returns in
            that industry are very low and sustaining In that industry is very
            hard. But if it is very low then there are high returns in that
            industry and new players can make room for themselves in that
            industry.
          </p>
        </div>

        <div className="sections" data-aos="fade-right">
          <h2>Defining the Moats of a Company</h2>
          <div className="value-cards">
            <div className="value-card" data-aos="flip-left">
              <h3>Cost Advantage</h3>
              <p>
                Companies with significant cost advantages can undercut the
                prices of any competitor that attempts to move into their
                industry. Companies with sustainable cost advantages can
                maintain a very large market share as well. Gross and operating
                margins far better than peers. It can be coming from sourcing of
                RM, labour costs, manufacturing process, and technology
                advantage.
              </p>
            </div>

            <div className="value-card" data-aos="flip-left">
              {/* <img src="icons/intangibles.svg" alt="Intangibles Icon" className="moat-icon"> */}
              <h3>Intangibles</h3>
              <p>
                Another type of economic moat can be created through a firm’s
                intangible assets, which include items such as patents, brand
                recognition, government licenses, and others. Strong brand name
                recognition allows these types of companies to charge a premium
                for their products over other competitors’ goods, which boosts
                profits.
              </p>
            </div>

            <div className="value-card" data-aos="flip-left">
              <h3>Differentiation USP</h3>
              <p>
                A differentiation strategy involves developing unique goods or
                services that are significantly different from competitors.
                Companies that employ this strategy must consistently invest in
                R&D to maintain or improve the key product or service features.
                Unique selling point.
              </p>
            </div>
            <div className="value-card" data-aos="flip-left">
              <h3>Size Advantage</h3>
              <p>
                Being big can sometimes, in itself, create an economic moat for
                a company. This reduces overhead costs in areas such as inputs,
                financing, advertising, production, etc. This is economies of
                scale. No competition can produce such quantity of volumes.
              </p>
            </div>
            <div className="value-card" data-aos="flip-left">
              <h3>Backward and Forward Integration</h3>
              <p>
                This strategy can be also used to get a competitive advantage
                over the market competitors. When you apply this strategy, the
                company gets cost-efficient which rather improves its
                profitability.
              </p>
            </div>
            <div className="value-card" data-aos="flip-left">
              <h3>Network Effect</h3>
              <p>
                scale of sales and distribution creates a challenge for other
                competitors to reach any size near to company. Company is able
                to sell pan India or globally.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Whatsapp />
    </>
  );
};

export default InvestmentPhilosohpy;
