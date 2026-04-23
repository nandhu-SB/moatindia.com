import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-moat-india-2 copy.png";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../firebase/firebase";
import msuiteLogo from "../assets/msuite.png";
// "C:\Users\nandh\OneDrive - Moat Financial Services private Limited\moatindia.com\src\assets\msuite.png"

const Dropdown = ({ title, id, items, activeMenu, setActiveMenu, isMobile }) => {
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const onKeyDown = (e) => {
    const isOpen = activeMenu === title;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setActiveMenu(isOpen ? null : title);
        break;

      default:
        break;
    }
  };


  return (
    <div
      className="nav-item"
      id={id}
      onMouseEnter={() => !isMobile && setActiveMenu(title)}
      onMouseLeave={() => !isMobile && setActiveMenu(null)}
      onClick={() => {
        if (isMobile) {
          setActiveMenu(activeMenu === title ? null : title);
        }
      }}
    >
      <button
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={activeMenu === title}
        onKeyDown={onKeyDown}
      >
        {title}
      </button>

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
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveMenu(null)}
            >
              {label}
            </a>
          ) : (
            <Link
              key={index}
              to={to}
              onClick={() => setActiveMenu(null)}
            >
              {label}
            </Link>
          )
        )}
      </div>
    </div>
  );
};


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const dropdownRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 1200;
  const [downloads, setDownloads] = useState([]);

useEffect(() => {
  const fetchDownloads = async () => {
    const snapshot = await getDocs(collection(db, "files"))
    const files = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setDownloads(files)
  }

  fetchDownloads()
}, [])



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



  return (
    <nav className={`navbar ${menuOpen ? "mobile" : ""}`} ref={dropdownRef}>
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
                <a href="https://msuite.moatindia.com" target="_blank" rel="noopener noreferrer"><button className="dropdown-button msuite-button">Msuite</button></a>
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

        <Link to="/ReadingRoom">
          {" "}
          <button className="dropdown-button">Reading Room</button>
        </Link>

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
          isMobile={isMobile}
        />

<Dropdown
  title="Downloads"
  activeMenu={activeMenu}
  setActiveMenu={setActiveMenu}
items={downloads.map((item) => ({
  to: item.fileUrl,
  label: item.title,
  external: true,
}))}

  isMobile={isMobile}
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
