import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-moat-india-2 copy.png";

const Dropdown = ({ title, id, items, activeMenu, setActiveMenu }) => {
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Keyboard accessibility handling
  const onKeyDown = (e) => {
    const isOpen = activeMenu === title;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setActiveMenu(isOpen ? null : title);
        break;

      case "ArrowDown":
        if (!isOpen) {
          setActiveMenu(title);
        } else {
          const firstItem = menuRef.current?.querySelector("a, button");
          firstItem?.focus();
        }
        break;

      case "Escape":
        setActiveMenu(null);
        buttonRef.current?.focus();
        break;

      default:
        break;
    }
  };

  const onMenuKeyDown = (e, index) => {
    const menuItems = Array.from(menuRef.current.querySelectorAll("a, button"));

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        menuItems[(index + 1) % menuItems.length]?.focus();
        break;

      case "ArrowUp":
        e.preventDefault();
        menuItems[(index - 1 + menuItems.length) % menuItems.length]?.focus();
        break;

      case "Escape":
        setActiveMenu(null);
        buttonRef.current?.focus();
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="nav-item"
      onMouseEnter={() => setActiveMenu(title)}
      onMouseLeave={() => setActiveMenu(null)}
      id={id}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setActiveMenu(null);
        }
      }}
    >
      <button
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={activeMenu === title}
        onKeyDown={onKeyDown}
        onFocus={() => setActiveMenu(title)}
      >
        {title}
      </button>

      {
        <div
          className={`dropdown ${activeMenu === title ? "open" : ""}`}
          role="menu"
          ref={menuRef}
        >
          {items.map(({ to, label, external }, index) =>
            external ? (
              <a
                key={index}
                href={to}
                role="menuitem"
                tabIndex="0"
                target="_blank"
                rel="noopener noreferrer"
                onKeyDown={(e) => onMenuKeyDown(e, index)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={index}
                to={to}
                role="menuitem"
                tabIndex="0"
                onKeyDown={(e) => onMenuKeyDown(e, index)}
              >
                {label}
              </Link>
            )
          )}
        </div>
      }
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
      file: "Complaints Data October 2025.pdf",

      name: "Investor Grievance Disclosure",
    },
    {
      file: "Fact Sheet - Emerging Moat October 2025.pdf",
      name: "Emerging Moat Factsheet",
    },

    {
      file: "Fact Sheet - Moderate Compounders October 2025.pdf",
      name: "Moderate Compounders Factsheet",
    },

    {
      file: "Fact Sheet - Special Opportunties Fund October 2025.pdf",

      name: "Special Opportunities Factsheet",
    },
    // {
    //   file: "UCWF-Factsheet_Dec24.pdf",
    //   name: "UpperCrust Wealth Fund Factsheet",
    // },
    {
      file: "Monthly and Yearly Performance October 2025 Moat & Uppercrust.pdf",
      name: "Monthly and Yearly Performance Report",
    },
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
        <Link to="/AboutUs">
          {" "}
          <button className="dropdown-button">About Us</button>
        </Link>

        {/* <Dropdown
          title="Strategy"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          items={[
            { to: "/InvestmentPhilosophy", label: "Investment Philosophy" },
            { to: "/Schemes", label: "Our Schemes" },
          ]}
        /> */}
        <Link to="/Schemes">
          {" "}
          <button className="dropdown-button">Strategy</button>
        </Link>
        <Link to="/BusinessOpportunity">
          {" "}
          <button className="dropdown-button">Business Opportunity</button>
        </Link>

        <Dropdown
          title="Reading Room"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          items={[
            {
              to: "/NewsLetter",
              label: "Articles",
              external: false,
            },
            {
              to: "/Concall",
              label: "Concalls",
              external: false,
            },
          ]}
        />

        {/* <Link to="/NewsLetter">
          {" "}
          <button className="dropdown-button">Reading Room</button>
        </Link> */}

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

        <Link to="/Information">
          <button
            id="contact-button"
            // onClick={() => (window.location.href = "/Information")}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
