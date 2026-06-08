import Reveal from "./Reveal";

function Advantages() {
  const items = [
    {
      title: "High Availability",
      color: "#D6EAF8",
      border: "#85C1E9",
      desc: "System remains operational even during failures",
    },
    {
      title: "Scalability",
      color: "#E8F8F5",
      border: "#76D7C4",
      desc: "Easily expand users and infrastructure",
    },
    {
      title: "Redundancy",
      color: "#FDEBD0",
      border: "#F5CBA7",
      desc: "Backup systems ensure zero downtime",
    },
  ];

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
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "26px",
            fontWeight: "900",
            color: "#2C3E50",
          }}
        >
          Key Business Benefits
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          {items.map((item, i) => (
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
                Object.assign(e.currentTarget.style, baseStyle, {
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