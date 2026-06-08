import Reveal from "./Reveal";
import {
  FaPhone,
  FaNetworkWired,
  FaFileDownload,
  FaServer,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

function PhoneRegistration() {
  const steps = [
    {
      title: "Phone",
      desc: "Power On",
      icon: <FaPhone />,
      color: "#D6EAF8",
      border: "#85C1E9",
    },
    {
      title: "DHCP",
      desc: "IP + Option 150",
      icon: <FaNetworkWired />,
      color: "#E8F8F5",
      border: "#76D7C4",
    },
    {
      title: "TFTP",
      desc: "Downloads Config XML",
      icon: <FaFileDownload />,
      color: "#FDEBD0",
      border: "#F5CBA7",
    },
    {
      title: "CUCM",
      desc: "Registration Request",
      icon: <FaServer />,
      color: "#FADBD8",
      border: "#E6B0AA",
    },
    {
      title: "DB Lookup",
      desc: "Verify Device",
      icon: <FaDatabase />,
      color: "#E8DAEF",
      border: "#D2B4DE",
    },
    {
      title: "ACK",
      desc: "Registration Accepted",
      icon: <FaCheckCircle />,
      color: "#D5F5E3",
      border: "#82E0AA",
    },
    {
      title: "Registered",
      desc: "Ready For Calls",
      icon: <FaCheckCircle />,
      color: "#D4EFDF",
      border: "#7DCEA0",
    },
  ];

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
                  {step.icon}
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

              {index !== steps.length - 1 && (
                <div
                  style={{
                    fontSize: "28px",
                    margin: "0 8px",
                    color: "#34495E",
                    fontWeight: "800",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ONLY HOVER CSS */}
        <style>
          {`
            .regCard:hover {
              transform: translateY(-10px) scale(1.05);
              box-shadow: 0 18px 35px rgba(0,0,0,0.18);
            }
          `}
        </style>
      </section>
    </Reveal>
  );
}

export default PhoneRegistration;