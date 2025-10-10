import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-moat-india-2 copy.png";

const Dropdown = ({ title, id, items, activeMenu, setActiveMenu }) => {
  return (
    <div
      className="nav-item"
      onMouseEnter={() => setActiveMenu(title)}
      onMouseLeave={() => setActiveMenu(null)}
      id={id}
    >
      <button aria-expanded={activeMenu === title}>{title}</button>
      {activeMenu === title && (
        <div className="dropdown">
          {items.map(({ to, label, external }, index) =>
            external ? (
              <a
                key={index}
                href={to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : (
              <Link key={index} to={to}>
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const downloads = [
    {
      file: "DISCLOSURE_Sept_2025.pdf",
      name: "Disclosure Document",
    },

    {
      file: "Investor-Charter-Disclosure.pdf",
      name: "Investor Charter Report",
    },
    {
      file: "Complaints Data September 2025.pdf",

      name: "Investor Grievance Disclosure",
    },
    {
      file: "Emerging Moat Factsheet August 2025.pdf",
      name: "Emerging Moat Factsheet",
    },

    {
    
      file: "Moderate Compounders Factsheet August 2025.pdf",
      name: "Moderate Compounders Factsheet",
    },

    {
      file: "Special Opportunities Factsheet August 2025.pdf",

      name: "Special Opportunities Factsheet",
    },
    // {
    //   file: "UCWF-Factsheet_Dec24.pdf",
    //   name: "UpperCrust Wealth Fund Factsheet",
    // },
    {
      file: "Monthly and Yearly Performance - September 2025 Moat & Uppercrust.pdf",
      name: "Monthly and Yearly Performance Report",
    }
  ];

  return (
    <nav className="navbar" ref={dropdownRef}>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Moat Financial Services Logo" />
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {/* <Dropdown
          title="About Us"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          items={[
            { to: "/AboutUs#who-we-are", label: "Who we are" },
            { to: "/AboutUs#moat", label: "What is Moat" },
            { to: "/AboutUs#mission", label: "Mission" },
            { to: "/AboutUs#vision", label: "Vision" },
            // { to: "/AboutUs#achievements", label: "Achievements" },
            { to: "/AboutUs#credentials", label: "Credentials" },
          ]}
        /> */}
       <Link to="/AboutUs"> <button className="dropdown-button">About Us</button></Link>
        

        {/* <Dropdown
          title="Strategy"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          items={[
            { to: "/InvestmentPhilosophy", label: "Investment Philosophy" },
            { to: "/Schemes", label: "Our Schemes" },
          ]}
        /> */}
        <Link to="/Schemes"> <button className="dropdown-button">Strategy</button></Link>


        <Dropdown
          title="Services"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          items={[
            {
              to: "https://www.orbisonline.in/portal/Account/Login.aspx",
              label: "Client Login",
              external: true,
            },
            {
              to: "https://investment.1silverbullet.tech/login",
              label: "Client Onboarding",
              external: true,
            },

            {
              to: "https://scores.sebi.gov.in/",
              label: "Lodge Complaints with SEBI",
              external: true,
            },
            {
              to: "https://smartodr.in/login",
              label: "Online Grievance Redressal",
              external: true,
            },
            {
              to: "/DirectOnboarding",
              label: "Direct Onboarding",
              external: false,
            },
            {
              to: "https://www.orbisonline.in/portal/Account/FeeIllustration.aspx", // Corrected path
              label: "Fee Calculation Tool",
              external: true,
            },
            // {
            //   to: "https://moat-news-engine.streamlit.app/",
            //   label: "News",
            //   external: true,
            // },
          ]}
        />

        <Dropdown
          title="Downloads"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          items={downloads.map(({ file, name }) => ({
            to: `/files/${file}`,
            label: name,
            external: true,
          }))}
        />

        {/* <Dropdown
          id="contact-button"
          title="Contact Us"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          items={[
            { to: "/Information", label: "Our Information" },
            { to: "/ContactUs", label: "Mail us" },
          ]}
        /> */}
        
          <Link to="/Information"><button
          id="contact-button"
          // onClick={() => (window.location.href = "/Information")}
        >Contact Us</button></Link>
          
        
        
      </div>
    </nav>
  );
};

export default Navbar;
