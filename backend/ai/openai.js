const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generatePlantReply =
  async (message) => {
    try {
      const completion =
        await openai.chat.completions.create(
          {
            model: "gpt-4.1-mini",

            messages: [
              {
                role: "system",

                content:
                  "You are a smart plantation assistant. Reply in Telugu if the user asks in Telugu. Reply in English if the user asks in English.",
              },

              {
                role: "user",

                content: message,
              },
            ],
          }
        );

      return completion.choices[0].message
        .content;
    } catch (error) {
      console.log(error);

      return "AI server error.";
    }
  };

module.exports = generatePlantReply;