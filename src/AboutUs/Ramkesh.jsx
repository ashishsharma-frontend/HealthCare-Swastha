import React from "react";
import RamkeshImg from "../MainResources/AboutResources/Ramkesh.jpg";
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";

function Ramkesh() {
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
        className="ramkesh-vyas"
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
              Ramkesh Vyas
            </h2>
          </Reveal>
          <Reveal>
            <h3 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
              Co-Founder & Investor
            </h3>
          </Reveal>
          <Reveal>
            <p>
              Ramkesh Vyas, a native of Gwalior, Madhya Pradesh, has a diverse
              background in the nursing and healthcare education sector. With
              experience managing multiple nursing colleges, he has played a
              pivotal role in shaping the careers of aspiring healthcare
              professionals.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Recognizing the potential of Swastha Sky, Ramkesh partnered with
              Harsh Sharma’s vision, not only as a business associate but also
              as an early investor in the company. His expertise and connections
              with multiple hospitals have strengthened Swastha Sky’s ability to
              expand its network and provide reliable, well-trained healthcare
              professionals.
            </p>
          </Reveal>
        </div>

  
          <div
            style={{
              width: "400px",
              height: "450px",
              marginBottom: "0.50rem",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            className="team-img"
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                padding: "10px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src={RamkeshImg}
              alt=""
            />
          </div>
      </div>
    </div>
  );
}

export default Ramkesh;
