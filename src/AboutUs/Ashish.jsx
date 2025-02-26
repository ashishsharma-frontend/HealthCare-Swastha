import React from "react";
import AshishImg from "../MainResources/AboutResources/AshishSharma.svg";
import Reveal from "../FramerMMotion/Reveal";
import PopupCard from "../FramerMMotion/PopupCard";

function Ashish() {
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
              Ashish Sharma
            </h2>
          </Reveal>
          <Reveal>
            <h3 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
            Frontend Developer | Creative Web Enthusiast

</h3>
          </Reveal>
          <Reveal>
            <p>
              Ashish Sharma is a passionate frontend web developer with a
              creative approach to building interactive and user-friendly
              websites. His journey in web development began in mid-2023, and
              since then, he has been honing his skills in HTML, CSS,
              JavaScript, React.js, Tailwind CSS, and Framer Motion for
              animations.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Currently pursuing a BSc in Mathematics (2nd year) at Jiwaji
              University, Ashish is eager to expand his expertise by diving into
              Next.js, backend development, and UI/UX design. His goal is to
              craft seamless digital experiences that blend functionality with
              aesthetics.
            </p>
          </Reveal>

          <Reveal>
            <p>
              At just 20 years old, he is continuously learning and perfecting
              his craft, dedicated to creating high-quality web applications
              that make an impact in the tech world.
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
              src={AshishImg}
              alt=""
            />
          </div>
        </PopupCard>
      </div>
    </div>
  );
}

export default Ashish;
