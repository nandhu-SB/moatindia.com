import React from "react";

import "./Home.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

function HomePage() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Body />
      </div>
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default HomePage;
