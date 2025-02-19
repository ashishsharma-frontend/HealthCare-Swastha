import React from "react";

function Footer() {
  const footerData = [
    {
      title: "Company",
      links: ["About Us", "Contact Us", "Careers"],
    },
    {
      title: "Services",
      links: ["Emergency", "Appointment", "Ambulance"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms"],
    },
  ];

  const contactInfo = [
    "+91 7513564359",
    "+91 7987339576",
    "Support@Swasthfuture.Com",
  ];

  return (
    <div
      style={{
        backgroundColor: "#8C92FD",
        marginTop: "2rem",
        paddingTop: "2px",
      }}
      className="footer-section"
    >
      <div
        style={{ width: "100%", padding: "10px", paddingTop: "3rem" }}
        className="footer-container"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
          className="footer-row"
        >
          {footerData.map((section, index) => (
            <div
              key={index}
              className="footer-col"
              style={{ maxWidth: "150px", width: "100%", gap: "1rem" }}
            >
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--Heading-Font)",
                  marginBottom: "1rem",
                }}
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li style={{ marginBottom: "0.50rem" }} key={idx}>
                    <a style={{ color: "#FBFBFB", fontSize: "1rem" }} href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="footer-coloum">
            <h4
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                fontFamily: "var(--Heading-Font)",
              }}
            >
              Newsletter
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.60rem",
              }}
              className="input-group"
            >
              {contactInfo.map((info, index) => (
                <p style={{ color: "#FBFBFB" }} key={index}>
                  {info}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <h2
          style={{
            fontSize: "clamp(2rem, 3vw, 3rem)",
            textAlign: "center",
            backgroundColor: "#fbfbfb",
            fontFamily: "var(--Heading-Font)",
            marginTop: "2rem",
            marginBottom: "-1.5rem",
          }}
        >
          Swastha Sky - HealthCare
        </h2>
      </div>

      <div className="footer-copyright">
        <p
          style={{
            textAlign: "center",
            color: "#3B3D40",
            backgroundColor: "#FBFBFB",
            padding: "1.2rem 0",
            fontSize: "1.1rem",
            marginTop: "2rem",
          }}
        >
          &copy; 2025 Healthcare. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
