import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaCloud } from "react-icons/fa";

function PBXComparison() {
  const [data, setData] = useState(null);

  const iconMap = {
    phone: <FaPhone size={42} />,
    cloud: <FaCloud size={42} />,
  };

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/api/pbxComparison")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  return (
    <section style={{ padding: "60px 0" }} id="pbx-comparison">

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
          color: "#34495E",
        }}
      >
        <h2 style={{ fontSize: "26px", fontWeight: "900" }}>
          {data.title}
        </h2>
      </div>

      {/* WRAPPER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          flexWrap: "wrap",
        }}
      >

        {/* LEFT BOX */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "350px",
            background: data.left.bg,
            borderRadius: "18px",
            padding: "28px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.10)",
            border: `2px solid ${data.left.border}`,
            textAlign: "center",
          }}
        >
          {iconMap[data.left.icon]}

          <h3
            style={{
              margin: "14px 0 18px 0",
              color: data.left.color,
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            {data.left.title}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {data.left.items.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  padding: "11px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  color: "#5D4037",
                  border: `1px solid ${data.left.border}`,
                  fontWeight: "500",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT BOX */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "350px",
            background: data.right.bg,
            borderRadius: "18px",
            padding: "28px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.10)",
            border: `2px solid ${data.right.border}`,
            textAlign: "center",
          }}
        >
          {iconMap[data.right.icon]}

          <h3
            style={{
              margin: "14px 0 18px 0",
              color: data.right.color,
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            {data.right.title}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {data.right.items.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  padding: "11px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  color: "#1B4F72",
                  border: `1px solid ${data.right.border}`,
                  fontWeight: "500",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default PBXComparison;