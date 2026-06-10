import { useState, useEffect } from "react";
import { FaVolumeUp, FaSignal } from "react-icons/fa";

function CodecQoS() {
  const [data, setData] = useState(null);

  const iconMap = {
    volume: <FaVolumeUp size={28} color="#2C3E50" />,
    signal: <FaSignal />,
  };

  // ✅ FETCH BACKEND DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/codecQoS")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Codec & QoS...
      </section>
    );
  }

  return (
    <section id="codecc" style={{ padding: "60px 0" }}>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "40px",
        }}
      >
        {iconMap[data.icon]}
        <h2 style={{ fontSize: "26px", fontWeight: "900", margin: 0, color: "#2C3E50" }}>
          {data.title}
        </h2>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",
        }}
      >

        {/* CODEC TABLE */}
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
              background: data.codecs.headerColor,
              padding: "18px",
              fontWeight: "800",
            }}
          >
            {data.codecs.title}
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {data.codecs.columns.map((col, i) => (
                  <th key={i} style={header}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.codecs.rows.map((c, i) => (
                <tr key={i}>
                  <td style={cell}>{c.codec}</td>
                  <td style={cell}>{c.bitrate}</td>
                  <td style={cell}>{c.mos}</td>
                  <td style={cell}>{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* QOS TABLE */}
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
              background: data.qos.headerColor,
              padding: "18px",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {iconMap.signal}
            {data.qos.title}
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {data.qos.columns.map((col, i) => (
                  <th key={i} style={header}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.qos.rows.map((q, i) => (
                <tr key={i}>
                  <td style={cell}>{q.traffic}</td>
                  <td style={{ ...cell, fontWeight: "800" }}>
                    {q.dscp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

const header = {
  padding: "12px",
  textAlign: "center",
  fontWeight: "800",
  color: "#2C3E50",
};

const cell = {
  padding: "12px",
  textAlign: "center",
  borderBottom: "1px solid #eee",
  color: "#555",
  fontSize: "14px",
};

export default CodecQoS;