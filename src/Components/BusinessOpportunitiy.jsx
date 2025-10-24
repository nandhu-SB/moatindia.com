import React from "react";
import "./BusinessOpportunitiy.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BusinessOpportunitiy = () => {
  return (<><Navbar/>
    <main className="container">
      <header>
        {/* <div className="logo">PMS</div> */}
        <div>
          <h1>Unlock a new horizon of wealth management and professional growth</h1>
          <p className="lead">
            Are you an established financial professional, an ambitious entrepreneur with deep HNI connections, or a seasoned expert looking to leverage your extensive network in the elite world of finance?
            </p>
            <p>This is your invitation to forge a powerful partnership with a leading Portfolio Management Services (PMS) company based in the vibrant economic landscape of Kerala, focused on delivering superior, research-backed investment strategies to High-Net-Worth Individuals (HNIs) across India and the diaspora. We are actively seeking to expand our footprint by collaborating with discerning, high-calibre partners who share our commitment to integrity, excellence, and client-centric wealth creation</p>
        </div>
      </header>

      <section className="hero card">
        <h2>Why partner with us?</h2>
        <p className="muted">
          We are seeking high-calibre distribution partners who value integrity, excellence and client-centric wealth creation. Whether you are an established distributor, a seasoned ex-banker, or a financially prudent NRI returnee — we have a tailored value proposition for you.
        </p>

        <div className="cta-row">
          <a className="btn" href="#contact">Express Interest</a>
          {/* <a className="btn secondary" href="brochure.pdf" download>
            Download Partnership Brochure
          </a> */}
        </div>
      </section>

      <section>
        <h2>Who We Are Looking For</h2>
        <p className="small">
          We are specifically looking to onboard a select group of distribution partners who possess a strong pedigree, financial acumen, and an established network of affluent clientele.
        </p>

        <div className="grid">
          <article className="card">
            <h3>1. Established All-India Financial Distributors / Firms</h3>
            <p className="muted">
              Profile: Reputable entities distributing a wide range of financial products across India (Mutual Funds, Insurance, Bonds, AIFs, etc.).
            </p>
            <ul className="list small">
              <li>Integrate high-performance PMS products into your portfolio</li>
              <li>Diversify revenue streams with attractive fee structures</li>
              <li>Leverage our research and compliance support</li>
            </ul>
          </article>

          <article className="card">
            <h3>2. Seasoned Ex-Bankers and Financial Veterans</h3>
            <p className="muted">
              Profile: Former high-ranking officials and relationship managers who have managed large HNI portfolios and now seek entrepreneurship.
            </p>
            <ul className="list small">
              <li>Transition to entrepreneurship with a ready-made product suite</li>
              <li>Institutional backing, tech platform and regulatory framework provided</li>
              <li>Focus on client acquisition and relationship management</li>
            </ul>
          </article>

          <article className="card">
            <h3>3. Financially Prudent Gulf Returnees and Ex-NRIs</h3>
            <p className="muted">
              Profile: Individuals returning from global financial hubs with significant networks and investment capital.
            </p>
            <ul className="list small">
              <li>Advise fellow returnees and NRIs using your global exposure</li>
              <li>Build a high-value business with tailored PMS solutions</li>
              <li>Tap into cross-border capital and sophisticated client needs</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2>The Power of Partnership</h2>
        <p className="muted">
          Collaborating with our Kerala-based PMS firm offers more than commission — it offers a partnership built on shared success and institutional excellence.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Proprietary Investment Philosophy</h3>
            <p className="small">
              Benefit from Alpha-seeking strategies crafted by experienced fund managers and research analysts for consistent performance potential.
            </p>
          </div>
          <div className="card">
            <h3>Competitive & Transparent Payouts</h3>
            <p className="small">
              Attractive, transparent revenue-sharing models rewarding the quality and tenure of assets you bring in.
            </p>
          </div>
          <div className="card">
            <h3>Comprehensive Support System</h3>
            <p className="small">
              Includes SEBI-compliant marketing collateral, training, and a cutting-edge tech platform for onboarding and reporting.
            </p>
          </div>
        </div>

        <div className="card">
          <h3>Focus on Compliance and Ethics</h3>
          <p className="small">
            Operate under a regulatory framework prioritising SEBI guidelines and ethical business practices to build long-term client trust.
          </p>
        </div>

        <div className="card">
          <h3>A Personalised Approach</h3>
          <p className="small">
            Our Kerala base allows personal, responsive engagement that sets us apart from large national players.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Take the Next Step</h2>
        <p className="muted">
          If you are driven by the ambition to deliver superior financial outcomes, we invite you to explore this exclusive opportunity. Join us in creating lasting wealth for the discerning investor.
        </p>

        <div className="card">
          <h3>Express Interest</h3>
          <p className="small">
            We look forward to a confidential discussion to understand how our growth trajectory can align with your professional aspirations.
          </p>
          <p className="small">
            To express interest, either click the button below or contact our Business Development Head directly.
          </p>
          <div className="cta-row">
            <a
              className="btn"
              href="/BusinessOpportunityContact"
            >
              Email Us
            </a>

          </div>
        </div>
        
      </section>


    </main>
    <Footer/>
    </>
  );
};

export default BusinessOpportunitiy;