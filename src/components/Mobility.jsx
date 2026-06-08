import Reveal from "./Reveal";
import {
  FaMobileAlt,
  FaPhoneAlt,
  FaUserCheck,
  FaLaptopHouse,
} from "react-icons/fa";

function Mobility() {
  const features = [
    {
      title: "Cisco Jabber",
      desc: "Softphone, messaging and presence platform for enterprise users.",
      icon: <FaMobileAlt size={30} />,
      color: "#D6EAF8",
      border: "#3498DB",
    },
    {
      title: "Extension Mobility",
      desc: "Users can log in to any IP Phone and access their profile.",
      icon: <FaUserCheck size={30} />,
      color: "#E8F8F5",
      border: "#2ECC71",
    },
    {
      title: "Single Number Reach",
      desc: "Ring desk phone and mobile phone simultaneously.",
      icon: <FaPhoneAlt size={30} />,
      color: "#FDEBD0",
      border: "#F39C12",
    },
    {
      title: "Mobile Connect",
      desc: "Extend enterprise calling experience to mobile devices.",
      icon: <FaLaptopHouse size={30} />,
      color: "#EDE7F6",
      border: "#8E44AD",
    },
  ];

  return (
    <section 
      style={{ padding: "60px 0" }}
      id="mobility"
    >
      {/* HEADER */}
      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#2C3E50",
              marginBottom: "10px",
            }}
          >
            Mobility Features
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Enterprise mobility and remote communication capabilities
          </p>
        </div>
      </Reveal>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {features.map((item, index) => (
          <Reveal key={index}>
            <div
              style={{
                background: item.color,
                border: `2px solid ${item.border}`,
                borderRadius: "18px",
                padding: "22px",
                textAlign: "center",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-6px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
              }}
            >
              <div
                style={{
                  color: "#2C3E50",
                  marginBottom: "12px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 10px 0",
                  color: "#2C3E50",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#555",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Mobility;