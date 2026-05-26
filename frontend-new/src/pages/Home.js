import React from "react";

function Home() {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#f0fff0",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "green", fontSize: "40px" }}>
        Welcome to Plant Care Website 
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginTop: "20px",
          color: "#333",
        }}
      >
        This website helps users learn about plants, plantation,
        watering schedules, fertilizers, and plant care tips.
      </p>

      <img
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
        alt="plants"
        style={{
          width: "80%",
          marginTop: "30px",
          borderRadius: "15px",
        }}
      />

      <div style={{ marginTop: "40px" }}>
        <h2> Our Features</h2>

        <ul
          style={{
            listStyle: "none",
            fontSize: "18px",
            lineHeight: "40px",
          }}
        >
          <li> Plant Information</li>
          <li> Water Reminder</li>
          <li> Sunlight Guide</li>
          <li> AI Plant Chatbot</li>
          <li> Gardening Tips</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;