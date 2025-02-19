import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const PopupCard = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 }); // Slightly lower threshold for smoother trigger

  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.85, y: 80 }, // Smoother entry
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationControls}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20, 
        mass: 0.5, 
      }}
    >
      {children}
    </motion.div>
  );
};

export default PopupCard;
