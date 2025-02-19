import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../FramerMMotion/Reveal";
import PopupCard from "../FramerMMotion/PopupCard";
import Testimonial01Img from "../MainResources/HomeResources/Testimonial01.jpg";
import Testimonial02Img from "../MainResources/HomeResources/Testimonial02.jpg";
import Testimonial03Img from "../MainResources/HomeResources/Testimonial03.jpg";
import Testimonial04Img from "../MainResources/HomeResources/Testimonial04.jpg";

const testimonials = [
  {
    no: "#1",
    name: "Kartik Sharma",
    text: "The video consultation service was seamless and professional. The doctor listened carefully and provided detailed advice. I felt reassured and confident in the treatment plan. Highly recommended for anyone seeking quick medical help!",
    image: Testimonial01Img,
  },
  {
    no: "#2",
    name: "Pooja Verma",
    text: "I got instant medical advice from a certified doctor without leaving my home. The entire process was smooth, and the doctor addressed all my concerns. I appreciate the convenience and expertise provided. Great experience overall!",
    image: Testimonial03Img,
  },
  {
    no: "#3",
    name: "Amit Mehra",
    text: "Amazing service! The doctor was very attentive and helped me understand my health issue clearly. I received a proper diagnosis and guidance on medication. This platform has truly made healthcare more accessible and efficient!",
    image: Testimonial02Img,
  },
  {
    no: "#4",
    name: "Neha Kapoor",
    text: "The best online healthcare experience I’ve had! The doctor was professional and explained everything thoroughly. The appointment was on time, and the recommendations were effective. Fast, reliable, and truly a lifesaver!",
    image: Testimonial04Img,
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Slow auto-slide for better experience
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2.5rem 0",
        padding: "1.1rem",
        overflow: "hidden",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>( Reviews )</h2>
      <p style={{ marginBottom: "1.5rem" }}> What Our Patients Say </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            width: "100%",
            maxWidth: "850px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "1rem",
                gap: "2rem",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fbfbfb",
                border: "1px solid #3B3D40",
              }}
              className="testimonial-box"
            >
              {/* Left Side - Text */}
              <div style={{ flex: "1", textAlign: "left", minWidth: "250px" }}>
                <Reveal>
                  <h2
                    style={{
                      fontFamily: "var(--Signature-Font)",
                      fontSize: "1.5rem",
                      marginBottom: "1.1rem",
                    }}
                  >
                    {testimonials[index].no}
                  </h2>
                </Reveal>
                <Reveal>
                  {" "}
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      fontFamily: "var(--Heading-Font)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {testimonials[index].name}
                  </h3>
                </Reveal>
                <Reveal>
                  <p>{testimonials[index].text}</p>
                </Reveal>{" "}
              </div>

              {/* Right Side - Image */}
              <div className="testimonial-img">
                <PopupCard>
                  <motion.img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </PopupCard>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
