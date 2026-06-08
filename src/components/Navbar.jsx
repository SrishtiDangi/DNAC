import { useState, useEffect } from "react";
import {
  FaHome,
  FaServer,
  FaNetworkWired,
  FaBox,
  FaPhone,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";

function Navbar() {
  const links = [
    { id: "home", label: "Home" },
    { id: "overview", label: "Overview" },
    { id: "ecosystem", label: "Ecosystem" },
    { id: "architecture", label: "Architecture" },
    { id: "gateway-pstn", label: "Gateway" },
    { id: "phone-registration", label: "Registration" },
    { id: "call-flow", label: "Call Flow" },
    { id: "dial-plan", label: "Dial Plan" },
    { id: "rack-overview", label: "Rack" },
    { id: "cms", label: "CMS + PBX" },
    { id: "protocols", label: "Protocols" },
    { id: "codecc", label: "Codec & QoS" },
    { id: "media-resources", label: "Media Resources" },
    { id: "security", label: "Security" },
    { id: "high-availability", label: "High Availability" },
    { id: "mobility", label: "Mobility" },
    { id: "class-of-service", label: "Class of Service" },
    { id: "troubleshooting", label: "Troubleshooting" },
    { id: "advantages", label: "Advantages" },
  ];

  const [active, setActive] = useState("home");

  const icons = {
    home: <FaHome />,
    overview: <FaServer />,
    architecture: <FaNetworkWired />,
    "rack-overview": <FaBox />,
    "call-flow": <FaPhone />,
    cms: <FaCloud />,
    advantages: <FaCheckCircle />,
    "media-resources": <FaServer />,
  };

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 8%",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(17,24,39,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: "18px",
          fontWeight: "800",
        }}
      >
        CUCM Dashboard
      </h2>

      <div
        style={{
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {links.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);

              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            style={{
              color: active === item.id ? "white" : "#cbd5e1",
              fontSize: "13px",
              fontWeight: "600",
              padding: "6px 10px",
              borderRadius: "8px",
              transition: "0.3s",
              background:
                active === item.id ? "#1f2937" : "transparent",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {icons[item.id]}
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;