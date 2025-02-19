import React from "react";
import Reveal from "../FramerMMotion/Reveal";
import PopupCard from "../FramerMMotion/PopupCard";
import Button from "../FramerMMotion/Button";
import { MdArrowOutward } from "react-icons/md";
import DownloadHmsImg from "../MainResources/HomeResources/DownloadHms.svg";
import DownloadAppImg from "../MainResources/HomeResources/DownloadApp.svg";
import { Link } from "react-router-dom";

function DownloadApp() {
  return (
    <section className="Download-app-Section">
      <div
        style={{ textAlign: "center", margin: " 2rem 0" }}
        className="main-text"
      >
        <h2 style={{ fontSize: "1.2rem" }}>( HMS )</h2>
        <p style={{ fontSize: "1rem" }}>Health Management System</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3.5rem",
          marginTop: "1.5rem",
          padding: "1.1rem",
        }}
        className="download-app-hms"
      >
        <div className="left-hms">
          <PopupCard>
            <img
              style={{
                maxWidth: "160px",
                marginBottom: "2.5rem",
              }}
              src={DownloadAppImg}
              alt=""
            />
          </PopupCard>
          <Reveal>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: "1.1",
                fontFamily: "var(--Heading-Font)",
                marginBottom: "1rem",
              }}
            >
              Download our{" "}
              <span
                style={{
                  color: "#8B93FE",
                  fontFamily: "var(--Heading-Font)",
                }}
              >
                HMS App
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "650px",
                marginBottom: "2rem",
              }}
            >
              Experience seamless healthcare management with our advanced
              Hospital Management System. Connect with doctors, book
              appointments, and access medical records with just a few clicks.
            </p>
          </Reveal>

          <Link to="/coming-soon">
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
              containerClass="bg-[#8B93FE] text-[#FBFBFB] rounded-lg flex gap-4 justify-center items-center px-6 py-3 min-h-[45px] cursor-pointer min-w-[210px] "
            />
          </Link>
        </div>
        <div className="right-hms">
          <PopupCard>
            {" "}
            <img style={{ maxWidth: "250px" }} src={DownloadHmsImg} alt="" />
          </PopupCard>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
