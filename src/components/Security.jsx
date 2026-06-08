import Reveal from "./Reveal";
import { FaLock, FaUserShield, FaKey, FaDatabase } from "react-icons/fa";

function Security() {
  const items = [
    {
      title: "TLS",
      desc: "Encrypts signaling traffic between endpoints and CUCM.",
      icon: <FaLock size={28} />,
      color: "#D6EAF8",
      border: "#3498DB",
    },
    {
      title: "SRTP",
      desc: "Encrypts voice media streams for secure calls.",
      icon: <FaUserShield size={28} />,
      color: "#E8F8F5",
      border: "#2ECC71",
    },
    {
      title: "CAPF",
      desc: "Certificate Authority Proxy Function for device certificates.",
      icon: <FaKey size={28} />,
      color: "#FDEBD0",
      border: "#F39C12",
    },
    {
      title: "LDAP",
      desc: "Directory integration for centralized authentication.",
      icon: <FaDatabase size={28} />,
      color: "#EDE7F6",
      border: "#8E44AD",
    },
  ];

  const normal = (borderColor) => ({
    transform: "translateY(0) scale(1)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    border: `2px solid ${borderColor}`,
  });

  const hover = (borderColor) => ({
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
    border: `2px solid ${borderColor}`,
  });

  const active = (borderColor) => ({
    transform: "translateY(-2px) scale(0.98)",
    boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
    border: `2px solid ${borderColor}`,
  });

  return (
    <section style={{ padding: "60px 0" }} id="security">

      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#2C3E50",
            }}
          >
            Security Features
          </h2>
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {items.map((item, i) => (
          <Reveal key={i}>
            <div
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
              <div style={{ color: "#2C3E50" }}>{item.icon}</div>

              <h3
                style={{
                  color: "#2C3E50",
                  marginTop: "12px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  fontSize: "14px",
                }}
              >
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Security;