import React, { useState, useRef, useEffect } from "react";
import Button from "../FramerMMotion/Button";
import Reveal from "../FramerMMotion/Reveal";
import { motion, useTransform, useScroll } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import BreathGif from "../MainResources/ServiceResources/Breath.gif";
import PopupCard from "../FramerMMotion/PopupCard";
import { GiFlowerStar } from "react-icons/gi";
import { BiHealth } from "react-icons/bi";
import HomeCareImg from "../MainResources/ServiceResources/HomeCare.jpg";
import VideoConsultationImg from "../MainResources/ServiceResources/VideoConsult.jpeg";
import LabTestsImg from "../MainResources/ServiceResources/LabTest.jpeg";
import AppointmentImg from "../MainResources/ServiceResources/Doctors.jpg";
import PharmacyImg from "../MainResources/ServiceResources/Pharmcy.png";
import EmergencyImg from "../MainResources/ServiceResources/Emergency.jpg";
import { Link } from "react-router-dom";
import Marketplace from "./Marketplace";
import HMS from "./HMS";
import { GiDoctorFace } from "react-icons/gi";
import { SiCoinmarketcap } from "react-icons/si";
import TabsImg from "../MainResources/ServiceResources/Tab.svg";
import QuickAccessSvg from "../MainResources/ExtraResources/QuickAccess.svg";
import OurServiceSvg from "../MainResources/ExtraResources/OurService.svg";

const servicesData = [
  {
    image: HomeCareImg,
    title: "HomeCare",
    description:
      "Get expert nursing and homecare for recovery, elderly care, and chronic illness management. Certified caregivers ensure personalized support at home.",
    buttonText: "Explore HomeCare",
    cardlink: "/coming-soon", // Link for this service
    id: 1,
  },
  {
    image: VideoConsultationImg,
    title: "Video Consultations",
    description:
      "Connect with top doctors from anywhere via secure video calls. Get expert medical advice, prescriptions, and follow-ups without the need for in-person visits.",
    buttonText: "Start Consultation",
    cardlink: "/coming-soon", // Link for this service
    id: 2,
  },
  {
    image: LabTestsImg,
    title: "Lab Test Bookings",
    description:
      "Schedule diagnostic tests from trusted labs with doorstep sample collection. Get accurate reports online and consult doctors instantly for analysis and further treatment.",
    buttonText: "Book Lab Test",
    cardlink: "/coming-soon", // Link for this service
    id: 3,
  },
  {
    image: AppointmentImg,
    title: "Doctor Appointments ",
    description:
      "Find and book appointments with verified doctors and specialists across hospitals and clinics. Choose your preferred slot, avoid long queues, and get timely consultations.",
    buttonText: "Find a Doctor",
    cardlink: "/coming-soon", // Link for this service
    id: 4,
  },
  {
    image: PharmacyImg,
    title: "Online Pharmacy",
    description:
      "Order genuine medicines from trusted pharmacies with fast doorstep delivery. Get expert prescription guidance and hassle-free refills for continuous health support.",
    buttonText: "Order Medicines",
    cardlink: "/coming-soon", // Link for this service
    id: 5,
  },
  {
    image: EmergencyImg,
    title: "24/7 Emergency",
    description:
      "Get immediate ambulance services and emergency medical care anytime. Our rapid-response network ensures timely treatment, prioritizing your safety and well-being.",
    buttonText: "Get Emergency Help",
    cardlink: "/coming-soon", // Link for this service
    id: 6,
  },
];

