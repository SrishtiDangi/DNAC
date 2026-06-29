import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { FaProjectDiagram } from "react-icons/fa";

function Architecture() {

    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/architecture")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    if (!data)
        return <h2>Loading Architecture...</h2>;

    return (

        <section id="architecture" style={{ padding: "70px 0" }}>

            <Reveal>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "30px", fontWeight: "900", color: "#2C3E50" }}>
                        {data.title}
                    </h2>
                    <p style={{ color: "#666" }}>
                        {data.subtitle}
                    </p>
                </div>
            </Reveal>


            {/* FLOW DIAGRAM STYLE */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "18px"
            }}>

                {data.cards.map((card, index) => (
                    <div key={index} style={{ position: "relative", width: "60%" }}>

                        {/* BOX */}
                        <div
                            onClick={() => setSelected(card)}
                            style={{
                                background: card.color,
                                padding: "20px",
                                borderRadius: "18px",
                                textAlign: "center",
                                cursor: "pointer",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                                transition: "0.3s"
                            }}

                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >

                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>

                        </div>

                        {/* ARROW */}
                        {index !== data.cards.length - 1 && (
                            <div className="arch-arrow"></div>
                        )}

                    </div>
                ))}
            </div>





            {/* POPUP */}
            {selected && (

                <div
                    onClick={() => setSelected(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999
                    }}
                >

                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "#fff",
                            width: "600px",
                            maxWidth: "90%",
                            padding: "30px",
                            borderRadius: "20px"
                        }}
                    >

                        <h2>{selected.title}</h2>
                        <p>{selected.desc}</p>

                        <ul>
                            {selected.details.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>

                        <div style={{ textAlign: "right" }}>
                            <button
                                onClick={() => setSelected(null)}
                                style={{
                                    marginTop: "15px",
                                    padding: "10px 18px",
                                    borderRadius: "15px",
                                    border: "none",
                                    background: "#2C3E50",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}
                            >
                                Close
                            </button>
                        </div>

                    </div>

                </div>

            )}
            <style>{`
        @keyframes floatArrow {
        0% { opacity: 0.3; transform: translateY(-8px); }
  50% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0.3; transform: translateY(8px); }
}

.arch-arrow {
  width: 3px;
  height: 45px;
  margin: 6px auto;
  position: relative;
  background: linear-gradient(to bottom, #3f587b, transparent);
  animation: floatArrow 1.2s infinite ease-in-out;
  transform-origin: center;
}

.arch-arrow::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: -4px;
  width: 10px;
  height: 10px;
  border-right: 2px solid #94a3b8;
  border-bottom: 2px solid #94a3b8;
  transform: rotate(45deg);
}
      `}</style>

        </section>

    )

}

export default Architecture;