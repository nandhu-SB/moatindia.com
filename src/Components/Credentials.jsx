import React from "react";
import "./Credentials.css";

const Credentials = () => {
  const credentialsData = [
    {
      label: "Name of the Portfolio Manager",
      value: "Moat Financial Services Private Limited",
    },
    { label: "SEBI Registration Number", value: "INP000004482" },
    { label: "Date of Registration", value: "05/09/2013" },
    {
      label: "Registered Address of the Portfolio Manager",
      value:
        "Room No: 3-I, 3rd Floor, National Pearl Star, Behind Changampuzha Park Metro Station, Edapally, Kochi, Kerala 682024",
    },
    { label: "Name of Principal Officer", value: "M Sudheesh" },
    { label: "Name of Compliance Officer", value: "Fazal Muhammed" },
  ];

  return (
    <div className="credentials-container" id="credentials">
      <h2 className="credentials-title">CREDENTIALS</h2>
      <div className="credentials-table">
        {credentialsData.map((item, index) => (
          <div key={index} className="credentials-row">
            <div className="credentials-label">{item.label}</div>
            <div className="credentials-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credentials;
