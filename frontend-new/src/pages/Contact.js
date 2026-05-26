import React from "react";

function Contact() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#eef7ee",
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
        Contact Us 
      </h1>

      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 0px 10px lightgray",
        }}
      >
        <form>
          <label>Name</label>
          <br />

          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          />

          <label>Email</label>
          <br />

          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          />

          <label>Message</label>
          <br />

          <textarea
            rows="5"
            placeholder="Write your message..."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: "30px" }}>
          <h3>Our Contact Details</h3>

          <p>📍 Kadapa,Andhra Pradesh,India</p>
          <p>📧 plantcare@gmail.com</p>
          <p>📞 +91 xxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;