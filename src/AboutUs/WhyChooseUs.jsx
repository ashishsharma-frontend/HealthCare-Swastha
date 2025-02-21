import React from "react";
import WhyChooseUsVideo from "../MainResources/AboutResources/WhyChooseUs.mp4";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAccessTime, MdVideoCall, MdLockOutline } from "react-icons/md";
import { FaUserMd, FaCapsules } from "react-icons/fa";
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";
import WhyChooseSvg from "../MainResources/ExtraResources/WhyChoose.svg";

const whyChooseUsData = [
  {
    title: "Trusted Doctors",
    icon: <FaUserMd />,
    description:
      "Connect with certified and experienced healthcare professionals anytime for better care.",
  },
  {
    title: "24/7 Healthcare Access",
    icon: <MdAccessTime />,
    description:
      "Get instant consultations and expert advice, anytime you need, from the comfort of your home.",
  },
  {
    title: "Video Consultation",
    icon: <MdVideoCall />,
    description:
      "Consult top doctors via video calls and receive expert guidance without stepping outside.",
  },
  {
    title: "Easy Appointments",
    icon: <IoMdCheckmarkCircleOutline />,
    description:
      "Book specialists hassle-free with just a few taps and get timely medical attention without delays or hassle.",
  },
  {
    title: "Online Pharmacy",
    icon: <FaCapsules />,
    description:
      "Order medicines from trusted sources with home delivery for added convenience and reliable service.",
  },
  {
    title: "Secure & Private",
    icon: <MdLockOutline />,
    description:
      "Your health data is encrypted and protected with high-security standards to ensure confidentiality.",
  },
];

function WhyChooseUs() {
  return (
    <div style={{ paddingBottom: "1rem" }} className="why-choose-us">
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
            style={{ maxWidth: "140px", margin: "3rem 0" }}
            src={WhyChooseSvg}
            alt=""
          />
        </PopupCard>
      </div>
      <div
        className="why-choose-us-main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2.5rem",
        }}
      >
        {/* Left Side Content (First 3 Features) */}
        <div
          className="why-choose-left"
          style={{
            flex: "1",
            textAlign: "left",
            maxWidth: "320px",
          }}
        >
          {whyChooseUsData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1.5rem",
                maxWidth: "400px",
                minWidth: "250px",
              }}
            >
              <span
                style={{
                  color: "#3b3d40",
                  fontSize: "1.3rem",
                }}
                className="icon"
              >
                <Reveal>{item.icon}</Reveal>{" "}
              </span>
              <Reveal>
                {" "}
                <h3 style={{ color: "#8B93FE", margin: "1rem 0" }}>
                  {item.title}
                </h3>
              </Reveal>
              <Reveal>
                <p>{item.description}</p>
              </Reveal>{" "}
            </div>
          ))}
        </div>

        {/* Middle - Video Section */}
        <div
          style={{
            width: "360px",
            height: "510px",
            marginBottom: "0.50rem",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "5px solid #fbfbfb",
          }}
          className="why-choose-video"
        >
          <PopupCard>
            <video
              src={WhyChooseUsVideo}
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

        {/* Right Side Content (Remaining 3 Features) */}
        <div
          className="why-choose-right"
          style={{
            flex: "1",
            textAlign: "left",
            maxWidth: "350px",
            padding: "10px",
          }}
        >
          {whyChooseUsData.slice(3, 6).map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1.5rem",
                maxWidth: "400px",
                minWidth: "250px",
              }}
            >
              <span
                style={{
                  color: "#3b3d40",
                  fontSize: "1.3rem",
                }}
                className="icon"
              >
                <Reveal>{item.icon}</Reveal>{" "}
              </span>
              <Reveal>
                <h3 style={{ color: "#8B93FE", margin: "1rem 0" }}>
                  {item.title}
                </h3>
              </Reveal>
              <Reveal>
                <p>{item.description}</p>
              </Reveal>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
