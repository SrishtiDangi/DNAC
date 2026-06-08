import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  FaServer,
  FaPhoneAlt,
  FaCloud,
  FaGlobe,
} from "react-icons/fa";

function Ecosystem() {
  const cardStyle = (bg) => ({
    background: bg,
    padding: "16px",
    borderRadius: "16px",
    textAlign: "center",
    minWidth: "140px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    fontWeight: "700",
    color: "#2C3E50",
  });

  return (
    <section 
      style={{ padding: "60px 0" }}
      id="ecosystem"
    >

      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#2C3E50",
              marginBottom: "10px",
            }}
          >
            CUCM Ecosystem
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              fontSize: "14px",
              margin: 0,
            }}
          >
            How CUCM integrates enterprise communication services
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* JABBER */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={cardStyle("#E8F8F5")}
          >
            <FaCloud size={28} />
            <div style={{ marginTop: "8px" }}>
              Cisco Jabber
            </div>
          </motion.div>

          {/* PHONE - CUCM - UNITY */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={cardStyle("#D6EAF8")}
            >
              <FaPhoneAlt size={28} />
              <div style={{ marginTop: "8px" }}>
                IP Phones
              </div>
            </motion.div>

            {/* CENTER CUCM */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              style={{
                background:
                  "linear-gradient(135deg,#F8C8DC,#E8DFF5)",
                padding: "24px",
                borderRadius: "20px",
                minWidth: "180px",
                textAlign: "center",
                border: "2px solid #E91E63",
                position: "relative",
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "120px",
                  background:
                    "rgba(248,200,220,0.45)",
                  filter: "blur(50px)",
                  borderRadius: "50%",
                  top: "-10px",
                  left: "25px",
                  zIndex: -1,
                }}
              />

              <FaServer size={34} />

              <h3
                style={{
                  margin: "10px 0 5px",
                  fontSize: "18px",
                }}
              >
                CUCM
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                Central Call Control
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={cardStyle("#FDEBD0")}
            >
              <FaCloud size={28} />
              <div style={{ marginTop: "8px" }}>
                Unity Connection
              </div>
            </motion.div>
          </div>

          {/* EXPRESSWAY + CUBE */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={cardStyle("#D5F5E3")}
            >
              <FaGlobe size={28} />
              <div style={{ marginTop: "8px" }}>
                Expressway
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={cardStyle("#EDE7F6")}
            >
              <FaServer size={28} />
              <div style={{ marginTop: "8px" }}>
                Cisco CUBE
              </div>
            </motion.div>
          </div>

          {/* PSTN */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={cardStyle("#F9EBEA")}
          >
            <FaGlobe size={28} />
            <div style={{ marginTop: "8px" }}>
              PSTN
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

export default Ecosystem;