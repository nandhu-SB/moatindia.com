import React from "react";
import "./PrivacyPolicy.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy-content">
        <h4>Privacy Policy</h4>
        <div className="privacy-section">
          At Moat Financial Services Private Limited and its affiliates
          ("Moat"), we prioritize the confidentiality and security of your
          personal information. We are committed to safeguarding your privacy
          and ensuring that your data is used in accordance with the privacy
          principles outlined below while providing our services.
        </div>
        <div className="privacy-section">
          <h4>Introduction</h4>
          <p>
            In compliance with the General Data Protection Regulation (GDPR),
            applicable EU data protection laws, and the DIFC Data Protection
            Law, Moat, as the data controller, is responsible for informing you
            about how your personal data is processed.
          </p>
        </div>
        <div className="privacy-section">
          <h4>Purpose and Legal Basis for Processing Personal Data</h4>
          <p>
            We collect, use, and disclose your personal data to provide our
            services and maintain our relationship with you. We process personal
            data only when a lawful basis exists, including:
            <ol type="1">
              <li>Performance of Contract</li>
              <ul type="disc">
                <li>
                  Processing your signed Portfolio Management Services (PMS)
                  Agreement and required documentation for account opening.
                </li>
                <li>
                  Managing and administering your investment portfolio,
                  including processing redemptions, distributions, and future
                  subscriptions.
                </li>
                <li>
                  Disclosing information to auditors, regulatory authorities,
                  tax authorities, and technology providers as necessary.
                </li>
                <li>
                  Recording and storing telephone conversations for processing
                  instructions, account administration, dispute resolution,
                  record-keeping, security, and training purposes.
                </li>
                <li>
                  Sending periodic reports and responding to client inquiries.
                </li>
                <li>
                  Any other purpose as outlined in our agreement with you.
                </li>
              </ul>
              <li>Compliance with Legal Obligations</li>
              <p>
                {" "}
                We process personal data to comply with legal, tax, and
                regulatory obligations, including:{" "}
              </p>
              <ul type="disc">
                <li>
                  Anti-Money Laundering (AML) Regulations: Adhering to AML
                  requirements under the Prevention of Money Laundering Act
                  (PMLA), DFSA AML regulations, and other international AML
                  standards.
                </li>
                <li>
                  CRS/FATCA Compliance: Collecting investor tax information and
                  sharing it with relevant tax authorities as required by law.
                </li>
                <li>
                  Screening Requirements: Conducting AML and counter-terrorist
                  financing screenings, including Politically Exposed Person
                  (PEP) checks and compliance with UN, EU, and other applicable
                  sanctions regimes.
                </li>
              </ul>

              <li>Legitimate Interests</li>
              <ul type="disc">
                <li>Conducting statistical analysis and market research.</li>
                <li>
                  You have the right to object to processing based on legitimate
                  interests unless we demonstrate compelling reasons that
                  override your rights or for legal claims.
                </li>
              </ul>
              <li>Consent-Based Processing</li>
              <p>
                {" "}
                From time to time, we may send you financial market information
                via telephone, email, or other communication channels. You have
                the right to opt out of receiving such communications at any
                time.
              </p>
            </ol>
          </p>
        </div>
        <div className="privacy-section">
          <h4>Data Retention</h4>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required by law.
          </p>
        </div>
        <div className="privacy-section">
          <h4>Security Measures</h4>
          <p>
            We implement robust security measures to protect your data from
            loss, misuse, unauthorized access, disclosure, alteration, or
            destruction. Our security protocols ensure that personal and
            financial data is accessible only to authorized personnel.
            <br />
            <br />
            You have the following rights concerning your personal data:
            <ul>
              <li>
                <b>Right of Access:</b>Request access to your personal data
              </li>
              <li>
                <b>Right to Rectification:</b>Correct or update any incomplete
                or inaccurate personal data
              </li>
              <li>
                <b>Right to Erasure (Right to be Forgotten):</b>Request deletion
                of your personal data
              </li>
              <li>
                <b>Right to Restrict Processing:</b> Limit the processing of
                your personal data under certain conditions.
              </li>
              <li>
                <b>Right to Data Portability: </b>Request transfer of your data
                to another service provider.
              </li>
            </ul>
          </p>
        </div>
        <div className="privacy-section">
          <h4>Additional Information</h4>
          <ul type="disc">
            <li>We do not track your online activities across the Internet.</li>
            <li>
              We do not use your personal data for automated decision-making or
              profiling
            </li>
            <li>We do not sell or rent your personal data to third parties</li>
          </ul>
        </div>
        <div className="privacy-section">
          <h4>Refusal to provide Personal Data</h4>
          <p>
            Providing personal data as specified under “Purpose and Legal Basis
            for Processing” is necessary for us to accept and manage your
            portfolio. If you fail or refuse to provide required personal data,
            we may be unable to fulfill our contractual, tax, legal, and
            regulatory obligations, and as a result, may not be able to offer
            our services to you.
          </p>
        </div>
        <div className="privacy-section">
          <h4>Contact Us</h4>
          <p>
            For any queries regarding this Privacy Policy,please contact us at:
          </p>
          <ul type="disc">
            <li>
              <b>Tel:</b>+91-484-4039561
            </li>
            <li>
              <b>Email:</b>compliance@moatindia.com
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
