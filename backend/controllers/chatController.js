const plants = [
  {
    englishName: "Mango",
    teluguName: "మామిడి",
    water:
      "Water 2 times weekly",
    teluguWater:
      "వారానికి 2 సార్లు నీరు ఇవ్వాలి",
    sunlight: "Full Sun",
    climate: "Hot",
  },
  {
    englishName: "Rose",
    teluguName: "రోజా",
    water:
      "Daily watering required",
    teluguWater:
      "ప్రతిరోజు నీరు ఇవ్వాలి",
    sunlight: "Partial Sun",
    climate: "Moderate",
  },
];


// CHATBOT REPLY
exports.chatbotReply = async (
  req,
  res
) => {
  try {
    const { message } = req.body;

    const lower =
      message.toLowerCase();

    let foundPlant = null;

    for (let plant of plants) {
      if (
        lower.includes(
          plant.englishName.toLowerCase()
        ) ||
        lower.includes(
          plant.teluguName
        )
      ) {
        foundPlant = plant;
        break;
      }
    }

    if (!foundPlant) {
      return res.status(404).json({
        reply:
          "Plant information not found.",
      });
    }

    const isTelugu =
      /[\u0C00-\u0C7F]/.test(
        message
      );

    let reply = "";

    if (isTelugu) {
      reply =
        `${foundPlant.teluguName} మొక్క సమాచారం:\n\n` +
        `నీరు: ${foundPlant.teluguWater}\n` +
        `సూర్యకాంతి: ${foundPlant.sunlight}\n` +
        `వాతావరణం: ${foundPlant.climate}`;
    } else {
      reply =
        `${foundPlant.englishName} Plant Information:\n\n` +
        `Water: ${foundPlant.water}\n` +
        `Sunlight: ${foundPlant.sunlight}\n` +
        `Climate: ${foundPlant.climate}`;
    }

    res.status(200).json({
      reply,
    });
  } catch (error) {
    res.status(500).json({
      reply:
        "Server error occurred.",
    });
  }
};