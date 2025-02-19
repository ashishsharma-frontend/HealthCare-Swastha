import React from "react";
import ComingSoonImg from "./MainResources/ExtraResources/ComingSoon.gif";

function ComingSoon() {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        Height: "200vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        margin : '10rem 0'
      }}
    >
      <img
        style={{ maxWidth: "450px", border: "5px solid #FBFBFB", padding : '1rem' }}
        src={ComingSoonImg}
        alt=""
      />
      <h2
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          fontFamily: "var(--Heading-Font)",
        }}
      >
        Coming Soon
      </h2>
    </div>
  );
}

export default ComingSoon;
