import React, { useState } from "react";
import { PiAddressBookTabsLight } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import ContactImg from "../MainResources/ExtraResources/Contact.png";
import Reveal from "../FramerMMotion/Reveal";
import PopupCard from "../FramerMMotion/PopupCard";

const contactDetails = [
  {
    icon: <PiAddressBookTabsLight fontSize={"1.5rem"} />,
    text: "Gwalior, Madhya Pradesh, India",
  },
  {
    icon: <SiMinutemailer fontSize={"1.5rem"} />,
    text: "Support@Swasthfuture.Com",
  },
  {
    icon: <MdOutlineConnectWithoutContact fontSize={"1.5rem"} />,
    text: "+91 7987339576",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all details.");
      return;
    }
    setError("");
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      style={{
        marginTop: "120px",
        padding: "1.1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
      className="contact-container"
    >
      <div
        className="contact-content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "1200px",
          width: "100%",
          gap: "2rem",
        }}
      >
        {/* Left Side */}
        <div className="left-contact" style={{ flex: 1 }}>
          <PopupCard>
            <img
              style={{ maxWidth: "250px", marginBottom: "2rem" }}
              src={ContactImg}
              alt="Contact"
            />
          </PopupCard>
          <Reveal>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                fontFamily: "var(--Heading-Font)",
              }}
            >
              Let's get in touch
            </h2>
          </Reveal>
          <Reveal>
            <p style={{ maxWidth: "600px", marginBottom: "2rem" }}>
              We are here to assist you. Whether you have a business inquiry,
              feedback, or need support, feel free to contact us. Our team will
              respond as soon as possible.
            </p>
          </Reveal>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            className="contact-information"
          >
            {contactDetails.map((item, index) => (
              <Reveal>
                <p
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>{" "}
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div
          className="right-contact"
          style={{
            flex: 1,
            background: "#f9f9f9",
            padding: "1.5rem",
            borderRadius: "8px",
          }}
        >
          <Reveal>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              Contact Us
            </h3>
          </Reveal>{" "}
          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "500px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                minHeight: "100px",
              }}
            />

            <PopupCard>
              <button
                type="submit"
                style={{
                  padding: "0.8rem",
                  background: "#8B93FE",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width : '100%'
                }}
              >
                {submitted ? "Submitted Successfully" : "Submit"}
              </button>
            </PopupCard>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
