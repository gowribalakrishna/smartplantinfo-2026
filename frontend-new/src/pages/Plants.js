import React, { useState } from "react";

function Plants() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const plants = [
    {
      name: "Aloe Vera",
      image: "/images/pic2.jpg",
      uses: "Medicinal plant and air purifier",
      watering: "Water 2 times a week",
      details:
        "Aloe Vera is used for skin care, burns, and improving indoor air quality.",
    },
    {
      name: "Rose Plant",
      image: "/images/pic3.jpg",
      uses: "Beautiful flowering plant",
      watering: "Water daily",
      details:
        "Rose plants produce colorful flowers and need good sunlight.",
    },
    {
      name: "Tulsi",
      image: "/images/pic1ns.jpg",
      uses: "Holy medicinal plant",
      watering: "Water once a day",
      details:
        "Tulsi is used in Ayurveda and improves immunity naturally.",
    },
    {
      name: "Money Plant",
      image: "/images/pic4.jpg",
      uses: "Indoor decorative plant",
      watering: "Water 3 times a week",
      details:
        "Money plant improves oxygen and gives a fresh indoor environment.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f4fff4",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "darkgreen",
          marginBottom: "40px",
          fontSize: "50px",
        }}
      >
        Plant Information
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {plants.map((plant, index) => (
          <div
            key={index}
            style={{
              width: "280px",
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <img
              src={plant.image}
              alt={plant.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "contain",
                borderRadius: "15px",
                backgroundColor: "#f5f5f5",
                padding: "10px",
              }}
            />

            <h2
              style={{
                marginTop: "15px",
                color: "#1b5e20",
              }}
            >
              {plant.name}
            </h2>

            <p>
              <b>Uses:</b> {plant.uses}
            </p>

            <p>
              <b>Watering:</b> {plant.watering}
            </p>

            <button
              onClick={() => setSelectedPlant(plant)}
              style={{
                backgroundColor: "darkgreen",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedPlant && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "20px",
              width: "350px",
              textAlign: "center",
            }}
          >
            <img
              src={selectedPlant.image}
              alt={selectedPlant.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "contain",
                borderRadius: "15px",
              }}
            />

            <h2 style={{ color: "darkgreen" }}>
              {selectedPlant.name}
            </h2>

            <p>{selectedPlant.details}</p>

            <button
              onClick={() => setSelectedPlant(null)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Plants;