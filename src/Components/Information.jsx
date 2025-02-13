import React from "react";
import { Link } from "react-router-dom";
import "./Information.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap";

const Information = () => {
  return (
    <>
      <Navbar />
      <div className="information">
        <div className="info-details">
          <section>
            <h3>Head Office:</h3>
            Room No: 3-I, 3rd Floor, National Pearl Star, <br />
            Behind Changampuzha Park Metro Station, <br />
            Edappally, Kochi - 682024, Kerala, India.
          </section>

          <section>
            <h3>Distributor Office:</h3>
            UpperCrust Wealth Pvt. Ltd.
            <br /> 316-320 Pancham Icon, <br />
            Next to DMart, Vasna Road, <br />
            Vadodara – 390007, Gujarat, India.
          </section>
          <section>
            <h3>Distributor Office:</h3>
            G. A. Wealth Pvt. Ltd.
            <br /> Kura Towers, 1-11-254 & 255, <br />
            9th Floor S.P. Road, Begumpet,
            <br /> Secunderabad Hyderabad, Telangana - 500016
          </section>
          <section>
            <h3>Phone:</h3>
            <p>+91 98955 90168</p>
            <h3>Email:</h3>
            <p>pms@moatindia.com</p>
          </section>
        </div>

        <div className="map-container">
          <h3>Head office</h3>
          <GoogleMap />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Information;
