import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { FaBuilding, FaRobot, FaShieldAlt, FaProjectDiagram } from "react-icons/fa";

function Overview() {
    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(null);
    const sopColors = ["#dff6ff", "#ffe0f0", "#fff0d6", "#ddffe5"];
    useEffect(() => {
        fetch("http://localhost:5000/api/overview")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);

    if (!data) return <h2>Loading Overview...</h2>;

    const icons = [
        <FaBuilding size={30} />,
        <FaRobot size={30} />,
        <FaShieldAlt size={30} />
    ];

    return (
        <section style={{ padding: "70px 0" }}>

            {/* HERO */}
            <Reveal>
                <div style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontSize: "35px", fontWeight: "900", color: "#2C3E50" }}>
                        {data.hero.title}
                    </h1>
                    <p style={{ color: "#666" }}>{data.hero.description}</p>
                </div>
            </Reveal>


            {/* CARDS */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                flexWrap: "wrap"
            }}>
                {data.cards?.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected({ ...card, type: "card" })}
                        style={{
                            width: "240px",
                            background: card.color,
                            borderRadius: "25px",
                            padding: "25px",
                            textAlign: "center",
                            cursor: "pointer",
                            boxShadow: "0 12px 30px rgba(0,0,0,.1)"
                        }}
                    >
                        {icons[index]}
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>


            {/* SOP SECTION */}
            {/* SOP SECTION */}
            <h2 style={{ textAlign: "center", margin: "70px 0 30px" }}>
                Standard Operating Procedures (SOP)
            </h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px"
            }}>
                {data.sops?.map((sop, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "20px" }}>

                        {/* CARD */}
                        <div
                            onClick={() => setSelected({ ...sop, type: "sop" })}
                            style={{
                                width: "240px",
                                background: sopColors[index % sopColors.length],
                                padding: "22px",
                                borderRadius: "20px",
                                textAlign: "center",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                cursor: "pointer",
                                flexShrink: 0
                            }}
                        >
                            <h3 style={{ marginBottom: "8px" }}>{sop.title}</h3>
                            <p style={{ fontSize: "13px", color: "#555" }}>
                                {sop.steps?.length} Steps Included
                            </p>
                        </div>

                        {/* ARROW (SAFE ONLY IF NOT LAST) */}
                        {index !== data.sops.length - 1 && (
                            <div className="arrow"></div>
                        )}

                    </div>
                ))}
            </div>
            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "rgba(255,255,255,0.95)",
                            backdropFilter: "blur(10px)",
                            padding: "30px",
                            borderRadius: "24px",
                            width: "600px",
                            maxHeight: "80vh",
                            overflowY: "auto",
                            boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
                        }}
                    >
                        <h2>{selected.title}</h2>
                        <p>{selected.desc}</p>

                        {selected.type === "sop" && (
                            <ul>
                                {selected.steps.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        )}

                        {selected.type === "card" && (
                            <ul>
                                {selected.details.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        )}

                        <button
                            onClick={() => setSelected(null)}
                            style={{
                                marginTop: "25px",
                                padding: "12px 22px",
                                border: "none",
                                borderRadius: "14px",
                                background: "linear-gradient(135deg,#667eea,#764ba2)",
                                color: "#fff",
                                cursor: "pointer"
                            }}
                        >
                            ✖ Close
                        </button>
                    </div>
                </div>
            )}
            {/* animation keyframes */}
            <style>{`
        @keyframes floatArrow {
  0% { transform: translateX(-6px); opacity: 0.3; }
  50% { transform: translateX(6px); opacity: 1; }
  100% { transform: translateX(-6px); opacity: 0.3; }
}

.arrow {
  width: 35px;
  height: 35px;
  position: relative;
}

.arrow::before {
  content: "➜";
  font-size: 28px;
  color: #6c5ce7;
  position: absolute;
  animation: floatArrow 1.2s infinite ease-in-out;
}
      `}</style>

        </section >
    );
}

export default Overview;