import { FaNetworkWired } from "react-icons/fa";
import Reveal from "./Reveal";

function Protocols() {
  const protocols = [
    {
      protocol: "SIP",
      type: "Signaling",
      purpose: "IP Call Setup & Control",
    },
    {
      protocol: "SCCP",
      type: "Cisco Proprietary",
      purpose: "IP Phone Control",
    },
    {
      protocol: "H.323",
      type: "Signaling",
      purpose: "Legacy VoIP Communication",
    },
    {
      protocol: "RTP / SRTP",
      type: "Media",
      purpose: "Voice Media Transport",
    },
    {
      protocol: "MGCP",
      type: "Gateway Control",
      purpose: "PSTN Gateway Management",
    },
    {
      protocol: "LDAP",
      type: "Directory",
      purpose: "User Synchronization",
    },
    {
      protocol: "TFTP",
      type: "File Transfer",
      purpose: "Phone Configuration Download",
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
            marginBottom: "35px",
            color: "#2C3E50",
          }}
        >
          <FaNetworkWired size={28} />
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
            }}
          >
            Key CUCM Protocols
          </h2>
        </div>

        {/* TABLE CARD */}
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
            border: "2px solid #D6EAF8",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#F8C8DC",
                }}
              >
                <th style={header}>Protocol</th>
                <th style={header}>Type</th>
                <th style={header}>Purpose</th>
              </tr>
            </thead>

            <tbody>
              {protocols.map((item, i) => (
                <tr
                  key={i}
                  style={{
                    background:
                      i % 2 === 0 ? "#fff" : "#F9FBFD",
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
  textAlign: "left",
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