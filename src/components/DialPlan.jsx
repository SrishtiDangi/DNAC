import Reveal from "./Reveal";
import {
  FaRoute,
  FaPhoneAlt,
  FaSearch,
  FaProjectDiagram,
} from "react-icons/fa";

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
    { wildcard: "X", match: "Any digit (0-9)", example: "9XXX" },
    { wildcard: "!", match: "One or more digits", example: "9!" },
    { wildcard: "[x-y]", match: "Digit range", example: "[2-5]XXX" },
    { wildcard: "@", match: "North American Pattern", example: "@" },
  ];

  return (
    <Reveal>
      <section style={{ padding: "60px 0" }} id="dial-plan">

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
          <h2 style={{ fontSize: "26px", fontWeight: "900", margin: 0 }}>
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
              className="flowItem"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="flowBox">{step}</div>

              {index !== flow.length - 1 && (
                <div className="arrow">→</div>
              )}
            </div>
          ))}
        </div>

        {/* PARTITION + CSS */}
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
          <div className="card partition">
            <FaPhoneAlt size={28} color="#C0392B" />

            <h3>Partition</h3>
            <p>Defines WHAT numbers exist in CUCM.</p>

            <ul>
              <li>Internal Extensions</li>
              <li>Emergency Numbers</li>
              <li>Support Numbers</li>
            </ul>
          </div>

          {/* CSS */}
          <div className="card css">
            <FaSearch size={28} color="#1E8449" />

            <h3>Calling Search Space (CSS)</h3>
            <p>Defines WHERE a device is allowed to call.</p>

            <ul>
              <li>Employee CSS</li>
              <li>Manager CSS</li>
              <li>Executive CSS</li>
            </ul>
          </div>
        </div>

        {/* NOTE */}
        <div className="note">
          Partition = WHAT numbers exist <br />
          CSS = WHERE a device can call
        </div>

        {/* TABLE */}
        <div className="tableBox">
          <div className="tableHeader">
            <FaProjectDiagram />
            <h3>CUCM Route Pattern Wildcards</h3>
          </div>

          <table>
            <thead>
              <tr>
                <th>Wildcard</th>
                <th>Matches</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              {wildcards.map((item, index) => (
                <tr key={index}>
                  <td>{item.wildcard}</td>
                  <td>{item.match}</td>
                  <td>{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* STYLE */}
        <style>{`
          
          /* FLOW ANIMATION */
          .flowBox {
            background: #D6EAF8;
            border: 2px solid #85C1E9;
            padding: 14px 18px;
            border-radius: 14px;
            min-width: 120px;
            text-align: center;
            font-weight: 700;
            color: #2C3E50;
            box-shadow: 0 8px 18px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .flowBox:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 18px 35px rgba(0,0,0,0.18);
          }

          .arrow {
            font-size: 24px;
            margin: 0 6px;
            color: #34495E;
            animation: move 1.2s infinite ease-in-out;
          }

          @keyframes move {
            0% { transform: translateX(-4px); opacity: 0.5; }
            50% { transform: translateX(4px); opacity: 1; }
            100% { transform: translateX(8px); opacity: 0.5; }
          }

          /* CARDS */
          .card {
            width: 320px;
            border-radius: 18px;
            padding: 20px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 18px 35px rgba(0,0,0,0.18);
          }

          .partition {
            background: linear-gradient(135deg,#FADBD8,#fff);
            border: 2px solid #E6B0AA;
          }

          .css {
            background: linear-gradient(135deg,#D5F5E3,#fff);
            border: 2px solid #82E0AA;
          }

          .card h3 {
            margin: 12px 0 10px;
            color: #2C3E50;
          }

          .card p {
            color: #555;
          }

          .card ul {
            margin-top: 12px;
          }

          /* NOTE */
          .note {
            max-width: 700px;
            margin: 0 auto 50px;
            background: #E8DAEF;
            border: 2px solid #D2B4DE;
            padding: 18px;
            border-radius: 16px;
            text-align: center;
            font-weight: 700;
            color: #4A235A;
            transition: 0.3s;
          }

          .note:hover {
            transform: scale(1.02);
          }

          /* TABLE */
          .tableBox {
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          }

          .tableHeader {
            padding: 18px;
            background: #D6EAF8;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          thead tr {
            background: #F8F9FA;
          }

          td, th {
            padding: 14px;
            text-align: center;
          }

          tbody tr {
            transition: 0.3s;
          }

          tbody tr:hover {
            background: #F2F3F4;
            transform: scale(1.01);
          }

        `}</style>

      </section>
    </Reveal>
  );
}

export default DialPlan;