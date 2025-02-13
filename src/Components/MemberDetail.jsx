import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./MemberDetail.css";
const MemberDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state;

  return (
    <>
      <Navbar />
      <div className="member-detail-page">
        <div className="member-detail-image">
          <img src={member.image} alt={member.name} className="member-image" />
        </div>
        <div className="member-detail-content">
          <h1>{member.name}</h1>
          <h3>{member.title}</h3>
          <p>{member.info}</p>
          <button onClick={() => navigate(-1)} className="readmore-button">
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberDetail;
