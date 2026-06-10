import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  FaServer,
  FaPhoneAlt,
  FaCloud,
  FaGlobe,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function Ecosystem() {
  const [ecosystem, setEcosystem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/ecosystem")
      .then((res) => res.json())
      .then((data) => setEcosystem(data))
      .catch((err) => console.log(err));
  }, []);

  if (!ecosystem) return null;

  const iconMap = {
    phone: <FaPhoneAlt size={28} />,
    server: <FaServer size={28} />,
    cloud: <FaCloud size={28} />,
    globe: <FaGlobe size={28} />,
  };

  const cardStyle = (bg) => ({
    background: bg,
    padding: "16px",
    borderRadius: "16px",
    textAlign: "center",
    minWidth: "160px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    fontWeight: "700",
    color: "#2C3E50",
  });

  return (
    <section
      id="ecosystem"
      style={{ padding: "60px 0" }}
    >
      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#2C3E50",
              marginBottom: "10px",
            }}
          >
            {ecosystem.title}
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {ecosystem.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* TOP */}
          <div style={cardStyle(ecosystem.nodes[0].color)}>
            {iconMap[ecosystem.nodes[0].icon]}
            <div style={{ marginTop: "8px" }}>
              {ecosystem.nodes[0].title}
            </div>
          </div>

          {/* MIDDLE */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={cardStyle(ecosystem.nodes[1].color)}>
              {iconMap[ecosystem.nodes[1].icon]}
              <div style={{ marginTop: "8px" }}>
                {ecosystem.nodes[1].title}
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              style={{
                background:
                  "linear-gradient(135deg,#F8C8DC,#E8DFF5)",
                padding: "24px",
                borderRadius: "20px",
                minWidth: "180px",
                textAlign: "center",
                border: "2px solid #E91E63",
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.12)",
              }}
            >
              {iconMap[ecosystem.nodes[2].icon]}

              <h3
                style={{
                  margin: "10px 0 5px",
                  fontSize: "18px",
                }}
              >
                {ecosystem.nodes[2].title}
              </h3>
            </motion.div>

            <div style={cardStyle(ecosystem.nodes[3].color)}>
              {iconMap[ecosystem.nodes[3].icon]}
              <div style={{ marginTop: "8px" }}>
                {ecosystem.nodes[3].title}
              </div>
            </div>
          </div>

          {/* LOWER */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={cardStyle(ecosystem.nodes[4].color)}>
              {iconMap[ecosystem.nodes[4].icon]}
              <div style={{ marginTop: "8px" }}>
                {ecosystem.nodes[4].title}
              </div>
            </div>

            <div style={cardStyle(ecosystem.nodes[5].color)}>
              {iconMap[ecosystem.nodes[5].icon]}
              <div style={{ marginTop: "8px" }}>
                {ecosystem.nodes[5].title}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Ecosystem;