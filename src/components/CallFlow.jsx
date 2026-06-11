import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function CallFlow() {
  const [flow, setFlow] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/callflow")
      .then((res) => res.json())
      .then((data) => setFlow(data))
      .catch((err) => console.log(err));
  }, []);

  const ref = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");

          if (entry.isIntersecting) {
            setVisible((prev) => [
              ...new Set([...prev, Number(index)]),
            ]);
          }
        });
      },
      { threshold: 0.2 }
    );

    ref.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [flow]);

  return (
    <section id="call-flow" style={{ padding: "50px 0" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "14px",
          marginBottom: "40px",
          color: "#2C3E50",
        }}
      >
        <FaPhoneAlt size={28} />

        <h2
          style={{
            fontSize: "26px",
            fontWeight: "800",
            margin: 0,
          }}
        >
          Enterprise Call Routing Flow
        </h2>
      </div>

      {/* FLOW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {flow.map((item, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (ref.current[index] = el)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",

              opacity: visible.includes(index) ? 1 : 0,
              transform: visible.includes(index)
                ? "translateY(0px) scale(1)"
                : "translateY(25px) scale(0.96)",

              transition:
                "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            {/* NODE */}
            <div
              style={{
                background: item.bg,
                border: "1.5px solid rgba(0,0,0,0.08)",
                padding: "22px 32px",
                borderRadius: "16px",
                minWidth: "220px",
                textAlign: "center",
                color: "#2C3E50",
                fontSize: item.size,
                fontWeight: item.weight || "600",
                boxShadow: "0 10px 20px rgba(0,0,0,0.06)",
                cursor: "pointer",

                // ⭐ HOVER ADDED (SAFE)
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-6px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.06)";
              }}
            >
              {item.name}
            </div>

            {/* ARROW */}
            {index !== flow.length - 1 && (
              <div
                style={{
                  fontSize: "22px",
                  color: "#2C3E50",
                  animation: "bounceArrow 1.2s infinite",
                }}
              >
                ➜
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ARROW ANIMATION */}
      <style>
        {`
          @keyframes bounceArrow {
            0% { transform: translateX(-4px); opacity: 0.4; }
            50% { transform: translateX(6px); opacity: 1; }
            100% { transform: translateX(10px); opacity: 0.4; }
          }
        `}
      </style>
    </section>
  );
}

export default CallFlow;