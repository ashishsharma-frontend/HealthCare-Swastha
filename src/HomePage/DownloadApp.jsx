import React from "react";
import Reveal from "../FramerMMotion/Reveal";
import PopupCard from "../FramerMMotion/PopupCard";
import Button from "../FramerMMotion/Button";
import { MdArrowOutward } from "react-icons/md";
import HmsDownload from "../MainResources/ExtraResources/HmsDownload.svg";
import DownloadHmsImg from "../MainResources/HomeResources/DownloadHms.svg";
import DownloadAppImg from "../MainResources/HomeResources/DownloadApp.svg";
import { Link } from "react-router-dom";

function DownloadApp() {
  return (
    <section className="Download-app-Section">
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
            style={{ maxWidth: "150px", margin: "2rem 0" }}
            src={HmsDownload}
            alt=""
          />
        </PopupCard>
        <Reveal>
          <p style={{ fontSize: "1rem" }}>Health Management System</p>
        </Reveal>{" "}
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
