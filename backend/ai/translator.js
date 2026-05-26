const translateText = async (
  text,
  targetLanguage
) => {
  try {
    // SIMPLE LOCAL TRANSLATION

    const translations = {
      Mango: {
        Telugu: "మామిడి",
      },

      Rose: {
        Telugu: "రోజా",
      },

      Water: {
        Telugu: "నీరు",
      },

      Sunlight: {
        Telugu: "సూర్యకాంతి",
      },
    };

    if (
      targetLanguage === "Telugu"
    ) {
      return (
        translations[text]?.Telugu ||
        text
      );
    }

    return text;
  } catch (error) {
    console.log(error);

    return text;
  }
};

module.exports = translateText;