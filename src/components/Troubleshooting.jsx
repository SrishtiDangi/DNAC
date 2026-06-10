import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { FaTools } from "react-icons/fa";

function Troubleshooting() {
  const [data, setData] = useState(null);

  // ✅ FETCH BACKEND DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/troubleshooting")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Troubleshooting...
      </section>
    );
  }

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
            {data.title}
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
            {data.issuesTitle}
          </h3>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#FCE4EC" }}>
                <th style={{ padding: "12px" }}>Symptom</th>
                <th style={{ padding: "12px" }}>Likely Cause</th>
                <th style={{ padding: "12px" }}>Fix</th>
              </tr>
            </thead>

            <tbody>
              {data.issues.map((row, i) => (
                <tr key={i}>
                  <td style={{ padding: "12px", borderTop: "1px solid #eee" }}>
                    {row[0]}
                  </td>
                  <td style={{ padding: "12px", borderTop: "1px solid #eee" }}>
                    {row[1]}
                  </td>
                  <td style={{ padding: "12px", borderTop: "1px solid #eee" }}>
                    {row[2]}
                  </td>
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
            {data.commandsTitle}
          </h3>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#EBF5FB" }}>
                <th style={{ padding: "12px" }}>Command</th>
                <th style={{ padding: "12px" }}>Purpose</th>
              </tr>
            </thead>

            <tbody>
              {data.commands.map((row, i) => (
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

                  <td style={{ padding: "12px", borderTop: "1px solid #eee" }}>
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