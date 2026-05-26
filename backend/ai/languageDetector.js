const detectLanguage = (
  text
) => {
  // Telugu Unicode Range
  const teluguRegex =
    /[\u0C00-\u0C7F]/;

  if (teluguRegex.test(text)) {
    return "Telugu";
  }

  return "English";
};

module.exports = detectLanguage;