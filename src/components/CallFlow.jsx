import { FaPhoneAlt } from "react-icons/fa";

function CallFlow() {
  const flow = [
    { name: "Telecom", bg: "#EAF2F8", size: "15px" },
    { name: "Voice Gateway", bg: "#FDEBD0", size: "15px" },
    { name: "CUCM", bg: "#D6EAF8", size: "16px", weight: "800" },
    { name: "IP Endpoints", bg: "#E8F4F8", size: "14px" },
    { name: "CMS", bg: "#EDE7F6", size: "14px" },
  ];

  return (
    <section style={{ padding: "50px 0" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "14px",
          marginBottom: "40px",
          color: "#2C3E50",
        }}
      >
        <FaPhoneAlt size={28} />

        <h2
          style={{
            fontSize: "26px",
            fontWeight: "800",
            letterSpacing: "0.5px",
            margin: 0,
          }}
        >
          Enterprise Call Routing Flow
        </h2>
      </div>

      {/* FLOW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {flow.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* NODE */}
            <div
              style={{
                background: item.bg,
                border: "2px solid rgba(0,0,0,0.08)",
                padding: "16px 24px",
                borderRadius: "16px",
                minWidth: "180px",
                textAlign: "center",
                color: "#2C3E50",
                fontSize: item.size,
                fontWeight: item.weight || "600",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                transition: "0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.03)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";
              }}
            >
              {item.name}
            </div>

            {/* ARROW */}
            {index !== flow.length - 1 && (
              <div className="flowArrow">➜</div>
            )}
          </div>
        ))}
      </div>

      {/* CSS */}
      <style>
        {`
          .flowArrow {
            font-size: 24px;
            color: #2C3E50;
            font-weight: bold;
            animation: slideArrow 1.4s infinite;
          }

          @keyframes slideArrow {
            0% {
              transform: translateX(-6px);
              opacity: 0.3;
            }

            50% {
              transform: translateX(6px);
              opacity: 1;
            }

            100% {
              transform: translateX(12px);
              opacity: 0.3;
            }
          }
        `}
      </style>
    </section>
  );
}

export default CallFlow;