const services = [
  "Swastha Sky",
  "Swastha Future - Marketplace",
  "Swastha Future HMS",
  <BiHealth key="bihealth" />,
  "Nursing HomeCare",
  "Video Consultation",
  "Health Tests & Online Medical",
  "Pharmacy",
  "Emergency Service",
  <GiFlowerStar key="flowerstar" />,
  "Lab Tests",
  "Insurance",
  "Others",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay for each span
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Timeline = () => {
  return (
    <div
      style={{ padding: "10px", marginTop: "80px" }}
      className="service-container py-10"
    >
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
            style={{
              maxWidth: "140px",
              margin: "2rem 0",
            }}
            src={OurServiceSvg}
            alt=""
          />
        </PopupCard>
      </div>
      <div
        style={{ margin: "0 auto", marginBottom: "2rem" }}
        className="services-main"
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "space-around",
            padding: "10px",
            margin: "0 auto",
          }}
          className="service-top"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "550px",
            }}
            className="service-top-text"
          >
            <Reveal>
              {" "}
              <span>Our Journey</span>
            </Reveal>{" "}
            <Reveal>
              <h2
                style={{
                  fontFamily: "var(--Heading-Font)",
                  fontSize: "1.8rem",
                }}
              >
                Unlock Better HealthCare
              </h2>
            </Reveal>
            <Reveal>
              <p>
                {" "}
                From the heart of India, a promise of care—empowering every
                home, every hospital, and every healing touch. Bridging
                tradition with technology, we bring the warmth of Indian
                healthcare values into the digital era, making healthcare
                seamless, accessible, and truly compassionate for every
                Bharatiya.
              </p>
            </Reveal>
          </div>

          <PopupCard>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div
                style={{
                  margin: "0 auto",
                  width: "250px",
                  height: "320px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "5px",
                }}
                className="service-top-img"
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={BreathGif}
                  alt=""
                />
              </div>
            </motion.div>
          </PopupCard>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="service-bottom"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.50rem",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          {services.map((service, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              style={{
                fontFamily: "var(--Heading-Font)",
                backgroundColor: "#8B93FE",
                color: "#FBFBFB",
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                padding: "0 0.5rem",
              }}
            >
              {service}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <HorizontalScrollTimeline />
    </div>
  );
};

const HorizontalScrollTimeline = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <div className="service-container">
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
            style={{
              maxWidth: "140px",
              marginBottom: "-6rem",
              marginTop: "2rem",
            }}
            src={QuickAccessSvg}
            alt=""
          />
        </PopupCard>
      </div>
      <section ref={targetRef} className="service-container relative h-[400vh]">
        <div className="service-container-section sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="web-container-track flex gap-8 px-10"
          >
            {servicesData.map((event) => (
              <TimelineCard event={event} key={event.id} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const TimelineCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="services-card group relative h-[440px] w-[1000px] "
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "340px",
        overflow: "hidden",
        padding: "10px",
        border: "2px solid #8B94FB",
        minHeight: "430px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <PopupCard>
        <div
          style={{
            width: "100%",
            height: "180px",
            overflow: "hidden",
          }}
          className="web-image"
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={event.image}
            alt={event.title}
          />
        </div>
      </PopupCard>

      <Reveal>
        <h2
          style={{
            fontFamily: "var(--Heading-Font)",
            fontSize: "1.6rem",
            color: "#8B93FE",
            margin: "1rem 0",
          }}
        >
          {event.title}
        </h2>
      </Reveal>
      <Reveal>
        <p style={{ marginBottom: "1.5rem" }}>{event.description}</p>
      </Reveal>

      <Link style={{ color: "#4b4d40" }} to={event.cardlink}>
        <Button
          title={event.buttonText}
          rightIcon={
            <BsArrowRight
              style={{
                backgroundColor: "#B4FEA2",
                padding: "5px",
                borderRadius: "50%",
                fontSize: "1.5rem",
              }}
            />
          }
          containerClass="flex gap-4 items-center cursor-pointer "
        />
      </Link>
    </motion.div>
  );
};
const Services = () => {
  const [activeTab, setActiveTab] = useState("HMS");
  const tabRefs = useRef({ HMS: null, Marketplace: null });
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[activeTab];
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div>
      <div className="timeline">
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
            <img style={{ maxWidth: "140px" }} src={OurServiceSvg} alt="" />
          </PopupCard>
        </div>
        <Timeline />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          marginTop: "-4rem",
        }}
        className="tab-img"
      >
        <PopupCard>
          <img
            style={{
              width: "120px",
            }}
            src={TabsImg}
            alt=""
          />
        </PopupCard>
      </div>
      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          position: "relative",
        }}
        className="tab-navigation"
      >
        {["HMS", "Marketplace"].map((tab) => (
          <button
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "3rem",
              cursor: "pointer",
              position: "relative",
              minWidth: "100px",
            }}
            key={tab}
            className={` ${
              activeTab === tab ? "text-[#8B93FE] " : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "HMS" ? (
              <GiDoctorFace className="mr-2" />
            ) : (
              <SiCoinmarketcap className="mr-2" />
            )}
            {tab}
            {/* Active Underline Animation */}
            {activeTab === tab && (
              <motion.div
                layoutId="active-tab"
                className="absolute bottom-0 top-10 left-0 w-full h-[2px] bg-[#8B93FE] rounded"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full"
        >
          {activeTab === "HMS" ? <HMS /> : <Marketplace />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Services;
