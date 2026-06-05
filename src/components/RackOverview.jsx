import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";

function RackComparison() {
  const rackA = ["Voice Gateway", "CMS", "2 PBX", "16 PRI Lines"];
  const rackB = ["Voice Gateway", "2 PBX", "16 PRI Lines"];

  const cardStyle = (bg, border) => ({
    width: "300px",
    background: `linear-gradient(135deg, ${bg}, #ffffff)`,
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
    border: `2px solid ${border}`,
    textAlign: "center",
  });

  const tagStyle = (border) => ({
    fontSize: "12px",
    padding: "6px 10px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.8)",
    border: `1px solid ${border}`,
  });

  return (
    <section style={{ padding: "50px 0" }}>

      {/* HEADER (UNIFIED STYLE) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "35px",
          color: "#34495E",
        }}
      >
        <FaServer size={28} />
        <h2 style={{ fontSize: "24px", fontWeight: "800" }}>
          Rack Comparison
        </h2>
      </div>

      {/* MAIN */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >

        {/* RACK A */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={cardStyle("#FDEBD0", "#F5CBA7")}
        >
          <FaServer size={38} color="#B9770E" />

          <h3 style={{ marginTop: "12px", color: "#7E5109" }}>
            Rack A{" "}
            <span
              style={{
                fontSize: "12px",
                background: "#F39C12",
                color: "#fff",
                padding: "3px 8px",
                borderRadius: "10px",
                marginLeft: "6px",
              }}
            >
              Primary
            </span>
          </h3>

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {rackA.map((item, i) => (
              <span key={i} style={tagStyle("#F5CBA7")}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* VS */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "18px",
            fontWeight: "800",
            padding: "12px 18px",
            borderRadius: "50%",
            background: "#f4f4f4",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          VS
        </motion.div>

        {/* RACK B */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={cardStyle("#D6EAF8", "#85C1E9")}
        >
          <FaServer size={38} color="#1F618D" />

          <h3 style={{ marginTop: "12px", color: "#1B4F72" }}>
            Rack B{" "}
            <span
              style={{
                fontSize: "12px",
                background: "#3498DB",
                color: "#fff",
                padding: "3px 8px",
                borderRadius: "10px",
                marginLeft: "6px",
              }}
            >
              Secondary
            </span>
          </h3>

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {rackB.map((item, i) => (
              <span key={i} style={tagStyle("#85C1E9")}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default RackComparison;