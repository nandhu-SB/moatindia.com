import React from "react";
import "./NewsLetter.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Newsletter = () => {
  const pdfFiles = [
        {
      file: "Article about MOAT.pdf",
      name: "Unpacking the mystery of Moat",
    },


    
    {
      file: "Emerging Moat - Factor Based Portfolio.pdf",



      
      name: "Insights into Emerging Moat - Factor Based Portfolio",
    },
        {
      file: "Moderate Compounders.pdf",
      name: "Insights into Moderate Compounders",
    },
                    {
      file: "HBL Engineering-1.pdf",
      name: "HBL Engineering - Research",
 
    },
            {
      file: "HEALTHCARE SECTOR .pdf",
      name: "Healthcare Sector - An Overview",
 
    },
                {
      file: "Nilkamal Ltd.pdf",
      name: "Nilkamal Ltd - Research",
 
    },

  ];

  return (
    <>
      <Navbar />
      <div className="newsletter-container">
        <h3>Reading Room</h3>
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
