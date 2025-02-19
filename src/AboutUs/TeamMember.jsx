import React from 'react'
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import HarshImg from "../MainResources/AboutResources/Harsh.jpg";
import RamkeshImg from "../MainResources/AboutResources/Ramkesh.jpg";
import AshishImg from "../MainResources/AboutResources/AshishSharma.svg";

const teamMembers = [
  {
    name: "Harsh Sharma",
    role: "CEO",
    image: HarshImg,
    linkedin: "https://linkedin.com/in/harshsharma",
    twitter: "https://twitter.com/harshsharma",
    github: "https://github.com/harshsharma",
  },
  {
    name: "Ashish Sharma",
    role: "Web Developer",
    image: AshishImg,
    linkedin: "https://linkedin.com/in/ashishsharma",
    twitter: "https://twitter.com/ashishsharma",
    github: "https://github.com/ashishsharma",
  },
  {
    name: "Ramkesh Vyas",
    role: "Investor",
    image: RamkeshImg,
    linkedin: "https://linkedin.com/in/ramkeshvyas",
    twitter: "https://twitter.com/ramkeshvyas",
    github: "https://github.com/ramkeshvyas",
  },
];

function TeamMember() {
  return (
    <div>
           {/* Our Team Section */}
           <div className="our-team-section">
        <h2 style={{ fontSize: "1.2rem", textAlign: "center", margin: "2rem" }}>
          ( Meet Our Team )
        </h2>
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

              <h2 style={{ marginBottom: "-1.2rem", fontSize: "1rem" }}>
                {member.name} - {member.role}
              </h2>

              {/* Social Icons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "15px",
                  paddingTop: "1rem",
                }}
                className="team-social"
              >
                <Reveal>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      style={{ fontSize: "1.1rem", color: "#0077b5" }}
                    />
                  </a>
                </Reveal>
                <Reveal>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter
                      style={{ fontSize: "1.1rem", color: "#1DA1F2" }}
                    />
                  </a>
                </Reveal>
                <Reveal>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      style={{ fontSize: "1.1rem", color: "#171515" }}
                    />
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
        ;
      </div>
    </div>
  )
}

export default TeamMember
