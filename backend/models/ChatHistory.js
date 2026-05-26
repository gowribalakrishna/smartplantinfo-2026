const mongoose = require("mongoose");

const chatHistorySchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },

      userMessage: {
        type: String,
        required: true,
      },

      botReply: {
        type: String,
        required: true,
      },

      language: {
        type: String,
        enum: ["English", "Telugu"],
      },

      plantName: {
        type: String,
      },
    },

    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "ChatHistory",
  chatHistorySchema
);