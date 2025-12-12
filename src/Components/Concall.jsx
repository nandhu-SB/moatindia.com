import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./NewsLetter.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFPreview = ({ file }) => {
  return (
    <div style={{ width: 300 }}>
      <Document file={`/Concall/${file}`}>
        <Page pageNumber={1} width={300} />
      </Document>
    </div>
  );
};



const Concall = () => {
  const pdfFiles = [
    {
      file: "JIOFINANCIALSERVICESLTD-Q2FY26-ConcallNotes.pdf",
      name: "JIO FINANCIAL SERVICES LTD",
    },
    {
      file: "APOLLO HOSPITALS-Q2FY26-Concall Notes.pdf",
      name: "APOLLO HOSPITALS",
    },
    {
      file: "TARIL  - Q2FY26 -Concall Notes.pdf",
      name: "TARIL",
    },
        {
      file: "Linde India .pdf",
      name: "Linde India",
    },
            {
      file: "L & T TECHNOLOGY SERVICES - ANALYSIS.pdf",
      name: "L & T TECHNOLOGY SERVICES",
    },
                {
      file: "TATA ELXSI - ANALYSIS (4).pdf",
      name: "TATA ELXSI - ANALYSIS",
    },
                    {
      file: "Kaynes Technology India Ltd - Our View.pdf",
      name: "Kaynes Technology India Ltd - Our View",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="newsletter-container">
        <h3>Analysis Reports</h3>
        <div className="newsletter-list">
          {pdfFiles.map(({ file, name }) => (
            <div
              key={file}
              className="newsletter-item"
              onClick={() => window.open(`/Concall/${file}`, "_blank")}
            >
              <object
                className="pdf-preview"
                data={`/Concall/${file}#page=1`}
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
    </div>
  );
};

export default Concall;
