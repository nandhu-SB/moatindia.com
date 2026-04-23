
import Navbar from './Navbar'
import Footer from './Footer'



import React, { useState } from "react";


import emailjs from "@emailjs/browser";



const BusinessOpportunityContact = () => {


    const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    number: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID2,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      
      .then(() => {
        alert(`Thank you, ${formData.from_name}. We will get back to you soon!`);
        setFormData({ from_name: "", reply_to: "", number: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again later.");
      })
      .finally(() => setIsSending(false));
  };



  return (
    <div><Navbar/>
    
    
    
    
    <div className="contact-container">
        <div className="contact-card">


          <form onSubmit={handleSubmit}>
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="reply_to">Email</label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="number">Phone</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter your phone number"
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

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      
      
      <Footer/></div>
  )
}

export default BusinessOpportunityContact
