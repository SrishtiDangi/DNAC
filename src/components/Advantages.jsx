import { useState, useEffect } from "react";
import Reveal from "./Reveal";

function Advantages() {
  const [data, setData] = useState(null);

  // ✅ FETCH BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/api/advantages")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Advantages...
      </section>
    );
  }

  const baseStyle = {
    width: "240px",
    padding: "24px 18px",
    borderRadius: "16px",
    textAlign: "center",
    transition: "0.25s ease",
    cursor: "pointer",
    transform: "translateY(0)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  };

  const hoverStyle = {
    transform: "translateY(-8px)",
    boxShadow: "0 18px 35px rgba(0,0,0,0.15)",
  };

  return (
    <section id="advantages" style={{ padding: "60px 0" }}>
      <Reveal>

        {/* TITLE */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "26px",
            fontWeight: "900",
            color: "#2C3E50",
          }}
        >
          {data.title}
        </h2>

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          {data.items.map((item, i) => (
            <div
              key={i}
              style={{
                ...baseStyle,
                background: `linear-gradient(135deg, ${item.color}, #ffffff)`,
                border: `2px solid ${item.border}`,
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, {
                  ...baseStyle,
                  background: `linear-gradient(135deg, ${item.color}, #ffffff)`,
                  border: `2px solid ${item.border}`,
                });
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "800" }}>
                {item.title}
              </h3>

              <p style={{ fontSize: "13px", color: "#5D6D7E" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </Reveal>
    </section>
  );
}

export default Advantages;