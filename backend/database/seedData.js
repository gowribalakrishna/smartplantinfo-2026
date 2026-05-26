const mongoose = require("mongoose");

const dotenv = require("dotenv");

const connectDB = require(
  "./connection"
);

const Plant = require(
  "../models/Plant"
);

dotenv.config();

connectDB();

const plants = [
  {
    plantId: "P101",

    englishName: "Mango",

    teluguName: "మామిడి",

    scientificName:
      "Mangifera indica",

    category: "Fruit Plant",

    waterNeeds:
      "2 times weekly",

    sunlight: "Full Sun",

    climate: "Hot",

    soilType: "Loamy Soil",

    fertilizer:
      "Organic Compost",

    diseases: [
      "Anthracnose",
      "Powdery Mildew",
    ],

    image:
      "https://example.com/mango.jpg",

    qrCode:
      "https://example.com/qrcode/mango",

    growthStatus: "Healthy",

    location: "Section A",
  },

  {
    plantId: "P102",

    englishName: "Rose",

    teluguName: "రోజా",

    scientificName: "Rosa",

    category: "Flower Plant",

    waterNeeds: "Daily",

    sunlight: "Partial Sun",

    climate: "Moderate",

    soilType: "Red Soil",

    fertilizer:
      "Vermicompost",

    diseases: [
      "Black Spot",
      "Rust",
    ],

    image:
      "https://example.com/rose.jpg",

    qrCode:
      "https://example.com/qrcode/rose",

    growthStatus: "Growing",

    location: "Section B",
  },

  {
    plantId: "P103",

    englishName: "Coconut",

    teluguName: "కొబ్బరి",

    scientificName:
      "Cocos nucifera",

    category: "Tree",

    waterNeeds:
      "3 times weekly",

    sunlight: "Full Sun",

    climate: "Tropical",

    soilType: "Sandy Soil",

    fertilizer:
      "Coconut Special Mix",

    diseases: [
      "Bud Rot",
      "Stem Bleeding",
    ],

    image:
      "https://example.com/coconut.jpg",

    qrCode:
      "https://example.com/qrcode/coconut",

    growthStatus: "Healthy",

    location: "Section C",
  },
];

const importData = async () => {
  try {
    await Plant.deleteMany();

    await Plant.insertMany(plants);

    console.log(
      "Plant Seed Data Inserted Successfully"
    );

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

importData();