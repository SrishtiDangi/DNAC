import { FaVolumeUp, FaSignal } from "react-icons/fa";

function CodecQoS() {
  const codecs = [
    { codec: "G.711", bitrate: "64 Kbps", mos: "4.4", notes: "High Quality" },
    { codec: "G.722", bitrate: "64 Kbps HD", mos: "4.5", notes: "HD Voice" },
    { codec: "G.729", bitrate: "8 Kbps", mos: "3.9", notes: "Bandwidth Saving" },
    { codec: "Opus", bitrate: "Variable", mos: "4.5+", notes: "Modern Codec" },
  ];

  const qos = [
    { traffic: "Voice RTP", dscp: "EF / 46" },
    { traffic: "Call Signaling", dscp: "CS3 / 24" },
    { traffic: "Video", dscp: "AF41 / 34" },
  ];

  return (
    <section
      id="codecc"
      style={{
        padding: "60px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "40px",
        }}
      >
        <FaVolumeUp size={28} color="#2C3E50" />
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "900",
            margin: 0,
            color: "#2C3E50",
          }}
        >
          Codec & QoS Reference
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",
        }}
      >
        {/* Codec Card */}
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
              background: "#D6EAF8",
              padding: "18px",
              fontWeight: "800",
            }}
          >
            Voice Codecs
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "12px" }}>Codec</th>
                <th style={{ padding: "12px" }}>Bitrate</th>
                <th style={{ padding: "12px" }}>MOS</th>
                <th style={{ padding: "12px" }}>Purpose</th>
              </tr>
            </thead>

            <tbody>
              {codecs.map((c, i) => (
                <tr key={i}>
                  <td style={{ padding: "12px", textAlign: "center" }}>{c.codec}</td>
                  <td style={{ padding: "12px", textAlign: "center" }}>{c.bitrate}</td>
                  <td style={{ padding: "12px", textAlign: "center" }}>{c.mos}</td>
                  <td style={{ padding: "12px", textAlign: "center" }}>{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* QoS Card */}
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
              background: "#FADBD8",
              padding: "18px",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaSignal />
            QoS DSCP Markings
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "12px" }}>Traffic</th>
                <th style={{ padding: "12px" }}>DSCP</th>
              </tr>
            </thead>

            <tbody>
              {qos.map((q, i) => (
                <tr key={i}>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    {q.traffic}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontWeight: "800",
                    }}
                  >
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

export default CodecQoS;