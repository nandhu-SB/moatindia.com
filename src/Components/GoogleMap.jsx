import React from "react";
import "./GoogleMap.css"; // Import CSS file

const GoogleMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="google-map-container">
      <iframe
        title="Moat Financials Ltd"
        width="100%"
        // height="400"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=10.014970779418945,76.30181884765625`}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
