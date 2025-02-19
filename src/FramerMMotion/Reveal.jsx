import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      {/* Content Animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9, filter: "blur(15px)" }, // Stronger blur
          visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{
          duration: 1, // Extended duration for smoothness
          ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for ultra-smooth motion
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
