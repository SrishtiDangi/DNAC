import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { FaUserShield } from "react-icons/fa";

function ClassOfService() {
  const [data, setData] = useState(null);

  // ✅ FETCH BACKEND DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/classOfService")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Class of Service...
      </section>
    );
  }

  return (
    <Reveal>
      <section id="class-of-service" style={{ padding: "60px 0" }}>

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <FaUserShield size={24} color="#2C3E50" />

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

        {/* TABLE */}
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            {/* HEADER ROW */}
            <thead>
              <tr style={{ background: "#D6EAF8" }}>
                {data.header.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      padding: "16px",
                      textAlign: "center",
                      fontWeight: "800",
                      color: "#2C3E50",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.rows.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: "1px solid #EAEAEA",
                  }}
                >
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "700",
                    }}
                  >
                    {row[0]}
                  </td>

                  <td
                    style={{
                      padding: "16px",
                      color: "#555",
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

export default ClassOfService;