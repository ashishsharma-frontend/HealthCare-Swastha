import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./FramerMMotion/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import HomePage from "./HomePage/HomePage";
import WhoWeAre from "./AboutUs/WhoWeAre";
import OurServices from "./OurServices/OurServices";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ComingSoon from "./ComingSoon";
import PrivacyPolicy from "./Policy";
import Term from "./Term";
import Harsh from "./AboutUs/Harsh";
import Ramkesh from "./AboutUs/Ramkesh";
import Ashish from "./AboutUs/Ashish";

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-condition" element={<Term />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/harsh" element={<Harsh />} />
          <Route path="/ramkesh" element={<Ramkesh />} />
          <Route path="/ashish" element={<Ashish />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
