import React from "react";

function About() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "green",
          fontSize: "40px",
        }}
      >
        About Us 
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginTop: "30px",
          lineHeight: "35px",
          color: "#444",
        }}
      >
        Our Plant Care platform is designed to help people understand
        nature and improve plantation activities. We provide useful
        information about indoor plants, outdoor plants, fertilizers,
        watering schedules, and gardening methods.
      </p>

      <div
        style={{
          marginTop: "40px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px lightgray",
        }}
      >
        <h2 style={{ color: "darkgreen" }}>Our Mission</h2>

        <p style={{ fontSize: "18px", lineHeight: "30px" }}>
          We aim to make the world greener by encouraging people to
          grow more plants and protect nature.
        </p>

        <h2 style={{ color: "darkgreen", marginTop: "20px" }}>
          Why Choose Us?
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "35px" }}>
          <li>✔ Easy to use website</li>
          <li>✔ AI chatbot support</li>
          <li>✔ Plant care suggestions</li>
          <li>✔ Modern design</li>
          <li>✔ Beginner friendly</li>
        </ul>
      </div>
    </div>
  );
}

export default About;