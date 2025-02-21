import React from "react";
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";
import { Link } from "react-router-dom";
import MeetTeam from "../MainResources/ExtraResources/OurTeam.svg";
import ButtonImg from "../MainResources/AboutResources/TeamButton.svg";
import HarshImg from "../MainResources/AboutResources/Harsh.jpg";
import RamkeshImg from "../MainResources/AboutResources/Ramkesh.jpg";
import AshishImg from "../MainResources/AboutResources/AshishSharma.svg";

const teamMembers = [
  {
    name: "Harsh Sharma",
    role: "CEO",
    image: HarshImg,
    teamlink: "/harsh",
  },
  {
    name: "Ashish Sharma",
    role: "Web Developer",
    image: AshishImg,
    teamlink: "/ashish",
  },
  {
    name: "Ramkesh Vyas",
    role: "Investor",
    image: RamkeshImg,
    teamlink: "/ramkesh",
  },
];

function TeamMember() {
  return (
    <div>
      {/* Our Team Section */}
      <div className="our-team-section">
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
              style={{ maxWidth: "140px", margin: "2rem 0" }}
              src={MeetTeam}
              alt=""
            />
          </PopupCard>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
          className="team-cards-container"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                maxWidth: "350px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#FBFBFB",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                paddingBottom: "1rem",
                transition: "transform 0.3s ease",
              }}
              className="team-card"
            >
              <PopupCard>
                <div
                  style={{
                    width: "330px",
                    height: "320px",
                    marginBottom: "0.50rem",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  className="team-card-img"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "10px",
                      objectFit: "cover",
                      objectPosition: "top",
                      transition: "transform 0.5s ease-in-out",
                    }}
                    src={member.image}
                    alt={member.name}
                  />
                </div>
              </PopupCard>

              <h2 style={{ fontSize: "1rem" }}>
                {member.name} - {member.role}
              </h2>

              <Link to={member.teamlink}>
                <div
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    borderTop: "1px solid #3b3d40",
                    marginTop: "1rem",
                    paddingTop: "0.5rem",
                  }}
                  className="team-button"
                >
                  <img
                    style={{ width: "120px", cursor: "pointer" }}
                    src={ButtonImg}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
        ;
      </div>
    </div>
  );
}

export default TeamMember;
