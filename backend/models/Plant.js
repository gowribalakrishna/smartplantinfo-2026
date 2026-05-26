const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    plantId: {
      type: String,
      required: true,
      unique: true,
    },

    englishName: {
      type: String,
      required: true,
    },

    teluguName: {
      type: String,
      required: true,
    },

    scientificName: {
      type: String,
    },

    category: {
      type: String,
    },

    waterNeeds: {
      type: String,
    },

    sunlight: {
      type: String,
    },

    climate: {
      type: String,
    },

    soilType: {
      type: String,
    },

    fertilizer: {
      type: String,
    },

    diseases: [
      {
        type: String,
      },
    ],

    image: {
      type: String,
    },

    qrCode: {
      type: String,
    },

    plantedDate: {
      type: Date,
      default: Date.now,
    },

    growthStatus: {
      type: String,
      enum: [
        "Healthy",
        "Growing",
        "Needs Water",
        "Diseased",
      ],
      default: "Growing",
    },

    location: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Plant",
  plantSchema
);