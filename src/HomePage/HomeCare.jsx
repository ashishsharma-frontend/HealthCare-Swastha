import React from 'react'
import CircleImg from "../MainResources/HomeResources/CircleLines.svg";
import HomeCareImg from "../MainResources/HomeResources/HomeCare.jpg";
import Reveal from "../FramerMMotion/Reveal";
import PopupCard from '../FramerMMotion/PopupCard';

function HomeCare() {
  return (

    <div
    className="homecare-content"
    style={{
      width: "100%",
      padding: "1.1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
    }}
  >
    {/* Top Section: Heading & Text */}
    <div
      className="home-care-top"
      style={{ position: "relative", zIndex: "2" }}
    >
      <h2 style={{ fontSize: "1.2rem" }}>( HomeCare )</h2>

      <Reveal>
        <p
          style={{
            lineHeight: "1.1",
            fontWeight: "bold",
            fontSize: "clamp(1.8rem, 3vw, 3rem)",
            fontFamily: "var(--Heading-Font)",
            marginTop: "1rem",
            zIndex: "2",
          }}
        >
          Compassionate Care, Comfort, <br /> and <br /> Healing at Home
        </p>
      </Reveal>
    </div>

    {/* Image Section - Now placed separately! */}
    <div
      className="homecare-img-container"
      style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "450px",
        height: "300px",
        marginTop: "-1.3rem",
        zIndex: "999",
      }}
    >
      <PopupCard>
        <img
          src={HomeCareImg}
          alt="HomeCare"
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </PopupCard>
    </div>

    {/* Bottom Section: Content - Now below the image! */}
    <div
      className="homecare-bottom"
      style={{
        marginTop: "2rem",
        zIndex: "1", // Ensures it doesn't overlap
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          textAlign: "start",
          alignItems: "center",
          gap: "20px",
        }}
        className="homecare-bottom-text"
      >
        <Reveal>
          <p style={{ fontSize: "1.1rem", maxWidth: "650px" }}>
            Quality care should never be out of reach. Whether it’s
            post-surgery recovery, elderly support, or daily medical
            assistance, our{" "}
            <span style={{ backgroundColor: "#8B93FE", color: "#FBFBFB" }}>
              Home Care
            </span>{" "}
            Services ensure professional, compassionate care in the comfort
            of your home.
          </p>
        </Reveal>
        <div className="circle-line">
          <PopupCard>
            <img style={{ width: "150px" }} src={CircleImg} alt="" />
          </PopupCard>{" "}
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeCare
