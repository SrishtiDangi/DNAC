import { FaPhoneAlt } from "react-icons/fa";

function CallFlow() {
  const flow = [
    { name: "Telecom", bg: "#EAF2F8", size: "15px" },
    { name: "Voice Gateway", bg: "#FDEBD0", size: "15px" },
    { name: "CUCM", bg: "#D6EAF8", size: "16px", weight: "800" },
    { name: "PBX / IP Phone", bg: "#E8F4F8", size: "14px" },
    { name: "CMS", bg: "#EDE7F6", size: "14px" },
  ];

  return (
    <section style={{ padding: "50px 0" }}>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "35px",
          color: "#2C3E50",
        }}
      >
        <FaPhoneAlt size={28} />
        <h2 style={{ fontSize: "26px", fontWeight: "800", letterSpacing: "0.5px" }}>
          Enterprise Call Routing Flow
        </h2>
      </div>

      {/* FLOW */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {flow.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* NODE */}
            <div
              style={{
                background: item.bg,
                border: "2px solid rgba(0,0,0,0.08)",
                padding: "16px 26px",
                borderRadius: "16px",
                minWidth: "240px",
                textAlign: "center",
                color: "#2C3E50",
                fontSize: item.size,
                fontWeight: item.weight || "600",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                transition: "0.3s ease",
              }}
            >
              {item.name}
            </div>

            {/* ARROW */}
            {index !== flow.length - 1 && (
              <div className="flowArrow">↓</div>
            )}
          </div>
        ))}
      </div>

      {/* ARROW ANIMATION */}
      <style>
        {`
          .flowArrow {
            font-size: 20px;
            color: #2C3E50;
            margin: 6px 0;
            animation: flowDown 1.3s infinite ease-in-out;
          }

          @keyframes flowDown {
            0% { transform: translateY(-6px); opacity: 0.2; }
            50% { transform: translateY(4px); opacity: 1; }
            100% { transform: translateY(10px); opacity: 0.2; }
          }
        `}
      </style>

    </section>
  );
}

export default CallFlow;