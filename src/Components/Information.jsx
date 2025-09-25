import React from "react";
import { Link } from "react-router-dom";
import "./Information.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap";
import ContactUs from "./ContactUs";
const Information = () => {
  return (
    <>
      <Navbar />
      <div className="information">
        <div className="info-details">
          <section>
          <h3>Mail Us</h3>
          <ContactUs/>

          </section>
          
        </div>
        <div className="info-details">
          <section>
            <h3>Address</h3>
                       
            Room No: 3-I, 3rd Floor, National Pearl Star, <br />
            Behind Changampuzha Park Metro Station, <br />
            Edappally, Kochi - 682024, Kerala, India.<br/>
            pms@moatindia.com<br/>
            +91 9895590168<br/>
            <GoogleMap />
          </section>
          

          {/* <section>
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


          <section>
            <h3>Distributor Office:</h3>
            Bellwether Associates Pvt Ltd.
            <br />Second Floor,201 Address one by Baani<br />
            ,Golf Course Road,
            <br /> Gurugram,Haryana,122011 
          </section>
          <section>
            <h3>Phone:</h3>
            <p>+91 98955 90168</p>
            <h3>Email:</h3>
            <p>pms@moatindia.com</p>
          </section> */}
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Information;
