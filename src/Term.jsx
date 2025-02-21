import React from "react";
import { motion } from "framer-motion";
import Reveal from "./FramerMMotion/Reveal";

const termsData = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Swastha Future Marketplace & HMS. By accessing and using our services, you agree to comply with these terms and conditions. Please read them carefully before proceeding.",
  },
  {
    title: "2. Services Provided",
    content:
      "We offer a healthcare marketplace connecting users with hospitals, doctors, and homecare services. HMS provides hospital management solutions, while the marketplace allows users to book medical services and healthcare products.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "Users must provide accurate and updated information, follow all legal and ethical guidelines, and use services responsibly. Misuse, fraudulent activities, or policy violations may lead to suspension or legal action.",
  },
  {
    title: "4. Payments & Refunds",
    content:
      "Payments must be completed as per service agreements. Refund policies vary depending on the service provider and applicable laws. Users should review the refund terms before transactions. Unauthorized transactions should be reported immediately.",
  },
  {
    title: "5. Liability & Disclaimers",
    content:
      "While we strive for accuracy and reliability, we do not guarantee uninterrupted services. Swastha Future is not liable for indirect damages, medical malpractice, or service unavailability caused by third-party providers.",
  },
  {
    title: "6. Dispute Resolution",
    content:
      "Any disputes arising from service usage shall be resolved through arbitration or legal proceedings as per the applicable laws of India.",
  },
];
const Term = () => (
  <div
    style={{
      marginTop: "90px",
    }}
  >
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
          Terms & Conditions
        </h1>
      </Reveal>{" "}
      {termsData.map((section, index) => (
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
          </Reveal>
          <Reveal>
            <p>{section.content}</p>
          </Reveal>{" "}
        </div>
      ))}
    </div>
  </div>
);

export default Term;
