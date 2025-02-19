import React, { useState } from "react";
import { motion } from "framer-motion";
import HmsImg from "../MainResources/ServiceResources/HMS.png";
import HMS00Img from "../MainResources/ServiceResources/HMS00.webp";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../FramerMMotion/Button";
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";
import HMS01 from "../MainResources/ServiceResources/HMS01.jpeg";
import HMS02 from "../MainResources/ServiceResources/HMS02.jpeg";
import HMS03 from "../MainResources/ServiceResources/HMS03.jpeg";

function HMS() {
  const steps = [
    {
      id: "step1",
      title: "1. Register & Setup",
      image: HMS01,
      alt: "Hospital Registration",
      subtitle: "Quick Onboarding",
      description:
        "Easily register your hospital or clinic on Swasth Future HMS. Set up doctor profiles, departments, and services in just a few steps.",
    },
    {
      id: "step2",
      title: "2. Manage Appointments & Patients",
      image: HMS02,
      alt: "Patient Management",
      subtitle: "Seamless Scheduling",
      description:
        "Automate patient appointments, manage records digitally, and reduce wait times with our smart healthcare management system.",
    },
    {
      id: "step3",
      title: "3. Streamline Operations & Billing",
      image: HMS03,
      alt: "Billing & Reports",
      subtitle: "Smart Healthcare",
      description:
        "Generate invoices, track payments, and manage reports efficiently, ensuring smooth hospital operations with real-time insights.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "2.5rem",
      }}
      className="web-hms"
    >
      <PopupCard>
        <img
          style={{
            maxWidth: "800px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "5px solid #FBFBFB",
          }}
          src={HmsImg}
          alt="HMS"
        />
      </PopupCard>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "2.5rem",
          alignItems: "center",
        }}
        className="web-middle"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: "700px",
          }}
          className="web-left"
        >
          <div className="patient">
            <Reveal>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontFamily: "var(--Heading-Font)",
                  color: "#8B93FE",
                  marginBottom: "1rem",
                }}
              >
                For Patients
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Swasth Future HMS ensures hassle-free healthcare access by
                allowing patients to book doctor appointments, access medical
                records, receive prescriptions, and track their health
                history—all in one place.
              </p>
            </Reveal>
          </div>
          <div className="doctor-hospitals">
            <Reveal>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontFamily: "var(--Heading-Font)",
                  color: "#8B93FE",
                  marginBottom: "1rem",
                }}
              >
                For Doctor & Hospitals
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Designed to enhance efficiency and patient care, Swasth Future
                HMS offers hospitals and doctors a centralized platform for
                managing appointments, medical records, billing, and
                diagnostics.
              </p>
            </Reveal>
          </div>
        </div>

        <PopupCard>
          <div
            style={{
              maxWidth: "450px",
              height: "300px",
              overflow: "hidden",
            }}
            className="web-right"
          >
            <PopupCard>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "5px solid #FBFBFB",
                }}
                src={HMS00Img}
                alt="HMS"
              />
            </PopupCard>
          </div>
        </PopupCard>
      </div>

      <div className="work-container" style={{}}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="work-content"
        >
          {" "}
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.8rem",
              fontFamily: "var(--Heading-Font)",
            }}
          >
            How It Works
          </h2>
          <p style={{textAlign : 'center'}}>Simplifying Healthcare Access for Everyone</p>
          {/* Cards Container */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              position: "relative",
              marginTop: "2rem",
            }}
            className="work-process-content"
          >
            {steps.map((step) => (
              <PopupCard key={step.id}>
                <motion.div
                  className="work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{
                    maxWidth: "350px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "5px solid #FBFBFB",
                    padding: "0.5rem",
                    gap: "1rem",
                    height: "inherit",
                    backgroundColor: "#FBFBFB",
                  }}
                >
                  <div className="card-title">
                    <Reveal>
                      <span
                        style={{
                          fontSize: "1rem",
                        }}
                      >
                        {step.title}
                      </span>
                    </Reveal>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                    className="img-text-content"
                  >
                    <div
                      style={{
                        maxWidth: "100%",
                        height: "150px",
                        overflow: "hidden",
                      }}
                      className="work-image"
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={step.image}
                        alt={step.alt}
                      />
                    </div>
                    <Reveal>
                      <h2
                        style={{
                          fontFamily: "var(--Heading-Font)",
                          fontSize: "1.4rem",
                        }}
                      >
                        {step.subtitle}
                      </h2>
                    </Reveal>
                    <Reveal>
                      {" "}
                      <p style={{}}>{step.description}</p>
                    </Reveal>{" "}
                  </div>
                </motion.div>
              </PopupCard>
            ))}
          </div>
        </motion.div>
      </div>

      <Link
        to="/coming-soon"
        style={{
          color: "#4B4D40",
          border: "2px solid #4b4d40",
          padding: "1rem 1.5rem",
          borderRadius: "12px",
        }}
      >
        <Button
          title="Go to live"
          rightIcon={
            <MdArrowOutward
              style={{
                backgroundColor: "#8B92FD",
                padding: "5px",
                borderRadius: "50%",
                fontSize: "1.5rem",
                color: "#fbfbfb",
              }}
            />
          }
          containerClass=" flex gap-4 justify-center items-center cursor-pointer "
        />
      </Link>
    </div>
  );
}

export default HMS;
