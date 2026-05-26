import React, { useState } from "react";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";

function PlantDetails() {

  const [language, setLanguage] = useState("english");

  const plants = [

    {
      englishName: "Tulsi",
      teluguName: "తులసి",
      image: pic1,

      waterEnglish:
        "Water daily in summer and alternate days in winter.",

      waterTelugu:
        "వేసవిలో రోజూ మరియు చలికాలంలో ఒక రోజు విడిచి ఒక రోజు నీరు పోయాలి.",

      sunlightEnglish:
        "Needs 4-6 hours of sunlight daily.",

      sunlightTelugu:
        "రోజుకు 4-6 గంటలు సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use organic compost every 15 days.",

      fertilizerTelugu:
        "15 రోజులకు ఒకసారి ఆర్గానిక్ కంపోస్ట్ ఉపయోగించండి.",

      temperatureEnglish:
        "20°C - 35°C",

      temperatureTelugu:
        "20°C - 35°C",

      benefitsEnglish:
        "Improves air quality and has medicinal properties.",

      benefitsTelugu:
        "గాలి శుభ్రం చేస్తుంది మరియు ఔషధ గుణాలు కలిగి ఉంటుంది.",
    },

    {
      englishName: "Aloe Vera",
      teluguName: "అలోవెరా",
      image: pic2,

      waterEnglish:
        "Water twice a week.",

      waterTelugu:
        "వారం లో 2 సార్లు నీరు పోయాలి.",

      sunlightEnglish:
        "Needs indirect sunlight.",

      sunlightTelugu:
        "పరోక్ష సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use fertilizer once a month.",

      fertilizerTelugu:
        "నెలకు ఒకసారి ఎరువు వేయండి.",

      temperatureEnglish:
        "18°C - 30°C",

      temperatureTelugu:
        "18°C - 30°C",

      benefitsEnglish:
        "Good for skin and hair care.",

      benefitsTelugu:
        "చర్మం మరియు జుట్టుకు చాలా మంచిది.",
    },

    {
      englishName: "Rose",
      teluguName: "రోజా",
      image: pic3,

      waterEnglish:
        "Water daily in small amounts.",

      waterTelugu:
        "రోజూ కొద్దిగా నీరు పోయాలి.",

      sunlightEnglish:
        "Needs direct sunlight.",

      sunlightTelugu:
        "నేరుగా సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use flower fertilizer.",

      fertilizerTelugu:
        "పూల ఎరువు ఉపయోగించండి.",

      temperatureEnglish:
        "15°C - 28°C",

      temperatureTelugu:
        "15°C - 28°C",

      benefitsEnglish:
        "Makes surroundings beautiful and fragrant.",

      benefitsTelugu:
        "ఇంటి చుట్టూ అందాన్ని మరియు సువాసనను పెంచుతుంది.",
    },

    {
      englishName: "Money Plant",
      teluguName: "మనీ ప్లాంట్",
      image: pic4,

      waterEnglish:
        "Water 2-3 times a week.",

      waterTelugu:
        "వారం లో 2-3 సార్లు నీరు పోయాలి.",

      sunlightEnglish:
        "Needs indirect sunlight.",

      sunlightTelugu:
        "పరోక్ష సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use organic fertilizer monthly.",

      fertilizerTelugu:
        "నెలకు ఒకసారి ఆర్గానిక్ ఎరువు వేయండి.",

      temperatureEnglish:
        "20°C - 30°C",

      temperatureTelugu:
        "20°C - 30°C",

      benefitsEnglish:
        "Purifies air and improves indoor beauty.",

      benefitsTelugu:
        "గాలిని శుభ్రం చేస్తుంది మరియు ఇంటి అందాన్ని పెంచుతుంది.",
    },

    {
      englishName: "Neem Plant",
      teluguName: "వేప చెట్టు",
      image: pic5,

      waterEnglish:
        "Water twice a week.",

      waterTelugu:
        "వారం లో 2 సార్లు నీరు పోయాలి.",

      sunlightEnglish:
        "Needs full sunlight.",

      sunlightTelugu:
        "పూర్తి సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use natural compost.",

      fertilizerTelugu:
        "సహజ కంపోస్ట్ ఉపయోగించండి.",

      temperatureEnglish:
        "20°C - 40°C",

      temperatureTelugu:
        "20°C - 40°C",

      benefitsEnglish:
        "Has medicinal properties and keeps insects away.",

      benefitsTelugu:
        "ఔషధ గుణాలు ఉన్నాయి మరియు పురుగులను దూరం చేస్తుంది.",
    },

    {
      englishName: "Hibiscus",
      teluguName: "మందారం",
      image: pic6,

      waterEnglish:
        "Water daily.",

      waterTelugu:
        "రోజూ నీరు పోయాలి.",

      sunlightEnglish:
        "Needs direct sunlight.",

      sunlightTelugu:
        "నేరుగా సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use flower fertilizer every 15 days.",

      fertilizerTelugu:
        "15 రోజులకు ఒకసారి పూల ఎరువు వేయండి.",

      temperatureEnglish:
        "18°C - 32°C",

      temperatureTelugu:
        "18°C - 32°C",

      benefitsEnglish:
        "Used for hair care and decoration.",

      benefitsTelugu:
        "జుట్టు సంరక్షణకు మరియు అలంకరణకు ఉపయోగపడుతుంది.",
    },

    {
      englishName: "Curry Leaves",
      teluguName: "కరివేపాకు",
      image: pic7,

      waterEnglish:
        "Water 3-4 times a week.",

      waterTelugu:
        "వారం లో 3-4 సార్లు నీరు పోయాలి.",

      sunlightEnglish:
        "Needs moderate sunlight.",

      sunlightTelugu:
        "మధ్యస్థ సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use compost monthly.",

      fertilizerTelugu:
        "నెలకు ఒకసారి కంపోస్ట్ వేయండి.",

      temperatureEnglish:
        "20°C - 35°C",

      temperatureTelugu:
        "20°C - 35°C",

      benefitsEnglish:
        "Useful in cooking and improves digestion.",

      benefitsTelugu:
        "వంటల్లో ఉపయోగపడుతుంది మరియు జీర్ణశక్తిని పెంచుతుంది.",
    },

    {
      englishName: "Tomato Plant",
      teluguName: "టమోటా మొక్క",
      image: pic8,

      waterEnglish:
        "Needs water daily.",

      waterTelugu:
        "రోజూ నీరు అవసరం.",

      sunlightEnglish:
        "Needs 6-8 hours sunlight.",

      sunlightTelugu:
        "రోజుకు 6-8 గంటలు సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use vegetable fertilizer.",

      fertilizerTelugu:
        "కూరగాయల ఎరువు ఉపయోగించండి.",

      temperatureEnglish:
        "18°C - 30°C",

      temperatureTelugu:
        "18°C - 30°C",

      benefitsEnglish:
        "Provides fresh vegetables.",

      benefitsTelugu:
        "తాజా కూరగాయలను అందిస్తుంది.",
    },

    {
      englishName: "Mint Plant",
      teluguName: "పుదీనా",
      image: pic9,

      waterEnglish:
        "Keep soil slightly wet.",

      waterTelugu:
        "మట్టి కొద్దిగా తడిగా ఉండాలి.",

      sunlightEnglish:
        "Needs partial sunlight.",

      sunlightTelugu:
        "కొంత సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use compost every month.",

      fertilizerTelugu:
        "ప్రతి నెల కంపోస్ట్ వేయండి.",

      temperatureEnglish:
        "15°C - 30°C",

      temperatureTelugu:
        "15°C - 30°C",

      benefitsEnglish:
        "Used in food and improves digestion.",

      benefitsTelugu:
        "ఆహారంలో ఉపయోగపడుతుంది మరియు జీర్ణశక్తికి మంచిది.",
    },

    {
      englishName: "Jasmine",
      teluguName: "మల్లెపువ్వు",
      image: pic10,

      waterEnglish:
        "Water daily in summer.",

      waterTelugu:
        "వేసవిలో రోజూ నీరు పోయాలి.",

      sunlightEnglish:
        "Needs full sunlight.",

      sunlightTelugu:
        "పూర్తి సూర్యరశ్మి అవసరం.",

      fertilizerEnglish:
        "Use flower fertilizer monthly.",

      fertilizerTelugu:
        "నెలకు ఒకసారి పూల ఎరువు వేయండి.",

      temperatureEnglish:
        "20°C - 35°C",

      temperatureTelugu:
        "20°C - 35°C",

      benefitsEnglish:
        "Has a pleasant fragrance and decorative value.",

      benefitsTelugu:
        "మంచి సువాసన మరియు అలంకరణకు ఉపయోగపడుతుంది.",
    },
  ];

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>
        🌱 Plant Details
      </h1>

      <div style={styles.buttonContainer}>

        <button
          style={styles.languageButton}
          onClick={() => setLanguage("english")}
        >
          English
        </button>

        <button
          style={styles.languageButton}
          onClick={() => setLanguage("telugu")}
        >
           తెలుగు
        </button>

      </div>

      <div style={styles.grid}>

        {plants.map((plant, index) => (

          <div key={index} style={styles.card}>

            <img
              src={plant.image}
              alt={plant.englishName}
              style={styles.image}
            />

            <h2 style={styles.plantName}>
              {language === "english"
                ? plant.englishName
                : plant.teluguName}
            </h2>

            <h3>💧 Water Schedule</h3>

            <p>
              {language === "english"
                ? plant.waterEnglish
                : plant.waterTelugu}
            </p>

            <h3>☀️ Sunlight Needed</h3>

            <p>
              {language === "english"
                ? plant.sunlightEnglish
                : plant.sunlightTelugu}
            </p>

            <h3>🌿 Fertilizer Info</h3>

            <p>
              {language === "english"
                ? plant.fertilizerEnglish
                : plant.fertilizerTelugu}
            </p>

            <h3>🌡️ Temperature</h3>

            <p>
              {language === "english"
                ? plant.temperatureEnglish
                : plant.temperatureTelugu}
            </p>

            <h3>✨ Benefits</h3>

            <p>
              {language === "english"
                ? plant.benefitsEnglish
                : plant.benefitsTelugu}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f4fff4",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    color: "green",
    marginBottom: "20px",
    fontSize: "45px",
    fontWeight: "bold",
  },

  buttonContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },

  languageButton: {
    padding: "12px 25px",
    margin: "10px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
  },

  plantName: {
    color: "darkgreen",
    marginBottom: "15px",
  },
};

export default PlantDetails;