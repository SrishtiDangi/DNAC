import Reveal from "./Reveal";
import {
  FaNetworkWired,
  FaServer,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

function GatewayPSTN() {
  const flow = [
    {
      title: "CUCM",
      desc: "Central Call Control",
      bg: "#F8C8DC",
      border: "#E91E63",
      icon: <FaServer size={28} />,
    },
    {
      title: "SIP Trunk",
      desc: "VoIP Signaling Connection",
      bg: "#D6EAF8",
      border: "#3498DB",
      icon: <FaNetworkWired size={28} />,
    },
    {
      title: "Cisco CUBE",
      desc: "Session Border Controller",
      bg: "#E8F8F5",
      border: "#2ECC71",
      icon: <FaPhoneAlt size={28} />,
    },
    {
      title: "PSTN",
      desc: "Public Telephone Network",
      bg: "#FDEBD0",
      border: "#F39C12",
      icon: <FaGlobe size={28} />,
    },
  ];

  return (
    <section style={{ padding: "60px 0" }} id="gateway-pstn">
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
            color: "#2C3E50",
          }}
        >
          <FaNetworkWired size={28} />
          <h2 style={{ fontSize: "26px", fontWeight: "800", margin: 0 }}>
            Gateway & PSTN Connectivity
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {flow.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              
              {/* CARD */}
              <div
                className="gatewayCard"
                style={{
                  background: item.bg,
                  border: `2px solid ${item.border}`,
                }}
              >
                <div style={{ color: "#2C3E50" }}>{item.icon}</div>

                <h3 className="gatewayTitle">{item.title}</h3>

                <p className="gatewayDesc">{item.desc}</p>
              </div>

              {/* ARROW */}
              {index !== flow.length - 1 && (
                <div className="gatewayArrow">→</div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <style>
        {`
          .gatewayCard {
            border-radius: 18px;
            padding: 18px;
            width: 190px;
            text-align: center;
            box-shadow: 0 8px 18px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .gatewayCard:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 18px 35px rgba(0,0,0,0.18);
          }

          .gatewayTitle {
            margin: 10px 0 6px;
            font-size: 17px;
            color: #2C3E50;
          }

          .gatewayDesc {
            margin: 0;
            font-size: 13px;
            color: #555;
          }

          .gatewayArrow {
            font-size: 28px;
            margin: 0 12px;
            color: #2C3E50;
            animation: gatewayFlow 1.4s infinite ease-in-out;
          }

          @keyframes gatewayFlow {
            0% {
              transform: translateX(-5px);
              opacity: 0.4;
            }
            50% {
              transform: translateX(5px);
              opacity: 1;
            }
            100% {
              transform: translateX(10px);
              opacity: 0.4;
            }
          }
        `}
      </style>
    </section>
  );
}

export default GatewayPSTN;