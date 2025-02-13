import React, { useState } from "react";
import "./ContactUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS configuration
    const serviceID = "service_jmf0zze"; // Replace with your EmailJS service ID
    const templateID = "template_w0jgnhe"; // Replace with your EmailJS template ID
    const userID = "N_1U02x-s0mhNaME_"; // Replace with your EmailJS user ID (optional)

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert(`Thank you, ${formData.name}. We will get back to you soon!`);
        console.log("Email sent successfully:", response);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again later.");
      });
  };
  return (
    <>
      <Navbar />

      <div className="contact-container">
        <div className="contact-card">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Please fill out the form below.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
