import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../FramerMMotion/Button";
import Reveal from "../FramerMMotion/Reveal";
import TextImg from "../MainResources/HomeResources/TextImg.jpg";
import SecondOneMp4 from "../MainResources/HomeResources/SecondOne.mp4";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";
import PopupCard from "../FramerMMotion/PopupCard";
import HomeCare from "./HomeCare";
import DownloadApp from "./DownloadApp";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Marketplace",
    description:
      "Discover our comprehensive marketplace featuring medical doctors, hospital listings, medicines, tests, and other essential services.",
    buttonText: "Check Now",
    bgColor: "#FBFBFB",
    titleBg: "#B6FFA1",
    link: "/coming-soon",
  },
  {
    title: "HMS",
    description:
      "Experience our multi-specialty Hospital Management System designed to organize hospital data and streamline services, ensuring efficient care.",
    buttonText: "Check Now",
    bgColor: "#FBFBFB",
    titleBg: "#B6FFA1",
    link: "/coming-soon",
  },
];

const marqueeItems = [
  {
    title: "Swastha Sky",
    description:
      "Bringing innovation and accessibility together for a healthier tomorrow.",
  },
  {
    title: "Home Care",
    description:
      "Compassionate healthcare services at your doorstep, ensuring comfort and convenience.",
  },
  {
    title: "Marketplace",
    description:
      "Your one-stop destination for doctors, hospitals, medicines, and diagnostics.",
  },
  {
    title: "HMS (Hospital Management System)",
    description:
      "Efficiently managing hospital operations for enhanced patient care and seamless workflows.",
  },
];

function HomePage() {
  return (
    <div className="home">
      <div
        className="home-page-container"
        style={{
          marginTop: "88px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "calc(90vh - 100px)",
          gap: "20px",
          padding: "1.1rem",
          marginBottom: "-0.5rem",
        }}
      >
        <div style={{marginTop : '1.5rem'}} className="home-left-side">
          <div className="top-text">
            <Reveal>
              <h2
                style={{
                  marginBottom: "0.70rem",
                  fontFamily: "var(--Signature-Font)",
                  fontSize: "1.5rem",
                  color: "#8B93FE",
                }}
              >
                Swastha Sky
              </h2>
            </Reveal>
            <Reveal>
              <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 3.5rem)" }}>
                <span
                  style={{
                    display: "block",
                    lineHeight: "1.2",
                    fontFamily: "var(--Heading-Font)",
                  }}
                >
                  Bringing Quality Healthcare to
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "var(--Heading-Font)",
                  }}
                >
                  <motion.div
                    className="work"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img
                      src={TextImg}
                      alt="Innovative"
                      style={{
                        width: "80px",
                        marginRight: "15px",
                        marginBottom: "0.3rem",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  </motion.div>
                  Your Fingertips!
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <video
                src={SecondOneMp4}
                autoPlay
                loop
                muted
                className="responsive-video"
                style={{
                  maxWidth: "480px",
                  width: "100%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "1.3rem",
                }}
              />
            </motion.div>
          </Reveal>
        </div>

        <div className="home-right-side">
          <div
            className="home-right-container"
            style={{
              backgroundColor: "#8B93FF",
              color: "#FBFBFB",
              maxWidth: "650px",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginTop: "1.5rem",
            }}
          >
            <div className="top-text">
              <Reveal>
                <h2
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 3rem)",
                    lineHeight: "1.1",
                    fontFamily: "var(--Heading-Font)",
                    marginBottom: "2rem",
                    color: "#FBFBFB",
                  }}
                >
                  What if
                  <br />
                  Better Healthcare
                  <br />
                  Were Just a Click Away?
                </h2>
              </Reveal>
            </div>

            <div
              className="cards-container"
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              {cards.map((card, index) => (
                <PopupCard key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div
                      className={`card-${index + 1}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        maxWidth: "100%",
                        minHeight: "248px",
                        backgroundColor: card.bgColor,
                        color: "#3D3B40",
                        padding: "10px",
                        borderRadius: "12px",
                        border: "1px solid #3D3B40",
                      }}
                    >
                      <Reveal>
                        <h3
                          style={{
                            padding: "5px",
                            borderRadius: "10px",
                            backgroundColor: card.titleBg,
                            width: "120px",
                            marginBottom: "1rem",
                            fontSize: "0.80rem",
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          {card.title}
                        </h3>
                      </Reveal>
                      <Reveal>
                        <p style={{ fontSize: "0.9rem" }}>{card.description}</p>
                      </Reveal>
                      <Link to={card.link}>
                        {" "}
                        <Button
                          title="Click to Download"
                          rightIcon={
                            <MdArrowOutward
                              style={{
                                backgroundColor: "#B4FEA2",
                                padding: "5px",
                                borderRadius: "50%",
                                fontSize: "1.5rem",
                              }}
                            />
                          }
                          containerClass="bg-[#8B93FE] text-[#FBFBFB] rounded-lg flex gap-4 justify-center items-center  min-h-[45px] w-[100%] cursor-pointer hover:bg-[#7A82E6]"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </PopupCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "2rem 0",
        }}
        className="marquees-container"
      >
        <Marquee
          style={{
            height: "9vh",
            backgroundColor: "#3B3D40",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ color: "#f9f9f9", fontSize: "1.2rem" }}>
            Access top doctors, hospitals, and homecare services effortlessly
            through our platform. We bring you seamless healthcare solutions,
            ensuring convenience and reliability at every step. Whether you need
            a consultation, diagnostic tests, or home-based care, everything is
            just a click away.
          </p>
        </Marquee>
        <Marquee
          style={{ backgroundColor: "#8B93FE", height: "9vh" }}
          direction="right"
        >
          <p style={{ color: "#fbfbfb", fontSize: "1.2rem" }}>
            Your well-being is our priority. With trusted professionals and a
            user-friendly interface, we make healthcare accessible and
            hassle-free. Experience innovation in medical services and embrace a
            healthier future with ease and confidence.
          </p>
        </Marquee>
      </div>

   

      <div className="HomeCare">
        <HomeCare />
      </div>

      <div className="DownloadApp">
        <DownloadApp />
      </div>

      <div className="Testimonial">
        <Testimonial />
      </div>
    </div>
  );
}

export default HomePage;
