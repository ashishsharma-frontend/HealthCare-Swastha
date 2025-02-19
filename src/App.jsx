import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./FramerMMotion/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import HomePage from "./HomePage/HomePage";
import WhoWeAre from "./AboutUs/WhoWeAre";
import OurServices from "./OurServices/OurServices";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ComingSoon from "./ComingSoon";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Ensures every new page starts from the top */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
