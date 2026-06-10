import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaExchangeAlt,
  FaUsers,
  FaMusic,
  FaBullhorn,
  FaRandom,
} from "react-icons/fa";

function MediaResources() {
  const [data, setData] = useState(null);

  const iconMap = {
    exchange: <FaExchangeAlt size={30} />,
    users: <FaUsers size={30} />,
    music: <FaMusic size={30} />,
    bullhorn: <FaBullhorn size={30} />,
    random: <FaRandom size={30} />,
  };

  // ✅ FETCH BACKEND DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/mediaResources")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Media Resources...
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
      <section id="media-resources" style={{ padding: "60px 0" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
              marginBottom: "10px",
            }}
          >
            {data.title}
          </h2>

          <p style={{ color: "#5D6D7E", fontSize: "14px" }}>
            {data.subtitle}
          </p>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "22px",
          }}
        >
          {data.items.map((item, index) => (
            <div
              key={index}
              style={{
                background: item.color,
                borderRadius: "18px",
                padding: "22px",
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
              <div style={{ color: "#2C3E50", marginBottom: "15px" }}>
                {iconMap[item.icon]}
              </div>

              <h3
                style={{
                  color: "#2C3E50",
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default MediaResources;