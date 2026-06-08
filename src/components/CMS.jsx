import { FaHeadset, FaMicrophone, FaChartBar } from "react-icons/fa";

function CMS() {
  const features = [
    {
      icon: <FaMicrophone size={38} />,
      title: "Call Recording",
      desc: "Records customer interactions.",
      bg: "#FDEBD0",
      border: "#B9770E",
      color: "#7E5109",
    },
    {
      icon: <FaHeadset size={38} />,
      title: "Monitoring",
      desc: "Real-time supervision and support.",
      bg: "#D6EAF8",
      border: "#2E86C1",
      color: "#1B4F72",
    },
    {
      icon: <FaChartBar size={38} />,
      title: "Reporting",
      desc: "Detailed analytics and reports.",
      bg: "#E8F4F8",
      border: "#7D3C98",
      color: "#4A235A",
    },
  ];

  const base = {
    transform: "translateY(0) scale(1)",
    boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
  };

  const hover = {
    transform: "translateY(-10px) scale(1.05)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
  };

  return (
    <section style={{ padding: "60px 0" }} id="cms">

      {/* TITLE */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#2C3E50",
          fontSize: "26px",
          fontWeight: "900",
        }}
      >
        CMS Integration
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
        }}
      >

        {/* TOP 2 CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 260px)",
            gap: "25px",
          }}
        >
          {features.slice(0, 2).map((item, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(135deg, ${item.bg}, #ffffff)`,
                border: `2px solid ${item.border}`,
                borderRadius: "16px",
                padding: "22px",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s ease",
                ...base,
              }}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, hover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, base)
              }
            >
              <div style={{ color: item.color, marginBottom: "10px" }}>
                {item.icon}
              </div>

              <h3
                style={{
                  marginBottom: "6px",
                  color: item.color,
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>

              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM CARD */}
        <div
          style={{
            background: `linear-gradient(135deg, ${features[2].bg}, #ffffff)`,
            border: `2px solid ${features[2].border}`,
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            width: "260px",
            cursor: "pointer",
            transition: "0.3s ease",
            ...base,
          }}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, hover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, base)
          }
        >
          <div style={{ color: features[2].color, marginBottom: "10px" }}>
            {features[2].icon}
          </div>

          <h3
            style={{
              marginBottom: "6px",
              color: features[2].color,
              fontSize: "18px",
              fontWeight: "800",
            }}
          >
            {features[2].title}
          </h3>

          <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
            {features[2].desc}
          </p>
        </div>

      </div>
    </section>
  );
}

export default CMS;