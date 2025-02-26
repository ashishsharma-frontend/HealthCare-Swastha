import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import DownloadImg from "../MainResources/ExtraResources/Logo.svg";
import { SiCoinmarketcap } from "react-icons/si";
import NavbarImg from "../MainResources/ExtraResources/Navbar.svg";
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Force full page reload when navigating
  const handleNavigation = (path) => {
    setIsOpen(false); // Close menu before navigation
    setTimeout(() => {
      window.location.href = path; // Forces full page reload
    }, 300); // Wait for animation to complete
  };

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <header
      style={{
        padding: "1rem 2rem",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "1000",
        backgroundColor: "#FBFBFB",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      }}
      className="navbar"
    >
      <div className="logo">
        <Link to="/">
          <img src={DownloadImg} alt="logo" style={{ width: "60px" }} />
        </Link>
      </div>

      {/* Menu Icon (Visible on Small Screens) */}
      <div
        style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        className="menu-section"
      >
        <span
          style={{ fontSize: "1.3rem", color: "#3D3BF3", cursor: "pointer" }}
        >
          <SiCoinmarketcap />
        </span>
        <div
          style={{ cursor: "pointer" }}
          className="menu-icon"
          onClick={toggleMenu}
        >
          {isOpen ? <RxCross2 size={30} /> : <IoIosMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu (Visible on Click with Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              position: "absolute",
              top: "85px",
              right: "0",
              maxWidth: "430px",
              width: "100%",
              textAlign: "end",
              minHeight: "89vh",
              background: "#3D3B40",
              padding: "1.5rem 2rem",
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                fontSize: "clamp(2.1rem, 3vw, 2.5rem)",
                color: "#FBFBFB",
                textDecoration: "none",
                fontWeight: "700",
                display: "flex",
                flexDirection: "column",
                gap: "0.40rem",
              }}
            >
              {[
                { name: "Home", path: "/" },
                { name: "AboutUs", path: "/about" },
                { name: "Our Services", path: "/our-services" },
                // { name: "HomeCare", path: "/" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.path}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div
              style={{
                borderTop: "2px solid #f9f9f9",
                textAlign: "start",
                padding: "0.5rem",
              }}
              className="menu-bottom"
            >
              <div
                style={{
                  color: "#f9f9f9",
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.2rem",
                }}
                className="social-icon"
              >
                <Link to="https://www.linkedin.com/company/swastha-sky-private-limited/?originalSubdomain=in">
                  <Reveal>
                    <span style={{ fontSize: "1.2rem" }}>Linkedin</span>
                  </Reveal>{" "}
                </Link>{" "}
                <Link to="">
                  <Reveal>
                    <span style={{ fontSize: "1.2rem" }}>Twitter</span>
                  </Reveal>{" "}
                </Link>
                <Link to="https://www.instagram.com/swasthasky/">
                  <Reveal>
                    <span style={{ fontSize: "1.2rem" }}>Instagram</span>
                  </Reveal>{" "}
                </Link>{" "}
              </div>
              <div style={{ marginTop: "2rem" }} className="circle-line">
                <PopupCard>
                  <img style={{ margin: "0 auto" }} src={NavbarImg} alt="" />
                </PopupCard>{" "}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
