function NetworkLines() {
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Publisher → Infra */}
      <line
        x1="50%"
        y1="160"
        x2="50%"
        y2="260"
        stroke="#2C3E50"
        strokeWidth="2"
        strokeDasharray="6 6"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Infra → Subscribers */}
      <line
        x1="50%"
        y1="340"
        x2="50%"
        y2="460"
        stroke="#2C3E50"
        strokeWidth="2"
        strokeDasharray="6 6"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

export default NetworkLines;