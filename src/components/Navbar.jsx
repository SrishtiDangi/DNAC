import { useState, useEffect } from "react";

import {
  FaHome,
  FaChartBar,
  FaServer,
  FaNetworkWired,
  FaBox,
  FaPhone,
  FaCloud,
  FaCheckCircle
} from "react-icons/fa";
function Navbar() {
  const links = [
    { id: "home", label: "Home" },
    { id: "overview", label: "CUCM Services" },
    { id: "architecture", label: "Architecture" },
    { id: "rack", label: "Rack Compare" },
    { id: "callflow", label: "Call Flow" },
    { id: "cms", label: "CMS + PBX" },
    { id: "advantages", label: "Advantages" },
  ];
  const [active, setActive] = useState("home");
  const icons = {
  home: <FaHome />,
  stats: <FaChartBar />,
  overview: <FaServer />,
  architecture: <FaNetworkWired />,
  rack: <FaBox />,
  callflow: <FaPhone />,
  cms: <FaCloud />,
  advantages: <FaCheckCircle />,
};
useEffect(() => {
  const sections = links.map((l) => document.getElementById(l.id));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((sec) => sec && observer.observe(sec));

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
      {/* LOGO */}
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: "18px",
          fontWeight: "800",
          letterSpacing: "0.5px",
        }}
      >
        CUCM Dashboard
      </h2>

      {/* LINKS */}
      <div
        style={{
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {links.map((item, i) => (
          <a
            key={i}
            href={`#${item.id}`}
            style={{
                color: active === item.id ? "white" : "#cbd5e1",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "600",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "0.3s",
                background: active === item.id ? "#1f2937" : "transparent",
                display: "flex",
                alignItems: "center",
                gap: "6px",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#1f2937";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#cbd5e1";
            }}
          >
            <>
            {icons[item.id]}
            {item.label}
            </>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;