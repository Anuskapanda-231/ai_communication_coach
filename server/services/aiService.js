export const generateReply = async (message) => {
  let reply = "";
  let corrected = "";
  let feedback = "";

  if (message.includes("i working")) {
    reply = "You need better grammar.";
    corrected = "I am working.";
    feedback = "Use proper tense.";
  } else {
    reply = "Nice! Keep going 🚀";
    corrected = message;
    feedback = "Good sentence!";
  }

  return { reply, corrected, feedback };
};