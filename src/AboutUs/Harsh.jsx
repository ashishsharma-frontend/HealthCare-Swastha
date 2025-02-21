import React from "react";
import HarshImg from "../MainResources/AboutResources/Harsh.jpg";
import Reveal from "../FramerMMotion/Reveal";
import PopupCard from "../FramerMMotion/PopupCard";

function Harsh() {
  return (
    <div style={{ marginTop: "90px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "1rem",
          gap: "3rem",
          fontFamily: "var(--Team-text)",
        }}
        className="harsh-sharma"
      >
        <div
          style={{
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
          className="team-left"
        >
          <Reveal>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                fontFamily: "var(--Heading-Font)",
                color: "#8B92FD",
              }}
            >
              Harsh Sharma
            </h2>
          </Reveal>
          <Reveal>
            <h3 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
              Founder & CEO
            </h3>
          </Reveal>
          <Reveal>
            <p>
              Harsh Sharma, originally from Gwalior, Madhya Pradesh, pursued his
              B.Sc. in Mathematics and Nursing from Jiwaji University. With a
              deep passion for healthcare, he began his career at Jaya Rog
              Hospital, where he dedicated two years to nursing and patient
              care. Seeking broader opportunities, he moved to Delhi, where he
              gained five years of extensive experience in homecare nursing.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Through his hands-on experience, Harsh realized the challenges
              faced by patients, hospitals, and homecare nursing professionals.
              Motivated to bridge this gap, he founded Swastha Sky, an
              integrated healthcare ecosystem that connects hospitals, doctors,
              patients, and homecare professionals. His vision is to create a
              structured and sustainable system where homecare nurses, both male
              and female, can find stable job opportunities, while hospitals and
              healthcare providers can access skilled and
              certified nursing staff.
            </p>
          </Reveal>
        </div>

        <PopupCard>
          <div
            style={{
              maxWidth: "400px",
              height: "450px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "5px solid #fbfbfb",
              overflow: "hidden",
            }}
            className="team-img"
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={HarshImg}
              alt=""
            />
          </div>
        </PopupCard>
      </div>
    </div>
  );
}

export default Harsh;
