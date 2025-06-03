import React from "react";
import "./NewsLetter.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Newsletter = () => {
  const pdfFiles = [
    {
      file: "Special-Report-On-World-Economy.pdf",
      name: "Special Report on World Economy",
    },
    {
      file: "Monthly-Newsletter-for-December-2023.pdf",
      name: "December 2023 Newsletter",
    },
    {
      file: "Monthly-Newsletter-for-November-2023.pdf",
      name: "November 2023 Newsletter",
    },
    {
      file: "Monthly-Newsletter-for-October-2023.pdf",
      name: "October 2023 Newsletter",
    },
    {
      file: "Monthly-Newsletter-for-September-2023.pdf",
      name: "September 2023 Newsletter",
    },
    {
      file: "Monthly-Newsletter-For-July-2023.pdf",
      name: "July 2023 Newsletter",
    },
    {
      file: "Monthly-Newsletter-For-June-2023.pdf",
      name: "June 2023 Newsletter",
    },
    {
      file: "Monthly-Newsletter-For-may-2023.pdf",
      name: "May 2023 Newsletter",
    },
    {
      file: "Monthly-Newsletter-and-Budget-Highlights.pdf",
      name: "December 2022 Newsletter and Budget Highlights",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="newsletter-container">
        <h3>Newsletters</h3>
        <div className="newsletter-list">
          {pdfFiles.map(({ file, name }) => (
            <div
              key={file}
              className="newsletter-item"
              onClick={() => window.open(`/newsletter/${file}`, "_blank")}
            >
              <object
                data={`/newsletter/${file}`}
                type="application/pdf"
                // width="100%"
              >
                {/* <p>PDF preview not available. Click to open.</p> */}
              </object>
              <p className="newsletter-name">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Newsletter;
