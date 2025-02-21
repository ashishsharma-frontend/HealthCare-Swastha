import React, { useState } from "react";
import { motion } from "framer-motion";
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";
import TeamMember from "../AboutUs/TeamMember";
import WhyChooseUs from "../AboutUs/WhyChooseUs";
import AboutMeSvg from "../MainResources/ExtraResources/AboutMe.svg";
import AboutVideo from "../MainResources/AboutResources/AboutVideo.mp4";
import emailjs from "emailjs-com"; // Import EmailJS

const About = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  emailjs.init("NDdu-5ZipopFHS7A_");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() !== "" && name.trim() !== "") {
      // Prepare the data to be sent
      const templateParams = {
        to_name: "SwasthaSky Team",
        from_name: name,
        message: feedback,
      };

      console.log("Sending data to EmailJS:", templateParams);

      // Send the email using EmailJS
      emailjs
        .send("swastha_sky_support", "template_xxwdakm", templateParams)
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setSubmitted(true);
          },
          (error) => {
            console.error("Error sending email:", error.text);
          }
        );
    } else {
      console.log("Name or Feedback is missing");
    }
  };

  return (
    <div
      style={{ marginTop: "87px", backgroundColor: "#F9F9F9" }}
      className="who-we-are"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        className="main-text"
      >
        <PopupCard>
          <img
            style={{ maxWidth: "110px", marginTop: "3rem", marginBottom : '2rem' }}
            src={AboutMeSvg}
            alt=""
          />
        </PopupCard>
      </div>
      <div
        style={{ margin: "0 auto", padding: "1rem" }}
        className="about-section"
      >
        <div
          style={{
            maxWidth: "750px",
          }}
          className="about-top"
        >
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--Heading-Font)",
                fontSize: "clamp(1.6rem, 5vw, 2rem)",
                marginBottom: "1.3rem",
              }}
            >
              Transforming Healthcare, One Step at a Time
            </h2>
          </Reveal>
          <Reveal>
            <p>
              At Swastha Sky, we believe quality healthcare should be accessible
              to everyone. By combining technology with expert medical care, we
              provide seamless doctor consultations, hospital services, and
              homecare solutions—anytime, anywhere. Our mission is simple: to
              make healthcare efficient, affordable, and patient-centric across
              India.
            </p>
          </Reveal>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "2.5rem",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
          className="about-bottom"
        >
          <div className="about-left">
            <span
              style={{
                fontFamily: "var(--Heading-Font)",
                fontSize: "1.3rem",
                padding: "10px",
                backgroundColor: "#B7FDA5",
                color: "#FBFBFB",
              }}
            >
              SwasthaSky - HealthCare
            </span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {" "}
              <div
                style={{
                  maxWidth: "522px",
                  maxHeight: "305px",
                  overflow: "hidden",
                  padding: "10px",
                  backgroundColor: "#fbfbfb",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "2px solid #8B93FE",
                }}
                className="about-video"
              >
                <PopupCard>
                  <video
                    src={AboutVideo}
                    autoPlay
                    loop
                    muted
                    className="responsive-video"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      transition: "transform 0.3s ease",
                    }}
                  ></video>
                </PopupCard>
              </div>
            </motion.div>
          </div>

          <div
            style={{
              height: "380px",
              backgroundColor: "#fbfbfb",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              alignItems: "center",
              borderRadius: "5px",
            }}
            className="about-right"
          >
            <PopupCard>
              <div className="form-text">
                <h2
                  style={{
                    fontFamily: "var(--Heading-Font)",
                    fontSize: "1.5rem",
                    color: "#8B93FE",
                    marginTop: "0.5rem",
                  }}
                >
                  Your Feedback Matters!
                </h2>
                <p>Anything that can be improved?</p>
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                      marginTop: "2rem",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      style={{
                        width: "100%",
                        border: "1px solid #4b4d40",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                      style={{
                        width: "100%",
                        border: "1px solid #4b4d40",
                        padding: "10px",
                        borderRadius: "5px",
                        marginBottom: "-1rem",
                      }}
                      placeholder="Your feedback (Optional)"
                      rows="4"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#8B93FE",
                        color: "#FBFBFB",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Submit Feedback
                    </button>
                  </form>
                ) : (
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "4rem",
                      border: "1px solid #4B4D40",
                      padding: "10px",
                    }}
                  >
                    ✅ Thank you for your feedback, {name}!
                  </p>
                )}
              </div>
            </PopupCard>
          </div>
        </div>
      </div>

      <div className="Team-Member">
        <TeamMember />
      </div>

      <div className="Why-Choose-Us">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default About;
