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
  const [navData, setNavData] = useState(null);
  const [active, setActive] = useState("home");

  const iconMap = {
    home: <FaHome />,
    server: <FaServer />,
    network: <FaNetworkWired />,
    box: <FaBox />,
    phone: <FaPhone />,
    cloud: <FaCloud />,
    check: <FaCheckCircle />,
  };

  // ✅ FETCH NAVBAR FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/api/navbar")
      .then((res) => res.json())
      .then((data) => setNavData(data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ SCROLL SPY (ACTIVE SECTION TRACK)
  useEffect(() => {
    if (!navData) return;

    const sections = navData.links
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
  }, [navData]);

  if (!navData) return null;

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
      {/* BRAND */}
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: "18px",
          fontWeight: "800",
        }}
      >
        {navData.brand}
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
        {navData.links.map((item) => (
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
            {iconMap[item.icon]}
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;