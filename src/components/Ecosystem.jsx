import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  FaServer,
  FaPhoneAlt,
  FaCloud,
  FaGlobe,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function EcosystemCard({ bg, icon, title }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: bg,
        padding: hover ? "18px" : "16px",
        borderRadius: "16px",
        textAlign: "center",
        minWidth: "160px",
        boxShadow: hover
          ? "0 15px 30px rgba(0,0,0,0.15)"
          : "0 10px 20px rgba(0,0,0,0.08)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.25s ease",
        fontWeight: "700",
        color: "#2C3E50",
        cursor: "pointer",
      }}
    >
      {icon}
      <div style={{ marginTop: "8px" }}>{title}</div>
    </div>
  );
}

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

  return (
    <section id="ecosystem" style={{ padding: "60px 0" }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
          <EcosystemCard
            bg={ecosystem.nodes[0].color}
            icon={iconMap[ecosystem.nodes[0].icon]}
            title={ecosystem.nodes[0].title}
          />

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
            <EcosystemCard
              bg={ecosystem.nodes[1].color}
              icon={iconMap[ecosystem.nodes[1].icon]}
              title={ecosystem.nodes[1].title}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background:
                  "linear-gradient(135deg,#F8C8DC,#E8DFF5)",
                padding: "24px",
                borderRadius: "20px",
                minWidth: "180px",
                textAlign: "center",
                border: "2px solid #E91E63",
                boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
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

            <EcosystemCard
              bg={ecosystem.nodes[3].color}
              icon={iconMap[ecosystem.nodes[3].icon]}
              title={ecosystem.nodes[3].title}
            />
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
            <EcosystemCard
              bg={ecosystem.nodes[4].color}
              icon={iconMap[ecosystem.nodes[4].icon]}
              title={ecosystem.nodes[4].title}
            />

            <EcosystemCard
              bg={ecosystem.nodes[5].color}
              icon={iconMap[ecosystem.nodes[5].icon]}
              title={ecosystem.nodes[5].title}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Ecosystem;