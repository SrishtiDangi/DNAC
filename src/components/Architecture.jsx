import Reveal from "./Reveal";
import { FaNetworkWired, FaServer } from "react-icons/fa";
import { useEffect, useState } from "react";
function Architecture() {
  const [architecture, setArchitecture] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/architecture")
    .then((res) => res.json())
    .then((data) => setArchitecture(data))
    .catch((err) => console.log(err));
}, []);

if (!architecture) return null;

  return (
    <section
    id="architecture"
    style={{
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
        }}
>

      {/* HEADER REVEAL */}
      <Reveal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "40px",
            color: "#2C3E50",
          }}
        >
          <div
            style={{
              background: "#EAF2F8",
              padding: "10px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaNetworkWired size={22} />
          </div>

          <h2 style={{ fontSize: "24px", fontWeight: "900" }}>
            Enterprise Cluster Architecture
          </h2>
        </div>
      </Reveal>

      {/* WRAPPER */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* PUBLISHER */}
        <Reveal>
          <div
            style={{
              width: "280px",
              padding: "18px",
              borderRadius: "16px",
              textAlign: "center",
              background: "linear-gradient(135deg, #FADBD8, #fff)",
              border: "2px solid #C0392B",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div
            style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#2ECC71",
                margin: "0 auto 10px",
                boxShadow: "0 0 10px #2ECC71",
  }}
/>
            <FaServer size={40} color="#C0392B" />

            <h3 style={{ margin: "10px 0 5px", fontSize: "18px", fontWeight: "800" }}>
              {architecture.publisher.title}
            </h3>

            <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
              {architecture.publisher.desc}
            </p>
            <div
            style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#2ECC71",
                margin: "10px auto 0",
                boxShadow: "0 0 10px #2ECC71",
                }}
/>
          </div>
        </Reveal>

        <div className="flowLine">↓</div>

        {/* INFRA */}
        <Reveal>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: "10px 0",
            }}
          >
            {architecture.infra.map((t, i) => (
              <div
                key={i}
                style={{
                  width: "150px",
                  padding: "12px",
                  borderRadius: "14px",
                  textAlign: "center",
                  background: "#FDEBD0",
                  border: "2px solid #B9770E",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#7E5109",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flowLine">↓</div>

        {/* SUBSCRIBERS */}
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 260px)",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {architecture.subscribers.map((s, i) => (
              <div
                key={i}
                style={{
                  width: "260px",
                  padding: "14px",
                  borderRadius: "14px",
                  textAlign: "center",
                  background: `linear-gradient(135deg, ${s.color}, #fff)`,
                  border: `2px solid ${s.border}`,
                  boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    }}
                >
                    <FaServer color={s.border} />
                    <div
                    style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#2ECC71",
                        boxShadow: "0 0 8px #2ECC71",
                    }}
                    />
                </div>
                <h4 style={{ margin: "5px 0", fontSize: "16px", fontWeight: "800", color: "#2C3E50" }}>
                  {s.title}
                </h4>

                <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          .flowLine {
            font-size: 22px;
            color: #2C3E50;
            margin: 12px 0;
            animation: move 1.2s infinite ease-in-out;
          }

          @keyframes move {
            0% { transform: translateY(-4px); opacity: 0.3; }
            50% { transform: translateY(6px); opacity: 1; }
            100% { transform: translateY(12px); opacity: 0.3; }
          }
        `}
      </style>

    </section>
  );
}

export default Architecture;