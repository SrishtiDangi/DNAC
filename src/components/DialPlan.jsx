import Reveal from "./Reveal";
import { FaRoute, FaPhoneAlt, FaSearch, FaProjectDiagram } from "react-icons/fa";

function DialPlan() {
  const flow = [
    "User Dials",
    "CSS Lookup",
    "Partition Match",
    "Route List",
    "Route Group",
    "Gateway",
    "PSTN",
  ];

  const wildcards = [
    {
      wildcard: "X",
      match: "Any digit (0-9)",
      example: "9XXX",
    },
    {
      wildcard: "!",
      match: "One or more digits",
      example: "9!",
    },
    {
      wildcard: "[x-y]",
      match: "Digit range",
      example: "[2-5]XXX",
    },
    {
      wildcard: "@",
      match: "North American Pattern",
      example: "@",
    },
  ];

  return (
    <Reveal>
      <section style={{ padding: "60px 0" }}>
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
            color: "#2C3E50",
          }}
        >
          <FaRoute size={26} />
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              margin: 0,
            }}
          >
            Dial Plan & Call Routing Logic
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
            marginBottom: "50px",
          }}
        >
          {flow.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "#D6EAF8",
                  border: "2px solid #85C1E9",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  minWidth: "120px",
                  textAlign: "center",
                  fontWeight: "700",
                  color: "#2C3E50",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
                }}
              >
                {step}
              </div>

              {index !== flow.length - 1 && (
                <div
                  style={{
                    fontSize: "24px",
                    margin: "0 6px",
                    color: "#34495E",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CSS VS PARTITION */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {/* PARTITION */}
          <div
            style={{
              width: "320px",
              background: "linear-gradient(135deg,#FADBD8,#fff)",
              border: "2px solid #E6B0AA",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <FaPhoneAlt size={28} color="#C0392B" />

            <h3
              style={{
                marginTop: "12px",
                marginBottom: "10px",
                color: "#2C3E50",
              }}
            >
              Partition
            </h3>

            <p style={{ color: "#555" }}>
              Defines WHAT numbers exist in CUCM.
            </p>

            <ul style={{ marginTop: "12px" }}>
              <li>Internal Extensions</li>
              <li>Emergency Numbers</li>
              <li>Support Numbers</li>
            </ul>
          </div>

          {/* CSS */}
          <div
            style={{
              width: "320px",
              background: "linear-gradient(135deg,#D5F5E3,#fff)",
              border: "2px solid #82E0AA",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <FaSearch size={28} color="#1E8449" />

            <h3
              style={{
                marginTop: "12px",
                marginBottom: "10px",
                color: "#2C3E50",
              }}
            >
              Calling Search Space (CSS)
            </h3>

            <p style={{ color: "#555" }}>
              Defines WHERE a device is allowed to call.
            </p>

            <ul style={{ marginTop: "12px" }}>
              <li>Employee CSS</li>
              <li>Manager CSS</li>
              <li>Executive CSS</li>
            </ul>
          </div>
        </div>

        {/* NOTE */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto 50px",
            background: "#E8DAEF",
            border: "2px solid #D2B4DE",
            padding: "18px",
            borderRadius: "16px",
            textAlign: "center",
            fontWeight: "700",
            color: "#4A235A",
          }}
        >
          Partition = WHAT numbers exist <br />
          CSS = WHERE a device can call
        </div>

        {/* WILDCARD TABLE */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              padding: "18px",
              background: "#D6EAF8",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaProjectDiagram />
            <h3 style={{ margin: 0 }}>
              CUCM Route Pattern Wildcards
            </h3>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#F8F9FA",
                }}
              >
                <th style={{ padding: "14px" }}>Wildcard</th>
                <th style={{ padding: "14px" }}>Matches</th>
                <th style={{ padding: "14px" }}>Example</th>
              </tr>
            </thead>

            <tbody>
              {wildcards.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                      fontWeight: "800",
                    }}
                  >
                    {item.wildcard}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                    }}
                  >
                    {item.match}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                    }}
                  >
                    {item.example}
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

export default DialPlan;