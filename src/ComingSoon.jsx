import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ComingSoonImg from "./MainResources/ExtraResources/ComingSoon.gif";
import { FaArrowRightLong } from "react-icons/fa6";

function ComingSoon() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="coming-soon"
      style={{
        textAlign: "center",
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "100px",
        padding: "1.1rem",
      }}
    >
      <motion.img
        src={ComingSoonImg}
        alt="Coming Soon"
        style={{ maxWidth: "450px", width: "100%", border: "5px solid #FBFBFB" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.h2
        style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", fontFamily: "var(--Heading-Font)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Exciting Things Are Coming Soon!
      </motion.h2>
      <motion.p
        style={{ maxWidth: "500px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        We are building India's most advanced healthcare marketplace and HMS platform. Stay tuned!
      </motion.p>
      <motion.button
        onClick={() => navigate(-1)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          color: "#3D3B40",
          fontSize: "1.1rem",
          cursor: "pointer",
          border: "none",
          background: "none",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Previous Page <FaArrowRightLong />
      </motion.button>
    </motion.div>
  );
}

export default ComingSoon;