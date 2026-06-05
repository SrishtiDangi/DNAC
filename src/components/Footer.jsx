function Footer() {
  return (
    <footer
      style={{
        marginTop: "60px",
        padding: "40px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #F8F9FA, #EAF2F8)",
        borderTop: "2px solid #D6EAF8",
      }}
    >
      {/* TITLE */}
      <h3
        style={{
          margin: "0 0 10px 0",
          fontSize: "20px",
          fontWeight: "800",
          color: "#2C3E50",
          letterSpacing: "0.5px",
        }}
      >
        CUCM Infrastructure Dashboard
      </h3>

      {/* SUBTEXT */}
      <p
        style={{
          margin: 0,
          fontSize: "13px",
          color: "#5D6D7E",
        }}
      >
        Built with React • Cisco UC Concepts • Enterprise VoIP Architecture
      </p>

      {/* SMALL LINE */}
      <div
        style={{
          marginTop: "18px",
          fontSize: "12px",
          color: "#95A5A6",
        }}
      >
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}

export default Footer;