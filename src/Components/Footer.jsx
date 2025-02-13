import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="sticky-footer">
      <div className="footer-links">
        <a href="/FAQ" target="_blank">
          FAQs
        </a>
        <a
          href="https://www.linkedin.com/company/moat-financial-services-pvt-ltd"
          target="_blank"
        >
          Social Media
        </a>

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
