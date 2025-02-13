import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./FAQ.css";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can open a PMS account?",
      answer:
        "Any Individual, HUF, Partnership Firm, Company, or any other body corporate and Foreign Portfolio Investors.",
    },
    {
      question: "What is the minimum investment amount?",
      answer:
        "As per SEBI guidelines, minimum amount to be invested is Rupees 50 lakhs. You can transfer your existing shares and/or funds with total amount to be minimum Rupees 50 lakhs.",
    },
    {
      question: "What will be the returns?",
      answer:
        "As per SEBI guidelines, we cannot guarantee returns but we aim to beat the benchmark comfortably and create wealth with superior CAGR.",
    },
    {
      question: "What will be the fees?",
      answer:
        "There will be a combination of fixed fees and performance fees on annual basis. It will be as per the agreement between you and the portfolio manager.",
    },
    {
      question: "What type of service will you provide?",
      answer:
        "We offer discretionary (DPMS) and non-discretionary portfolio management services (NDPMS)...",
    },
    {
      question: "How do I start?",
      answer:
        "Just fill up your details on the form on the homepage. We will get in touch with you, ask for basic details and proofs, and send you the pre-filled documents for you to go through and sign...",
    },
    {
      question: "Will a NRI/PIO be able to avail your PMS Service?",
      answer:
        "An NRI/PIO can avail the PMS service under the Portfolio Investment Scheme (PIS) on repatriation and/or non-repatriation basis (NRE and/or NRO account).",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="faq-body">
        <h2>Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div className="question" key={index}>
              <button
                className="faq-button"
                onClick={() => toggleAccordion(index)}
              >
                <b>{faq.question}</b>
                <span>{openIndex === index ? " −" : " +"}</span>
              </button>
              {openIndex === index && (
                <div className="answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
