// Chatbot.js

import React, { useState } from "react";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "🌱 నమస్తే! నేను Smart Plant AI Assistant. మీ మొక్క సమస్య అడగండి.",
    },
  ]);

  // AI RESPONSES
  const getPlantAnswer = (msg) => {
    msg = msg.toLowerCase();

    // WATER
    if (
      msg.includes("water") ||
      msg.includes("watering")
    ) {
      return `
💧 Watering Tips:

• Morning time లో water పోయండి.
• ఎక్కువ నీళ్లు roots damage చేస్తాయి.
• Summer లో daily water ఇవ్వండి.
• Winter లో తక్కువ water సరిపోతుంది.
• Soil dry గా ఉన్నప్పుడు మాత్రమే water ఇవ్వండి.
      `;
    }

    // ROSE
    if (msg.includes("rose")) {
      return `
🌹 Rose Plant Care:

• రోజుకు 5-6 గంటలు sunlight అవసరం.
• Organic fertilizer వాడండి.
• Week కి 2 times watering చేయండి.
• Dry leaves remove చేయండి.
• Pest spray ఉపయోగించండి.
      `;
    }

    // TOMATO
    if (msg.includes("tomato")) {
      return `
🍅 Tomato Plant Care:

• Tomato plants కి full sunlight అవసరం.
• Compost fertilizer చాలా మంచిది.
• Regular watering చేయాలి.
• Support sticks ఉపయోగించండి.
• Yellow leaves remove చేయండి.
      `;
    }

    // YELLOW LEAVES
    if (msg.includes("yellow")) {
      return `
🌿 Yellow Leaves Solution:

• ఎక్కువ నీళ్లు పోస్తున్నారు.
• Fertilizer imbalance ఉండొచ్చు.
• Sunlight తక్కువ కావచ్చు.
• Damaged leaves remove చేయండి.
• Soil drainage check చేయండి.
      `;
    }

    // DRY
    if (msg.includes("dry")) {
      return `
🍂 Dry Plant Solution:

• Regular watering చేయండి.
• Plant ని shade లో పెట్టండి.
• Soil moisture maintain చేయండి.
• Organic compost ఉపయోగించండి.
• Leaves కి water spray చేయండి.
      `;
    }

    // SUNLIGHT
    if (msg.includes("sunlight")) {
      return `
☀️ Sunlight Tips:

• Most plants కి 4-6 hours sunlight అవసరం.
• Indoor plants indirect sunlight లో పెట్టండి.
• Too much sunlight leaves burn చేస్తుంది.
• Morning sunlight best.
      `;
    }

    // FERTILIZER
    if (msg.includes("fertilizer")) {
      return `
🌱 Fertilizer Tips:

• Organic fertilizer best.
• Compost చాలా మంచిది.
• Month కి 2 times fertilizer ఇవ్వండి.
• Over fertilizer plants damage చేస్తుంది.
      `;
    }

    // DEFAULT
    return `
🌿 Plant Care Tips:

• Regular watering చేయండి.
• Sunlight సరిపడా ఇవ్వండి.
• Organic fertilizer ఉపయోగించండి.
• Dry leaves remove చేయండి.
• Plant diseases regularly check చేయండి.
• Soil health maintain చేయండి.
    `;
  };

  // SEND MESSAGE
  const handleAsk = () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    const botMessage = {
      sender: "bot",
      text: getPlantAnswer(question),
    };

    setMessages([...messages, userMessage, botMessage]);

    setQuestion("");
  };

  return (
    <div
      style={{
        background: "#eef7ee",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      {/* TITLE */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <h1
          style={{
            color: "green",
            fontSize: "45px",
            marginBottom: "10px",
          }}
        >
          🌱 Smart Plant AI Assistant
        </h1>

        <p
          style={{
            color: "#444",
            fontSize: "18px",
          }}
        >
          మీ మొక్క సమస్యను అడగండి / Ask your plant problem
        </p>
      </div>

      {/* CHAT BOX */}
      <div
        style={{
          width: "90%",
          maxWidth: "850px",
          margin: "40px auto",
          background: "white",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* MESSAGES */}
        <div
          style={{
            height: "450px",
            overflowY: "auto",
            padding: "10px",
            background: "#f5f5f5",
            borderRadius: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  background:
                    msg.sender === "user"
                      ? "green"
                      : "#e5ffe5",

                  color:
                    msg.sender === "user"
                      ? "white"
                      : "#222",

                  padding: "14px",
                  borderRadius: "12px",
                  maxWidth: "75%",
                  whiteSpace: "pre-line",
                  lineHeight: "28px",
                  fontSize: "16px",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT AREA */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Type your plant question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleAsk}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "15px 25px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;