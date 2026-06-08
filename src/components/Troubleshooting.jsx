import Reveal from "./Reveal";
import { FaTools } from "react-icons/fa";

function Troubleshooting() {
  const issues = [
    ["Phone shows Configuring IP", "DHCP issue", "Check DHCP + Option 150"],
    ["Phone shows Registering", "CUCM unreachable", "Verify TFTP & CUCM"],
    ["One-way Audio", "RTP blocked", "Check firewall / QoS"],
    ["Call drops after 30s", "SIP NAT issue", "Inspect SIP ALG"],
    ["Fast Busy Outbound", "Route Pattern issue", "Verify Dial Plan"],
    ["DB Replication Broken", "Publisher sync failure", "Run dbreplication status"],
  ];

  const commands = [
    ["show status", "CUCM node health"],
    ["show version active", "Running CUCM version"],
    ["utils service list", "List all services"],
    ["utils dbreplication status", "Replication health"],
    ["file tail activelog", "View real-time logs"],
  ];

  return (
    <Reveal>
      <section style={{ padding: "60px 0" }} id="troubleshooting">

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "35px",
          }}
        >
          <FaTools size={24} color="#2C3E50" />
          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
            }}
          >
            Troubleshooting Quick Reference
          </h2>
        </div>

        {/* COMMON ISSUES */}
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              padding: "18px",
              margin: 0,
              background: "#F8C8DC",
              color: "#2C3E50",
            }}
          >
            Common Issues
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "#FCE4EC" }}>
                <th style={{ padding: "12px" }}>Symptom</th>
                <th style={{ padding: "12px" }}>Likely Cause</th>
                <th style={{ padding: "12px" }}>Fix</th>
              </tr>
            </thead>

            <tbody>
              {issues.map((row, i) => (
                <tr key={i}>
                  <td style={{ padding: "12px", borderTop: "1px solid #eee" }}>{row[0]}</td>
                  <td style={{ padding: "12px", borderTop: "1px solid #eee" }}>{row[1]}</td>
                  <td style={{ padding: "12px", borderTop: "1px solid #eee" }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CLI COMMANDS */}
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              padding: "18px",
              margin: 0,
              background: "#D6EAF8",
              color: "#2C3E50",
            }}
          >
            Useful CLI Commands
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "#EBF5FB" }}>
                <th style={{ padding: "12px" }}>Command</th>
                <th style={{ padding: "12px" }}>Purpose</th>
              </tr>
            </thead>

            <tbody>
              {commands.map((row, i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: "12px",
                      borderTop: "1px solid #eee",
                      fontFamily: "monospace",
                      fontWeight: "700",
                    }}
                  >
                    {row[0]}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      borderTop: "1px solid #eee",
                    }}
                  >
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </Reveal>
  );
}

export default Troubleshooting;