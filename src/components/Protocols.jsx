import { useState, useEffect } from "react";
import { FaNetworkWired } from "react-icons/fa";
import Reveal from "./Reveal";

function Protocols() {
  const [data, setData] = useState(null);

  const iconMap = {
    network: <FaNetworkWired size={28} />,
  };

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/api/protocols")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Protocols...
      </section>
    );
  }

  return (
    <Reveal>
      <section style={{ padding: "60px 0" }} id="protocols">

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "35px",
            color: "#2C3E50",
          }}
        >
          {iconMap[data.icon]}
          <h2 style={{ fontSize: "26px", fontWeight: "900" }}>
            {data.title}
          </h2>
        </div>

        {/* TABLE CARD */}
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            alignItems: "center",
            alignContent:"center",
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
            border: `2px solid ${data.borderColor}`,
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>

            {/* HEADER ROW */}
            <thead>
              <tr style={{ background: data.headerColor }}>
                {data.columns.map((col, i) => (
                  <th key={i} style={header}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY ROWS */}
            <tbody>
              {data.rows.map((item, i) => (
                <tr
                  key={i}
                  style={{
                    background: i % 2 === 0 ? "#fff" : "#F9FBFD",
                  }}
                >
                  <td style={cell}>{item.protocol}</td>
                  <td style={cell}>{item.type}</td>
                  <td style={cell}>{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Reveal>
  );
}

const header = {
  padding: "16px",
  textAlign: "center",
  color: "#2C3E50",
  fontWeight: "800",
};

const cell = {
  padding: "15px",
  borderBottom: "1px solid #EAEAEA",
  color: "#555",
  fontSize: "14px",
};

export default Protocols;