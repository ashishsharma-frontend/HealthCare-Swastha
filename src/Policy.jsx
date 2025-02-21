import React from "react";
import { motion } from "framer-motion";
import Reveal from "./FramerMMotion/Reveal";

const privacyPolicyData = [
  {
    title: "1. Information Collection",
    content:
      "We collect personal information such as name, contact details, medical history, and service preferences to provide seamless healthcare services. Your data is secured and used responsibly.",
  },
  {
    title: "2. Data Usage & Sharing",
    content:
      "Your information is used for booking services, verification, and service improvements. We do not sell user data but may share it with authorized healthcare providers, regulatory bodies, and insurers when necessary.",
  },
  {
    title: "3. Security Measures",
    content:
      "We implement strict security protocols, including encryption, multi-factor authentication, and restricted access, to protect user data from unauthorized breaches.",
  },
  {
    title: "4. User Rights & Consent",
    content:
      "Users have the right to access, update, or delete their personal data. Users may also withdraw consent for data processing. By using our platform, you acknowledge and consent to our privacy practices.",
  },
  {
    title: "5. Policy Updates",
    content:
      "We may update our privacy policies periodically to comply with legal regulations or improve security. Users will be notified of significant changes to ensure transparency.",
  },
  {
    title: "6. Contact & Support",
    content:
      "For any queries regarding our privacy policies or data concerns, users can contact our support team via email or phone.",
  },
];

const PrivacyPolicy = () => (
  <div style={{ marginTop: "90px" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        padding: "1rem",
        maxWidth: "750px",
        margin: "0 auto",
      }}
    >
      <Reveal>
        <h1
          style={{
            fontFamily: "var(--Heading-Font)",
            fontSize: "1.5rem",
          }}
        >
          Privacy Policy
        </h1>
      </Reveal>{" "}
      {privacyPolicyData.map((section, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
          key={index}
        >
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--Heading-Font)",
                fontSize: "1.3rem",
                color: "#8B93FE",
              }}
            >
              {section.title}
            </h2>
          </Reveal>{" "}
          <Reveal>
            <p>{section.content}</p>
          </Reveal>
        </div>
      ))}
    </div>
  </div>
);

export default PrivacyPolicy;
