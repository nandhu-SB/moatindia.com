import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../assets/logo-moat-india-2 copy.png";

import { Link } from "react-router-dom";
import Ticker from "./Ticker";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setActiveMenu(null);
  };

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const downloads = [
    {
      file: "Disclosure-document-Dt-20.09.2024.pdf",
      name: "Disclosure Document",
    },
    {
      file: "Investor-Charter-Disclosure.pdf",
      name: "Investor Charter Report",
    },
    {
      file: "COMPLAINT-DECEMBER-2024.pdf",
      name: "Investor Grievance Disclosure",
    },
    { file: "Emerging-Moat-2.pdf", name: "Emerging Moat Factsheet" },
    {
      file: "Moderate-Compounders-Factsheet.pdf",
      name: "Moderate Compounders Factsheet",
    },
    {
      file: "Special-Opportunities-Factsheet.pdf",
      name: "Special Opportunities Factsheet",
    },
    {
      file: "UCWF-Factsheet_Dec24.pdf",
      name: "UpperCrust Wealth Fund Factsheet",
    },
    { file: "Yearly_Performance-Oct.pdf", name: "Performance Reports" },
  ];

  return (
    <>
      <nav className="navbar" ref={dropdownRef}>
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Moat Financial Services Logo" />
        </Link>
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <div className="nav-item">
            <button
              onClick={() => toggleDropdown("about")}
              aria-expanded={activeMenu === "about"}
            >
              About Us
            </button>
            {activeMenu === "about" && (
              <div className="dropdown">
                {[
                  { id: "who-we-are", label: "Who we are" },
                  { id: "moat", label: "What is Moat" },
                  { id: "mission", label: "Mission" },
                  { id: "vision", label: "Vision" },
                  { id: "achivements", label: "Achievements" },
                  { id: "team", label: "Team" },
                  { id: "credentials", label: "Credentials" },
                ].map(({ id, label }) => (
                  <Link
                    to={`/AboutUs#${id}`}
                    key={id}
                    onClick={handleLinkClick}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="nav-item">
            <button
              onClick={() => toggleDropdown("strategy")}
              aria-expanded={activeMenu === "strategy"}
            >
              Strategy
            </button>
            {activeMenu === "strategy" && (
              <div className="dropdown">
                <Link to="/InvestmentPhilosophy" onClick={handleLinkClick}>
                  Investment Philosophy
                </Link>
              </div>
            )}
          </div>

          <div className="nav-item">
            <button
              onClick={() => toggleDropdown("services")}
              aria-expanded={activeMenu === "services"}
            >
              Services
            </button>
            {activeMenu === "services" && (
              <div className="dropdown">
                <a
                  href="https://www.orbisonline.in/portal/Account/Login.aspx"
                  target="_blank"
                  onClick={handleLinkClick}
                >
                  Client Login
                </a>
                <a
                  href="https://investment.1silverbullet.tech/login"
                  target="_blank"
                  onClick={handleLinkClick}
                >
                  Client Onboarding
                </a>
                <a href="/Disclaimer" onClick={handleLinkClick}>
                  Dsiclaimer
                </a>
                <a
                  href="https://scores.sebi.gov.in/"
                  target="_blank"
                  onClick={handleLinkClick}
                >
                  Lodge Complaints with SEBi
                </a>
                <a
                  href="https://smartodr.in/login"
                  target="_blank"
                  onClick={handleLinkClick}
                >
                  Online Grievance Redressal
                </a>
                <a
                  href="https://www.moatindia.com/wp-content/uploads/2024/06/Direct-Onboarding.pdf"
                  target="_blank"
                  onClick={handleLinkClick}
                >
                  Direct Onboarding
                </a>
                <a href="./FeeCalculation" onClick={handleLinkClick}>
                  Fee Calculation Tool
                </a>
              </div>
            )}
          </div>

          <div className="nav-item">
            <button
              onClick={() => toggleDropdown("downloads")}
              aria-expanded={activeMenu === "downloads"}
            >
              Downloads
            </button>
            {activeMenu === "downloads" && (
              <div className="dropdown">
                {downloads.map(({ file, name }, index) => (
                  <a
                    key={index}
                    href={`/files/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="nav-item">
            <button
              onClick={() => toggleDropdown("Contact Us")}
              aria-expanded={activeMenu === "Contact Us"}
            >
              Contact Us
            </button>
            {activeMenu === "Contact Us" && (
              <div className="dropdown">
                <a href="/Information" onClick={handleLinkClick}>
                  Our Information
                </a>
                <a href="/ContactUs" onClick={handleLinkClick}>
                  Mail us
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Ticker />
    </>
  );
};

export default Navbar;
