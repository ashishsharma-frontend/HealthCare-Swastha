import React, { useState } from "react";
import { motion } from "framer-motion";
import MarketplaceImg from "../MainResources/ServiceResources/MarketPlace.svg";
import Marketplace02Img from "../MainResources/ServiceResources/MarketplaceMain.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../FramerMMotion/Button";
import PopupCard from "../FramerMMotion/PopupCard";
import Reveal from "../FramerMMotion/Reveal";
import BrowseImg from "../MainResources/ServiceResources/Marketplace01.webp";
import OrderImg from "../MainResources/ServiceResources/Marketplace02.jpg";
import DeliveryImg from "../MainResources/ServiceResources/Marketplace03.jpg";

function Marketplace() {
  const steps = [
    {
      id: "step1",
      title: "1. Browse & Select",
      image: BrowseImg,
      alt: "Browse Products",
      subtitle: "Explore Healthcare Essentials",
      description:
        "Discover a vast range of healthcare products, medicines, and equipment from verified suppliers on Swasth Future Marketplace.",
    },
    {
      id: "step2",
      title: "2. Place Your Order",
      image: OrderImg,
      alt: "Order Placement",
      subtitle: "Seamless Buying Experience",
      description:
        "Add items to your cart, compare prices, and place secure orders with trusted vendors for a smooth purchasing process.",
    },
    {
      id: "step3",
      title: "3. Quick & Secure Delivery",
      image: DeliveryImg,
      alt: "Order Delivery",
      subtitle: "Reliable & Fast Shipping",
      description:
        "Enjoy fast and secure doorstep delivery with real-time tracking and flexible payment options for a hassle-free experience.",
    },
  ];

  return (
    <div
      className="web-marketplace"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.1rem",
        gap: "2.5rem",
      }}
    >
      <PopupCard>
        <img
          style={{
            maxWidth: "800px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "5px solid #FBFBFB",
          }}
          src={MarketplaceImg}
          alt="Marketplace"
        />
      </PopupCard>

      <div
        className="web-middle"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        <div
          className="web-left"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: "700px",
          }}
        >
          <div className="buyers">
            <Reveal>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontFamily: "var(--Heading-Font)",
                  color: "#8B93FE",
                }}
              >
                For Buyers
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Swasth Future Marketplace offers hospitals, clinics, and
                individuals a seamless platform to purchase genuine medical
                products, equipment, and pharmaceuticals directly from trusted
                vendors.
              </p>
            </Reveal>
          </div>
          <div className="sellers">
            <Reveal>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontFamily: "var(--Heading-Font)",
                  color: "#8B93FE",
                }}
              >
                For Sellers
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Vendors and manufacturers can list their healthcare products,
                expand their reach, and connect with a wider customer base to
                grow their business efficiently.
              </p>
            </Reveal>
          </div>
        </div>

        <PopupCard>
          <div
            className="web-right"
            style={{
              maxWidth: "450px",
              height: "300px",
              overflow: "hidden",
            }}
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
                src={Marketplace02Img}
                alt="Marketplace"
              />
            </PopupCard>
          </div>
        </PopupCard>
      </div>

      <div className="work-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
          <div
            className="work-process-content"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {steps.map((step) => (
              <PopupCard key={step.id}>
                <motion.div
                  className="work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "5px solid #FBFBFB",
                    padding: "0.5rem",
                    gap: "1rem",
                    minHeight: "400px",
                    backgroundColor: "#FBFBFB",
                  }}
                >
                  <div className="card-title">
                    <Reveal>
                      <span>{step.title}</span>
                    </Reveal>
                  </div>
                  <div
                    className="img-text-content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      className="work-image"
                      style={{
                        maxWidth: "100%",
                        height: "150px",
                        overflow: "hidden",
                      }}
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
                      <p>{step.description}</p>
                    </Reveal>
                  </div>
                </motion.div>
              </PopupCard>
            ))}
          </div>
        </motion.div>
      </div>

      <Link
        to="https://swasthfuture.com/"
        style={{
          color: "#4B4D40",
          border: "2px solid #4b4d40",
          padding: "1rem 1.5rem",
          borderRadius: "12px",
        }}
      >
        <Button
          title="Go to Marketplace"
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

export default Marketplace;
