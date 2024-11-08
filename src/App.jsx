import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f3f3",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          background: "#fff",
          padding: "24px",
          gap: "22px",
          boxShadow:
            "0px 6px 17px rgba(243, 243, 243, 0.4196),0px 2.2174px 4px rgba(24, 24, 43, 0.0657),0px 2.0761px 18.4348px rgba(0, 0, 0, 0.0657)",
        }}
      >
        <h2 style={{ padding: "0px", margin: "0px" }}>Form</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Email</label>
          <input
            style={{
              padding: "8px",
            }}
            type="email"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Password</label>
          <input
            style={{
              padding: "8px",
            }}
            type="password"
          />
        </div>
        <button
          style={{
            backgroundColor: isHovered ? "#0056b3" : "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
