import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="sticky-footer">
      <div className="locations">
        <div className="location">
          <h4>Head Office</h4>
          <h5>Moat Financial Services Pvt Ltd</h5>
          <p>
            Room No: 3-I, 3rd Floor, National Pearl Star, Behind Changampuzha
            Park Metro Station, Edappally, Kochi, Kerala 682024. Phone: +91
            (0)484 4039561
          </p>
        </div>
        <div className="location">
          <h4>Distributor Office</h4>
          <h5>Upper Crust Wealth Pvt Ltd</h5>
          <p>
            316-320 Pancham Icon, Next to DMart, Vasna Road, Vadodara – 390007,
            Gujarat, India.
          </p>
        </div>
        <div className="location">
          <h4>Distributor Office</h4>
          <h5>GA Wealth Pvt Ltd</h5>
          <p>
            Kura Towers, 1-11-254 & 255, 9th Floor S.P. Road, Begumpet,
            Secunderabad Hyderabad, Telangana - 500016 M: +91- 98498 08004 |
            Email: karunakar.k@gacap.com Website: www.gacap.com{" "}
          </p>
        </div>
      </div>
      <div className="footer-links">
        <a href="/FAQ">FAQs</a>
        <a
          href="https://www.linkedin.com/company/moat-financial-services-pvt-ltd"
          target="_blank"
        >
          Social Media
        </a>
        <a href="/RiskFactors">Risks</a>
        <a href="/PrivacyPolicy">Privacy Policy</a>
        <a href="/NewsLetter">News Letter</a>

        <a href="/files/Disclosure-document-Dt-20.09.2024.pdf" target="_blank">
          Disclosures
        </a>
        <a href="/Information">Contact Us</a>
      </div>
      <p>
        &copy; SEBI REGD PMS INP000004482
        <br />
        Copyright © 2025, Moat - An Investment Lifestyle. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
