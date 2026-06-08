import Reveal from "./Reveal";
import { FaUserShield } from "react-icons/fa";

function ClassOfService() {
  const users = [
    ["Lobby Phone", "Emergency Only"],
    ["Standard Employee", "Internal + Local"],
    ["Manager", "Internal + Local + Long Distance"],
    ["Executive", "Unrestricted Access"],
  ];

  return (
    <Reveal>
      <section 
      id="class-of-service"
      style={{ padding: "60px 0" }}>
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <FaUserShield size={24} color="#2C3E50" />

          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
            }}
          >
            Class of Service
          </h2>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            maxWidth: "900px",
            margin: "0 auto",
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
                  background: "#D6EAF8",
                }}
              >
                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  User Type
                </th>

                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  Calling Privileges
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  style={{
                    borderTop: "1px solid #EAEAEA",
                  }}
                >
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "700",
                    }}
                  >
                    {user[0]}
                  </td>

                  <td
                    style={{
                      padding: "16px",
                      color: "#555",
                    }}
                  >
                    {user[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </Reveal>
  );
}

export default ClassOfService;