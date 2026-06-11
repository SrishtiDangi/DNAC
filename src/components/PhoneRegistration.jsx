import Reveal from "./Reveal";
import {
  FaPhone,
  FaNetworkWired,
  FaFileDownload,
  FaServer,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";

function PhoneRegistration() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/phoneRegistration")
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.log(err));
  }, []);

  const iconMap = {
    phone: <FaPhone />,
    network: <FaNetworkWired />,
    download: <FaFileDownload />,
    server: <FaServer />,
    database: <FaDatabase />,
    check: <FaCheckCircle />,
  };

  return (
    <Reveal>
      <section style={{ padding: "60px 0" }} id="phone-registration">
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
            }}
          >
            IP Phone Registration Flow
          </h2>
        </div>

        {/* FLOW */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="regCard"
                style={{
                  width: "140px",
                  minHeight: "140px",
                  background: `linear-gradient(135deg, ${step.color}, #fff)`,
                  border: `2px solid ${step.border}`,
                  borderRadius: "18px",
                  padding: "16px",
                  textAlign: "center",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    color: "#2C3E50",
                    marginBottom: "10px",
                  }}
                >
                  {iconMap[step.icon]}
                </div>

                <h4
                  style={{
                    margin: "0 0 8px",
                    color: "#2C3E50",
                    fontSize: "15px",
                    fontWeight: "800",
                  }}
                >
                  {step.title}
                </h4>

                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "#555",
                    lineHeight: "1.4",
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* 🔥 ANIMATED ARROW */}
              {index !== steps.length - 1 && (
                <div
                  style={{
                    fontSize: "28px",
                    margin: "0 8px",
                    color: "#34495E",
                    fontWeight: "800",
                    display: "inline-block",
                    animation: "flowArrow 1.2s infinite ease-in-out",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* HOVER + ARROW ANIMATION CSS */}
        <style>
          {`
            .regCard:hover {
              transform: translateY(-10px) scale(1.05);
              box-shadow: 0 18px 35px rgba(0,0,0,0.18);
            }

            @keyframes flowArrow {
              0% {
                transform: translateX(0px);
                opacity: 0.3;
              }

              50% {
                transform: translateX(10px);
                opacity: 1;
              }

              100% {
                transform: translateX(18px);
                opacity: 0.2;
              }
            }
          `}
        </style>
      </section>
    </Reveal>
  );
}

export default PhoneRegistration;