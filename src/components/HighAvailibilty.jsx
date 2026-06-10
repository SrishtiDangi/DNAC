import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaSync,
  FaGlobe,
} from "react-icons/fa";

function HighAvailability() {
  const [data, setData] = useState(null);

  const iconMap = {
    server: <FaServer size={28} />,
    database: <FaDatabase size={28} />,
    shield: <FaShieldAlt size={28} />,
    sync: <FaSync size={28} />,
    globe: <FaGlobe size={28} />,
  };

  // ✅ FETCH BACKEND DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/highAvailability")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading High Availability...
      </section>
    );
  }

  const normal = (borderColor) => ({
    transform: "translateY(0) scale(1)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    border: `2px solid ${borderColor}`,
  });

  const hover = (borderColor) => ({
    transform: "translateY(-10px) scale(1.04)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
    border: `2px solid ${borderColor}`,
  });

  const active = (borderColor) => ({
    transform: "translateY(-2px) scale(0.98)",
    boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
    border: `2px solid ${borderColor}`,
  });

  return (
    <Reveal>
      <section id="high-availability" style={{ padding: "60px 0" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
            }}
          >
            {data.title}
          </h2>

          <p style={{ fontSize: "14px", color: "#5D6D7E" }}>
            {data.subtitle}
          </p>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {data.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: item.color,
                borderRadius: "20px",
                padding: "25px",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.25s ease",
                ...normal(item.border),
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hover(item.border));
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, normal(item.border));
              }}
              onMouseDown={(e) => {
                Object.assign(e.currentTarget.style, active(item.border));
              }}
              onMouseUp={(e) => {
                Object.assign(e.currentTarget.style, hover(item.border));
              }}
            >
              <div style={{ marginBottom: "12px", color: "#2C3E50" }}>
                {iconMap[item.icon]}
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "800",
                  marginBottom: "10px",
                  color: "#2C3E50",
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default HighAvailability;