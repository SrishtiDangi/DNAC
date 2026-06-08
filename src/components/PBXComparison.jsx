import { motion } from "framer-motion";
import { FaPhone, FaCloud } from "react-icons/fa";

function PBXComparison() {
  return (
    <section 
      style={{ padding: "60px 0" }}
      id="pbx-comparison"
    >

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
          PBX vs CUCM
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

        {/* PBX */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "350px",
            background: "#FDEBD0",
            borderRadius: "18px",
            padding: "28px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.10)",
            border: "2px solid #F5CBA7",
            textAlign: "center",
          }}
        >
          <FaPhone size={42} color="#B9770E" />

          <h3
            style={{
              margin: "14px 0 18px 0",
              color: "#7E5109",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Traditional PBX
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Hardware Based",
              "Limited Scalability",
              "Basic Availability",
              "Manual Expansion",
              "Higher Maintenance",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  padding: "11px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  color: "#5D4037",
                  border: "1px solid #F5CBA7",
                  fontWeight: "500",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CUCM */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "350px",
            background: "#D6EAF8",
            borderRadius: "18px",
            padding: "28px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.10)",
            border: "2px solid #85C1E9",
            textAlign: "center",
          }}
        >
          <FaCloud size={42} color="#1B4F72" />

          <h3
            style={{
              margin: "14px 0 18px 0",
              color: "#1B4F72",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            CUCM
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "IP Based Communication",
              "Highly Scalable",
              "Redundant Architecture",
              "Centralized Management",
              "Enterprise Ready",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  padding: "11px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  color: "#1B4F72",
                  border: "1px solid #85C1E9",
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