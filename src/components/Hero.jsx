import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaHome,
  FaNetworkWired,
  FaBox,
  FaPhone,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  const [heroData, setHeroData] = useState(null);

  const iconMap = {
    home: <FaHome />,
    server: <FaServer />,
    network: <FaNetworkWired />,
    box: <FaBox />,
    phone: <FaPhone />,
    cloud: <FaCloud />,
    check: <FaCheckCircle />,
  };

  // ✅ FETCH HERO DATA FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/api/hero")
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!heroData) return null;

  return (
    <section
      id="home"
      style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 8%",
        background: heroData.background,
        borderRadius: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.4)",
          filter: "blur(80px)",
          top: "10%",
          left: "10%",
          borderRadius: "50%",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={{ zIndex: 2 }}
      >
        {/* ICON */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "18px",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            {iconMap[heroData.icon]}
          </div>
        </motion.div>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "3.2rem",
            lineHeight: "1.2",
            fontWeight: "800",
            marginBottom: "18px",
            color: "#2C3E50",
          }}
        >
          {heroData.title}
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.7",
            color: "#5D6D7E",
          }}
        >
          {heroData.description}
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;